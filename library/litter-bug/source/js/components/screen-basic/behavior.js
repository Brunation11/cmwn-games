pl.game.component('screen-basic', function () {

  this.allowAction = function() {
    return (this.screen.state(this.screen.STATE.OPEN) && !this.screen.state(this.screen.STATE.VOICE_OVER)) || this.game.demoMode;
  };

  this.next = function () {
    var nextScreen, buttonSound;

    nextScreen = this.proto();
    buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

    if (nextScreen) {
      this.leave();
      nextScreen.open();
      if (buttonSound) buttonSound.play();
    }

    return nextScreen;
  };

  this.prev = function () {
    var prevScreen, buttonSound;

    prevScreen = this.proto();
    buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

    if (prevScreen) {
      this.screen.close();
      prevScreen.open();
      if (buttonSound) buttonSound.play();
    }

    return prevScreen;
  };

  this.start = function () {
    this.startAudio();

    if (this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

    return this;
  };

  this.on('ui-open', function (_event) {
    if (this.isReady && this === _event.targetScope) {
      this.on('transitionend', function(_event) {
        if(!this.is(_event.target)) return;
        this.start();
        this.off('transitionend');
      }.bind(this));
    }

    if(this.properties.gameClass) {
      this.game.addClass(this.properties.gameClass);
    }

    if (!this.requiredQueue || (this.hasOwnProperty('requiredQueue') && !this.requiredQueue.length)) {
      this.complete();
    }
  });

  this.on('ui-leave', function (_event) {
    if(this.properties.gameClass) {
      this.game.removeClass(this.properties.gameClass);
    }

    if(this.properties.gameClass) {
      this.game.removeClass(this.properties.gameClass);
    }

    if (this.isReady && this === _event.targetScope) {
      this.stop();
    }
  });

  this.on('ui-close', function (_event) {
    if(this.properties.gameClass) {
      this.game.removeClass(this.properties.gameClass);
    }

    if(this.properties.gameClass) {
      this.game.removeClass(this.properties.gameClass);
    }

    if (this.isReady && this === _event.targetScope) {
      this.stop();
    }
  });

  this.on('ready', function(_event) {
    if(!this.is(_event.target)) return;
    if(this.state(this.STATE.OPEN)) this.start();
  });

});
