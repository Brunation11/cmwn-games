pl.game.component('screen-basic', function () {

  this.shouldProceed = function () {
    return !this.state(this.STATE.VOICE_OVER) || this.game.demoMode;
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
    var fxSound = this.audio && this.audio.sfx.start;

    this.startAudio();

    if (fxSound) fxSound.play();
    if (this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

    return this;
  };

  this.stop = function() {
    if(this.timeoutID) {
      clearTimeout(this.timeoutID);
    }
    return this.proto();
  };

  this.on('ui-open', function (_event) {
    if (this.isReady && this === _event.targetScope) {
      this.start();
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

    if (this.isReady && this === _event.targetScope) {
      this.stop();
    }
  });

  this.on('ui-close', function (_event) {
    if(this.properties.gameClass) {
      this.game.removeClass(this.properties.gameClass);
    }

    if (this.isReady && this === _event.targetScope) {
      this.stop();
    }
  });

  this.complete = function () {
    var audio;

    audio = (this.audio && this.audio.has('screenComplete') ? this.audio : this.game.audio);

    audio.sfx.play('screenComplete');
    return this.proto();
  };

  this.on('ready', function () {
    if(this.state(this.STATE.OPEN)) this.start();
  });
});
