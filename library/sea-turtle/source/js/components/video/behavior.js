pl.game.component('video', function () {
  var bg;

  this.start = function () {
    var self = this;
    this.video.on('ended', function () {
      self.complete();
    });
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

  this.screen.on('ui-close', this.pause.bind(this));

});
