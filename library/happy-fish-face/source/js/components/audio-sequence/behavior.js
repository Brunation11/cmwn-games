pl.game.component('audio-sequence', function () {
  var i, sounds;

  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;

    sounds = this.find('audio').map(function () {
      return $(this).data('context');
    }).toArray();

    this.audio.on('ended', function (_event) {
      var next = sounds[i++];
      if (next && this.screen.state(this.screen.STATE.OPEN)) next.play();
    }.bind(this));
  });

  this.start = function () {
    i = 1;
    if (sounds[0]) sounds[0].play();
  };
});
