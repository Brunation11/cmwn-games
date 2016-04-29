pl.game.component('screen-title', function () {

  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;

    if (this.game.iosSplash.state(this.STATE.READY)) this.game.iosSplash.splash();
  });

  /**
   * Start the title screen logo animation when the screen opens.
   */
  this.on('ui-open', function () {
    var delay = this.properties.delay;

    if (delay) {
      this.delay(this.properties.delay, this.animateSplashImage);
    } else {
      this.animateSplashImage();
    }

    this.start();
    this.game.setWallpaper(this.properties.wallpaper);

    return this;
  });

  this.on('ui-close', function (_event) {
    if (!this.is(_event.target)) return;
    this.on('transitionend', function (_event) {
      if (!this.is(_event.target)) return;
      this.logo.removeClass(this.properties.animOut)
        .off('animationend');
      this.off('transitionend');
    });
  });

  this.start = function () {
    var bgSound, voSound;

    bgSound = pl.util.resolvePath(this, 'audio.background[0]?');
    voSound = pl.util.resolvePath(this, 'audio.voiceOver[0]?');
    fxSound = pl.util.resolvePath(this, 'audio.sfx.start');

    if (bgSound) bgSound.play();
    if (fxSound) fxSound.play();
    if (voSound) voSound.play();

    if (this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

    return this;
  };

  this.next = function () {
    var nextScreen, so, animate;

    function leave() {
      this.screen.leave();
      nextScreen.open();
    }

    nextScreen = this.proto();
    so = pl.util.resolvePath(this, 'audio.sfx.nextScreen');
    animate = this.properties.animOut || '';

    if (!so) {
      so = pl.util.resolvePath(this, 'game.audio.sfx.button');
    }

    if (nextScreen) {
      if (animate) {
        this.logo
          .on('animationend', leave.bind(this))
          .addClass(animate);
      } else {
        leave.call(this);
      }

      if (so) so.play();
    }

    return nextScreen;
  };

  this.animateSplashImage = function () {
    this.logo.addClass('animated ' + (this.properties.anim || ''));
    this.complete();
    return this;
  };

});
