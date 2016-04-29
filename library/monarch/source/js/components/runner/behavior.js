pl.game.component('runner', function () {
  var canvas, Flower, gameLoop, FLOWER, scale, boundPulse;

  FLOWER = {
    ORANGE: "[pl-id=orange]",
    RED: "[pl-id=red]",
    YELLOW: "[pl-id=yellow]"
  };

  gameLoop = {
    
    lastRecycledFlower: null,

    // main game loop
    frame: function (_scope) {
      // tranision flowers one px on each frame
      _scope.flowers.forEach((function (_flower) {
        var x, width;
        _flower.position.x -= 1;

        x = _flower.position.x + _flower.margin;
        width = _flower.size.width;

        if (x + width < 0) this.recycle(_scope, _flower);
      }).bind(this));
    },

    recycle: function (_scope, _flower) {
      _flower.image = pl.util.random(_scope.bin);
      _flower.margin = pl.util.random(2,10) * 10;
      _flower.position.x = _scope.width() + _flower.margin;

      if (this.lastRecycledFlower) {
        _flower.position.x = this.lastRecycledFlower.margin + 
          this.lastRecycledFlower.position.x +
          this.lastRecycledFlower.size.width;
      }

      this.lastRecycledFlower = _flower;
    },

    pulsePoint: 0,

    pulse: function (_scope,_flower) {
      // pulse flower
      gameLoop.pulsePoint++;
      _flower.position.x += gameLoop.pulsePoint % 40 > 20 ? 1 : -1;
      _flower.position.y += gameLoop.pulsePoint % 40 > 20 ? 1 : -1;
      _flower.size.width += gameLoop.pulsePoint % 40 > 20 ? -2 : 2;
      _flower.size.height += gameLoop.pulsePoint % 40 > 20 ? -2 : 2;
    },

  };

  Flower = pl.Basic.extend(function () {
    
    this.position = null;
    this.size = null;
    this.margin = 0;
    this.image = null;

    this.init = function (_image) {
      var $image = $(_image);

      this.image = _image;

      this.position = pl.Point.create();
      this.size = [_image.naturalWidth, _image.naturalHeight].to('size');
      this.margin = pl.util.random(2,10) * 10;

      ['Width', 'Height'].some(function (_plane) {
        if (_image[_plane.toLowerCase()] !== _image['natural'+_plane]) {
          scale = _image[_plane.toLowerCase()] / _image['natural'+_plane];
          return false;
        }
      });

      if (scale) this.size = this.size.scale(scale).math('floor');
 
      return this;
    };

    this.render = function () {
      return {
        drawImage: [this.image, this.position.x + this.margin, this.position.y + 25, this.size.width, this.size.height]
      };
    };

    this.is = function (_type) {
      return $(this.image).is(_type);
    };

    this.id = function () {
      return $(this.image).id();
    }
  });

  canvas = {
    
    ctx: null,
    node: null,
    content: null,
    scale: 1,

    init: function (_canvas, _size, _scale) {
      var size;

      size = _scale ? _size.scale(_scale) : _size;

      this.node = _canvas;
      this.ctx = _canvas.getContext('2d');
      this.scale = _scale || 1;

      if (!~size.indexOf(void 0)) {
        _canvas.width = size.width;
        _canvas.height = size.height;
      }

      this.ctx.scale(_scale, _scale);

      return this;
    },

    resize: function (_size, _scale) {
      var size;

      size = _scale ? _size.scale(_scale) : _size;

      this.node.width = size.width;
      this.node.height = size.height;
      this.scale = _scale || 1;

      this.ctx.scale(_scale, _scale);
    },

    clear: function () {
      this.ctx.clearRect(0,0, this.node.width/this.scale, this.node.height/this.scale);
    },

    draw: function (_obj) {
      var commands, cmd;

      commands = _obj.render();

      for (cmd in commands) {
        if (typeof this.ctx[cmd] !== 'function') continue;
        this.ctx[cmd].apply(this.ctx, commands[cmd]);
      }
    }
  };

  this.bin = null;
  this.flowers = null;
  this.player = null;
  this.conveyor = null;
  this.isConveyorRunning = false;

  // Handle when the component scope is ready.
  this.on('ready', function (_event) {
    var canvasSize, width;

    // Do not handle child scopes becomming ready.
    if (!this.is(_event.target)) return;

    width = this.width();

    this.bin = this.findOwn('.bin img.flower').toArray();
    this.flowers = (function (_scope) {
      var shouldAppend, image, flower, x;

      shouldAppend = true;
      x = 0;

      while (shouldAppend) {
        image = pl.util.random(_scope.bin);
        flower = Flower.create().init(image);

        flower.position.x = x;
        x += flower.size.width + flower.margin;

        this.push(flower);

        shouldAppend = flower.position.x < width;
        
        _scope.log(flower.position.x, width);
      }

      return this;

    }).call([], this);

    canvasSize = pl.Size
      .create()
      .set(width, 125);

    canvas.init(this.conveyor[0], canvasSize, this.game.zoom);

    this.game.viewport.onResize(this.game.bind(function () {
       canvas.resize(canvasSize, this.zoom);
    }));
  });

  this.on('transitionend', function (_event) {
    if (!this.player.is(_event.target)) return;

    if (this.player.state('GRAVITY')) {
      this.isConveyorRunning = !this.testFlower();

      if (this.isConveyorRunning) this.player.removeClass('GRAVITY');

    } else if (this.player.state('JUMPING')) {
      this.player
        .removeClass('JUMPING')
        .addClass('GRAVITY')
        .attr('style', null);
    }
  });

  this.start = function () {
    this.log('started');
    this.isConveyorRunning = true;
    this.eachFrame(this.onEachFrame);
  };

  this.restart = function() {
    this.isConveyorRunning = true;
    this.player
      .removeClass('GRAVITY');
  }

  this.stop = function () {
    this.eachFrame(this.onEachFrame, false);
  };

  this.onEachFrame = function () {
    if (!this.isConveyorRunning) return;

    canvas.clear();

    gameLoop.frame(this);

    this.flowers.forEach(function (_flower) {
      canvas.draw(_flower);
    });
  };

  this.pulse = function (_flower) {
    if(gameLoop.pulsePoint >= 80) {
      gameLoop.pulsePoint = 0;
      this.eachFrame(boundPulse, false);
    }

    canvas.clear();

    gameLoop.pulse(this,_flower);

    this.flowers.forEach(function (_flower) {
      canvas.draw(_flower);
    });
  };

  this.testFlower = function () {
    var target, flower, player;

    player = {
      pos: this.player.absolutePosition(),
      size: pl.Size.create().set(this.player.width(), this.player.height())
    };

    target = pl.Point.create().set(player.pos.x + (player.size.width/2), 40).inc(20,0);

    // canvas.ctx.fillStyle = '#000';

    this.flowers.some(this.bind(function (_flower) {
      var hitArea, padding, inBoundsX, inBoundsY;

      padding = 25;
      hitArea = {
        x1: _flower.position.x + _flower.margin + padding,
        y1: _flower.position.y + padding,
        x2: _flower.position.x + _flower.margin + _flower.size.width - (padding * 1),
        y2: _flower.position.y +_flower.size.height - (padding * 1)
      };

      // canvas.ctx.fillRect(hitArea.x1, hitArea.y1, hitArea.x2 - hitArea.x1, hitArea.y2 - hitArea.y1);

      inBoundsX = target.x > hitArea.x1 && target.x < hitArea.x2;
      inBoundsY = target.y > hitArea.y1 && target.y < hitArea.y2;

      if (inBoundsX && inBoundsY && _flower.is(FLOWER.RED)) {
        flower = _flower;
        return true;
      }
    }));

    this.landed(flower);

    // canvas.ctx.fillStyle = '#00f';
    // canvas.ctx.fillRect(target.x, target.y, 10,10);

    return flower;
  };

  this.behavior('jump', function () {
    var position;

    if (!this.isConveyorRunning) return;

    position = this.player.transformPosition();

    this.player
      .removeClass('GRAVITY')
      .addClass('JUMPING')
      .transformPosition(position.dec(0,60));

    this.log('behavior:jump');

    return {
      behaviorTarget: this.player
    };
  });

  this.behavior('landed', function (_flower) {
    var id;

    if(_flower) {
      id = _flower.id();
      boundPulse = this.pulse.bind(this,_flower);
      this.eachFrame(boundPulse);
    }

    return {
      message: id,
      behaviorTarget: this.player
    };
  });

});
