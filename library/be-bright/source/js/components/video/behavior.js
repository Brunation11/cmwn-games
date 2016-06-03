pl.game.component('video', function () {
  var bg;

  this.start = function () {
    this.video.on('ended', function () {
      this.complete();
    }.bind(this));
    this.stopBackground();
    this.video[0].play();
  };

  this.stopBackground = function () {
    if (!this.properties.playBackground && (bg = this.game.media.playing('.background'))) {
      bg.stop('@ALL');
    }
  };

  this.pause = function () {
    this.video[0].pause();
  };

  this.resume = function () {
    if (this.isComplete) return;
    this.stopBackground();
    this.video[0].play();
  };

});
