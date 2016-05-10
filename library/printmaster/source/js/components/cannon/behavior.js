pl.game.component('cannon', function () {

  this.isLaunchComplete = true;

  this.state('launch launched', '+LAUNCHED -RELOAD', {
    willSet: function () {
      this.playSFX('fire');
      this.isLaunchComplete = false;
      this.delay('1s', function () {
        this.isLaunchComplete = true;
      });
    }
  });

  this.state('reload', '+RELOAD -LAUNCHED', {
    shouldSet: function () {
      if (!this.isLaunchComplete) {
        return false;
      }
    }
  });

  this.behavior('fire', function () {
    var message;
    if (this.isLaunchComplete) {
      this.launch(this.ball);
      message = pl.util.resolvePath(this, this.properties.messagePath || 'cannon.properties.fire');
      return {
        message
      };
    }

    return false;
  });

  this.load = function () {
    this.reload(this.ball);
  };

  this.playSFX = function (_name) {
    var sfx;

    sfx = pl.util.resolvePath(this, 'audio.sfx.' + _name);

    if (sfx) sfx.play();

    return this;
  };

});
