pl.game.component('audio-sequence', function () {
  var i, sounds;

  this.on('ready', function (_event) {
    if (!this.is(_event.target)) return;

    sounds = this.find('audio').map(function () {
      return $(this).data('context');
    }).toArray();

    this.audio.on('ended', function (_event) {
      var next = sounds[i++];
      if (next && this.screen.state(this.screen.STATE.OPEN)) this.screen.playSound(next);
    }.bind(this));
  });

  this.start = function() {
    i = 1;
    if(sounds[0] && this.screen.state(this.screen.STATE.OPEN)) this.screen.playSound(sounds[0]);
  };
});
