pl.game.component('screen-basic', function () {

  this.on('ready', function (_e) {
    var self = this;

    if(!this.is(_e.target)) return;

    if (this.isMemberSafe('requiredQueue') && this.requiredQueue) {
      this.requiredQueue.on('complete', function () {
        var sfx;

        sfx = pl.util.resolvePath(self, 'game.audio.sfx.screenComplete');

        if (sfx) sfx.play();
      });
    }
  });
  
  this.next = function () {
    var nextScreen, buttonSound;

    if(this.hasClass('last') && this.hasClass('COMPLETE')) this.game.quit.okay();

    nextScreen = this.proto();
    buttonSound = pl.util.resolvePath(this, 'game.audio.sfx.button');

    if (nextScreen) {
      this.screen.leave();
      nextScreen.open();
      if (buttonSound) buttonSound.play();
    }

    return nextScreen;
  };

  this.prev = function () {
    var prevScreen, buttonSound;

    prevScreen = this.proto();
    buttonSound = this.game.audio.sfx.button;

    if (prevScreen) {
      this.screen.close();
      prevScreen.open();
      if (buttonSound) buttonSound.play();
    }

    return prevScreen;
  };

  this.start = function () {
    this.startAudio();

    this.startEntities();

    return this;
  };

  this.startEntities = function (argument) {
    var conditions;

    if (this.hasOwnProperty('entities') && this.entities) {
      this.entities.forEach((_node) => {
        if(typeof _node.start === 'function') _node.start();
      });
    }

    return false;
  };

  this.on('ui-open', function (_event) {
    if (!this.is(_event.target)) return;

    if (this.isReady) {
      this.start();
    }

    if (!this.isComplete) {
      if (!this.requiredQueue || (this.isMemberSafe('requiredQueue') && !this.requiredQueue.length)) {
        this.complete();
      }
    }

    if (this.screen.isLast()) {
      this.addClass('last');
    }
  });

  this.on('ui-close', function (_event) {
    if (this.isReady && this === _event.targetScope) {
      this.stop();
    }
  });

});
