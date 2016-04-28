pl.game.component('screen-basic', function () {

  this.on('ready', function (_event) {
    if (this.is(_event.target) && this.audio) {
      this.audio.rule('.voiceOver', 'shouldPlay', function (_event) {
        _event.response(!_event.target.config("dontautoplay"));
      });
    }

    if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
      this.requiredQueue.on('complete', this.bind(function () {
        var sfx;

        sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

        if (sfx) sfx.play();
      }));
    }
  });

  this.shouldProceed = function() {
    return (!this.state(this.STATE.PLAYING) && !this.state(this.STATE.VOICE_OVER)) || this.game.demoMode;
  };

  this.playSound = function (_sound) {
    var delay;
  
    delay = $(_sound.media).attr('pl-start');

    if (delay) {
      return this.delay(delay, _sound.play.bind(_sound));
    } else {
      return _sound.play();
    }
  };
  
  this.next = function () {
    var current, nextScreen, buttonSound;

    if(this.hasClass('last') && this.hasClass('COMPLETE')) this.game.quit.okay();

    if (this !== this.screen) {
      this.log('Not called on a screen');
      console.trace();
      return;
    }

    buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

    // delegate to a child "slides" component.
    if (this.slides && this.slides.isComponent) {
      current = this.slides.current();
      nextScreen = current.next();

      if (nextScreen == null) {
        current = this;
        nextScreen = this.proto();
      }
    }

    else {
      current = this;
      nextScreen = this.proto();
    }

    if (nextScreen) {
      current.leave();
      nextScreen.open();
      if (buttonSound) buttonSound.play();
    }

    return nextScreen;
  };

  this.prev = function () {
    var current, prevScreen, buttonSound;

    if (this !== this.screen) {
      this.log('Not called on a screen');
      console.trace();
      return;
    }

    buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

    // delegate to a child "slides" component.
    if (this.slides && this.slides.isComponent) {
      current = this.slides.current();
      prevScreen = current.prev();

      if (prevScreen == null) {
        current = this;
        prevScreen = this.proto();
      }
    }

    else {
      current = this;
      prevScreen = this.proto();
    }

    if (prevScreen) {
      current.close();
      prevScreen.open();
      if (buttonSound) buttonSound.play();
    }

    return prevScreen;
  };

  this.start = function () {
    var entities = this.hasOwnProperty('entities') && this.entities;

    this.startAudio();
    if (this.audio) this.audio.sfx.play('start');

    if (entities) {
      entities.forEach(function (_entity) {
        if (_entity.isMemberSafe('start')) _entity.start();
      });
    }

    return this;
  };

  this.stop = function () {
    var entities = this.hasOwnProperty('entities') && this.entities;

    this.stopAudio();
    this.kill('delay');

    if (entities) {
      entities.forEach(function (_entity) {
        if (_entity.isMemberSafe('start')) _entity.stop();
      });
    }

    return this;
  };

  this.complete = function () {
    this.game.audio.sfx.screenComplete.play();
    return this.proto();
  };

  this.on('ui-open', function (_event) {
    if (this.isReady && this.is(_event.target)) this.start();

    if(this.properties.gameClass) {
      this.game.addClass(this.properties.gameClass);
    }

    if(this.properties.sfx) {
      var sfx = this.properties.sfx.split(" ");
      for(var i = 0, n = sfx.length; i < n; i++) {
        if(this.audio.sfx[sfx[i]]) this.playSound(this.audio.sfx[sfx[i]]);
      }
    }
  });

  this.on('ui-leave ui-close', function (_event) {
    if(this.properties.gameClass) {
      this.game.removeClass(this.properties.gameClass);
    }

    if (this.isReady && this.is(_event.target)) this.stop();
  });

});
