pl.game.component('frame', function () {
  
  this.ready = function () {
    if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
      this.requiredQueue.on('complete', this.bind(function () {
        var sfx;

        sfx = pl.util.resolvePath(this, 'game.audio.sfx.screenComplete');

        if (sfx) sfx.play();
      }));
    }
  };

  this.start = function () {
    var voSound;

    if (this.audio) {
      voSound = this.audio.voiceOver[0];

      this.audio.background.play();
      if (voSound && !voSound.config("dontautoplay")) voSound.play();
    }

    if (this.hasOwnProperty('entities') && this.entities[0]) this.entities[0].start();

    return this;
  };

  this.on('ui-open', function (_event) {
    if (this.isReady) {
      this.start();
    }

    if (this === _event.targetScope) {
      if (!(this.hasOwnProperty('isComplete') && this.isComplete) && !(this.hasOwnProperty('requiredQueue') && (this.requiredQueue && this.requiredQueue.length))) {
        this.complete();
      }
    }
  });

  this.on('ui-close', function (_event) {
    if (this.isReady && this.is(_event.target)) {
      this.stop();
    }
  });

});
