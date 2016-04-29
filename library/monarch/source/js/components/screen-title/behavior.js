pl.game.component('screen-title', function () {

  this.playSound = function (_sound) {
    var delay;

    delay = $(_sound).attr('pl-delay');

    if ($(_sound).hasClass('voice-over')) {
      this.currentVO = _sound;
    }

    if (delay) {
      return this.delay(delay, _sound.play.bind(_sound));
    } else {
      return _sound.play();
    }
  };

  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;

    this.delay(0, this.open);

    if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
      this.requiredQueue.on('complete', this.bind(function () {
        var sfx;

        sfx = pl.util.resolvePath(this, 'screen.audio.sfx.screenComplete') || pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

        if (sfx) this.playSound(sfx);
      }));
    }
  });

  /**
   * Start the title screen logo animation when the screen opens.
   */
  this.on('ui-open', function () {
    var so;
    this.close(this.game.loader);

    so = pl.util.resolvePath(this, 'audio.background[0]?');

    if (so) so.play();

    return this;
  });

  this.on('ui-close', function (_event) {
    if (!this.is(_event.target)) return;
    this.on('transitionend', function (_e) {
      if (!this.is(_e.target)) return;
      this.logo.removeClass(this.properties.animOut)
        .off('animationend');
      this.off('transitionend');
    });
  });

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

});
