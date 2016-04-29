pl.game.component('screen-basic', function () {

  function playButtonSFX (_direction) {
    var so = (_direction === "next") ? pl.util.resolvePath(this, 'this.audio.sfx.nextScreen') : pl.util.resolvePath(this, 'this.game.audio.sfx.nextScreen');
    if (so) so.play();
  }

  this.playSound = function(_sound) {

    if(_sound.type === 'voiceOver') {
      this.currentVO = _sound;
    }

    return _sound.play();
  };

  this.on('ui-open', function (_event) {
    if (this.is(_event.target) && this.isReady) {
      this.game.setWallpaper(this.properties.wallpaper);
      this.start();
      if (this.completed() && !this.isComplete && !this.game.demoMode) this.complete();
    }
  });

  this.on('ui-leave', function (_event) {
    if (this.is(_event.target)) this.stop();
  });

  this.on('ui-close', function (_event) {
    if (this.is(_event.target)) this.stop();
  });

  this.next = function () {
    var nextScreen, isLastScreen;

    nextScreen = this.proto();
    isLastScreen = this.game.screens.length - 1 === this.index();

    if (nextScreen) {
      this.screen.leave();
      nextScreen.open();
      playButtonSFX.call(this, 'next');
    } else if (isLastScreen && this.completed()) {
      this.game.quit.okay();
    }

    return nextScreen;
  };

  this.prev = function () {
    var prevScreen;

    prevScreen = this.proto();

    if (prevScreen) {
      this.screen.close();
      prevScreen.open();
      playButtonSFX.call(this, 'prev');
    }

    return prevScreen;
  };

  this.start = function () {
    var bgSound, voSound;

    bgSound = pl.util.resolvePath(this, 'audio.background[0]?');
    voSound = pl.util.resolvePath(this, 'audio.voiceOver[0]?');
    fxSound = pl.util.resolvePath(this, 'audio.sfx.start');

    if(bgSound) bgSound.play();
    if(fxSound) fxSound.play();
    if(voSound) this.playSound(voSound);

    if(this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

    return this;
  };

  this.stop = function() {
    if(this.currentVO) {
      this.currentVO.stop();
    }

    return this;
  };
  
  this.complete = function () {
    this.game.audio.sfx.screenComplete.play();
    return this.proto();
  };

});
