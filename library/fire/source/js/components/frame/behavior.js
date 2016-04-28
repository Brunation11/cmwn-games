pl.game.component('frame', function () {

  this.on('ready', function (_event) {
    if (this.is(_event.target) && this.audio) {
      this.audio.rule('.voiceOver', 'shouldPlay', function (_event) {
        _event.response(!_event.target.config("dontautoplay"));
      });
    }
  });
  
  this.start = function () {
    this.log('start');
    return this.screen.start.call(this);
  };

  this.stop = function () {
    return this.screen.stop.call(this);
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

});
