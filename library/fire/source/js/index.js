/**
 * Index script
 * @module
 */
import './config.game';

import '../../../shared/js/screen-ios-splash';
import './components/audio-sequence/behavior';
import './components/background/behavior';
import './components/dropzone/behavior';
import './components/frame/behavior';
import './components/modal/behavior';
import './components/multiple-choice/behavior';
import './components/reveal/behavior';
import './components/screen-basic/behavior';
import './components/screen-quit/behavior';
import './components/selectable/behavior';
import './components/slides/behavior';
import './components/smoke/behavior';
import './components/title/behavior';

import '../../../shared/js/test-platform-integration';
import '../../../shared/js/google-analytics';

pl.game('fire', function () {

  pl.game.attachScreen = function(cb) {
    cb.call(this);
  };

  var self = this;

  // the following is the mouse smoke js
  (function () {
    var canvas = document.createElement('canvas');
    var w = canvas.width = 960,
      h = canvas.height = 540;
    var c = canvas.getContext('2d');

    var img = new Image();
    img.src = 'http://oi41.tinypic.com/4i2aso.jpg';

    var position = {x: w / 2, y: h / 2};

    document.body.appendChild(canvas);

    var particles = [];
    var random = function (min, max){
      return Math.random() * (max - min) * min;
    };

    document.body.onmousemove = function (e){
      position.x = e.clientX / self.zoom;
      position.y = e.clientY / self.zoom;
    };
    function Particle(x, y){
      this.x = x;
      this.y = y;
      this.velY = -2;
      this.velX = (random(1, 10) - 5) / 10;
      this.size = random(3, 5) / 10;
      this.alpha = 1;
      this.update = function (){
        this.y += this.velY;
        this.x += this.velX;
        this.velY *= 0.99;
        if (this.alpha < 0) this.alpha = 0;
        c.globalAlpha = this.alpha;
        c.save();
        c.translate(this.x, this.y);
        c.scale(this.size, this.size);
        c.drawImage(img, -img.width / 2, -img.height / 2);
        c.restore();
        this.alpha *= 0.96;
        this.size += 0.02;
      };
    }

    var draw = function (){
      var p = new Particle(position.x, position.y);
      particles.push(p);

      while (particles.length > 500) particles.shift();

      c.globalAlpha = 1;
      c.fillStyle = '#000';
      c.fillRect(0, 0, w, h);

      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
      }
    };

    setInterval(draw, 1000 / 60);
  }());
  // end of the mouse smoke js

  var soundClasses = function () {
    var classes = '';

    this.on('audio-play', function (_event) {
      var id = _event.target.$el[0].id;
      if (id) {
        id = id.toUpperCase();
        this.addClass(id);
        classes += ' ' + id;
      }
    });

    this.on('ui-close', function () {
      this.removeClass(classes);
      classes = '';
    });
  };

  this.screen('title', function () {

    this.on('ready', function (_event) {
      if (!this.is(_event.target)) return;

      if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
    });

    this.on('ui-open', this.complete);

    this.startAudio = function () {
      this.title.audio.background.play();
      this.title.audio.voiceOver.play();
    };
  });

  this.screen('info-chemical', soundClasses);
  this.screen('info-fuel-oxygen', soundClasses);

  this.screen('alarm', function () {
    this.pushDown = function () {
      if (this.audio) this.audio.sfx.play();
      this.screen.next();
    };
  });

  this.screen('break-triangle', soundClasses);

  this.screen('flip', function () {
    this.next = function () {
      this.game.quit.okay();
    };

    this.complete = function () {
      var eventCategory = (['game', this.game.id(), this.id() + '(' + (this.index() + 1) + ')']).join(' ');

      ga('send', 'event', eventCategory, 'complete');

      pl.game.trigger($.Event('platform-event', {
        name: 'flip',
        gameData: {id: this.game.id()}
      }));

      return this.proto();
    };
  });

  this.screen('quit', function () {
    var ctx;

    this.on('ready', function (_e) {
      if (!this.is(_e.target)) return;

      ctx = new (window.AudioContext || window.webkitAudioContext);
      this.audio.voiceOver.sure.setContext(ctx);
      this.audio.sfx.button.setContext(ctx);
    });

    this.on('ui-open', function () {
      var vo, sfx;

      vo = this.audio.voiceOver.sure;
      sfx = this.audio.sfx.button;
      if (vo) vo.play();
      if (sfx) sfx.play();
    });
  });

  this.exit = function () {
    var screen, eventCategory;

    screen = this.findOwn(pl.game.config('screenSelector') + '.OPEN:not(#quit)').scope();
    eventCategory = (['game', this.id(), screen.id() + '(' + (screen.index() + 1) + ')']).join(' ');

    ga('send', 'event', eventCategory, 'quit');

    return this.proto();
  };
});
