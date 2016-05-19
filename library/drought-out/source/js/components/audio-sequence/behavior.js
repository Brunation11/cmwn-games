pl.game.component('audio-sequence', function () {
  var sounds;

  this.on('ready', function (_event) {
    var self = this;

    if (!this.is(_event.target)) return;

    sounds = this.audio.find('.audio');

    this.audio.on('ended', function () {
      var next = sounds[self.i++];
      if (next) next.play();
    });
  });

  this.start = function () {
    this.i = 1;
    if (sounds.length) sounds[0].play();
  };
});
