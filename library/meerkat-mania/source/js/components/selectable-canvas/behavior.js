pl.game.component('selectable-canvas', function () {

  var SELECTOR;

  SELECTOR = {
    CORRECT: '[pl-correct]',
    INCORRECT: '[pl-incorrect]'
  };
  
  this.buffer = null;
  this.bctx = null;
  this.items = null;

  this.state('activate active', '+ACTIVE');

  this.state('deactivate', '-ACTIVE');

  this.init = function () {
    this.buffer = document.createElement('canvas');
    this.bctx = this.buffer.getContext('2d');
  };

  this.ready = function () {
    var correct, $items;

    correct = pl.Queue.create();

    correct.on('complete', this.bind(function () {
      this.complete();
    }));

    this.buffer.width = this.$els.width();
    this.buffer.height = this.$els.height();

    $items = this.find('li img');

    this.items = $items
      .map(function (_index, _node) {
        var $node;

        $node = $(_node);

        if ($node.is(SELECTOR.CORRECT)) correct.add(_index);

        return $node;
      })
      .toArray();

    this.items.correct = correct;
  };

  this.isImageTarget = function (_$image, _point, _offset, _scale) {
    var offset = _$image.offset();

    this.bctx.clearRect(0, 0, this.buffer.width, this.buffer.height);
    this.bctx.drawImage(_$image[0], offset.left/_scale - _offset[0], offset.top/_scale - _offset[1], _$image.width(), _$image.height());
    pixel = this.bctx.getImageData(_point.x, _point.y, 1,1);

    this.bctx.fillStyle = 'white';
    this.bctx.fillRect(_point.x, _point.y, 5,5);

    // opaque pixel
    return pixel.data[3] > 0;
  };

  this.behavior('select', function (_cursor) {
    var offset, cursor, scale, returnValue = false;

    scale = this.game.transformScale().x;
    offset = this.$els.absolutePosition().scale(1/scale);
    cursor = this.event.cursor
      .scale(1/this.game.zoom)
      .dec(offset)
      .math('floor');

    this.items.every(this.bind(function (_$item) {
      if (this.isImageTarget(_$item, cursor, offset, scale)) {
        returnValue = {
          message: _$item.parent().index(),
          behaviorTarget: _$item.parent()
        };
        return false;
      }

      return true;
    }));

    return returnValue;
  });

  this.deactivateAll = function() {
    this.deactivate(this.getActive());
  }

  this.unhighlightAll = function() {
    this.unhighlight(this.getHighlighted());
  }

});
