pl.game.component('video', function () {

  this.start = function() {
    this.video.on('ended', function() {
      this.screen.complete();
    }.bind(this));
    if(this.game.bgSound) this.game.bgSound.pause();
    this.video[0].play();
  };

  this.pause = function() {
    this.video[0].pause();
  };

  this.resume = function() {
    if(this.isComplete) return;
    this.video[0].play();
  };

});
