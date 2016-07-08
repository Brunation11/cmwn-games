pl.game.component('audio-sequence', function () {
  var i, sounds, self = this;

  self.on('ready', function (_event) {
    if (!self.is(_event.target)) return;

    sounds = self.find('> audio').toArray();

    self.audio.on('ended', function () {
      var next = sounds[i++];
      if (next && self.screen.state(self.screen.STATE.OPEN)) {
        setTimeout(function () {
          self.screen.playSound($(next).data('context'));
        }, 0);
      }
    }.bind(self));
  });

  self.start = function () {
    i = 1;
    if (sounds[0] && self.screen.state(self.screen.STATE.OPEN)) self.screen.playSound($(sounds[0]).data('context'));
  };
});
