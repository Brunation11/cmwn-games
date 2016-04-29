pl.game.component('screen-quit', function () {

  this.buttonSound = function () {
    if (this.audio.sfx.button) this.audio.sfx.button.play();
  };

  // TODO: Make an automated way to handle this
  this.on('transitionend', function (_event) {
    if (this.state(this.STATE.LEAVE)) {
      this.addClass('LEAVE-END');
    }
  });

  this.on('ready', function (_e) {
    var ctx;

    if (!this.is(_e.target)) return;

    ctx = new (window.AudioContext || window.webkitAudioContext);
    if (this.audio.voiceOver.sure) this.audio.voiceOver.sure.setContext(ctx);
    if (this.audio.sfx.button) this.audio.sfx.button.setContext(ctx);
  });

  this.on('ui-open', function (_event) {
    if (this.audio.voiceOver.sure) this.audio.voiceOver.sure.play();
    this.buttonSound();
    this.game.addClass('QUIT-SCREEN');
    this.removeClass('LEAVE-END');
    this.game.pause(true);
  });

  this.on('ui-leave', function () {
    this.game.removeClass('QUIT-SCREEN');
    this.game.resume();
  });

  this.init = function () {
    this.addClass('LEAVE LEAVE-END');
  };

  this.okay = function () {
    this.buttonSound();
    this.game.exit();
  };

  this.cancel = function () {
    this.buttonSound();
    this.leave();
  };

});
