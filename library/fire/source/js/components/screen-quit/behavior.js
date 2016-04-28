pl.game.component('screen-quit', function () {

  var characters;
  /**
   * Nodes, including the node of this screen, with a
   * attribute of pl-bg will get a background-image style
   * and the resource preloaded and collected for watching.
   */
  this.handleProperty({
    bg: function (_node, _name, _value) {
      var img = new Image();
      characters = characters || [];

      img.src = _value;
      characters.push(img);
      $(_node).css('background-image', 'url('+_value+')');
    }
  });

  // TODO: Make an automated way to handle this
  this.on('transitionend', function (_event) {
    if (this.state(this.STATE.LEAVE)) {
      this.addClass('LEAVE-END');  
    }
  });

  this.on('ui-open', function (_event) {
    this.game.addClass('QUIT-SCREEN');
    this.removeClass('LEAVE-END');
    this.game.pause(true);
  });

  this.on('ui-leave', function () {
    var vo = this.audio.voiceOver.sure;
    if(vo) vo.stop();
    this.game.removeClass('QUIT-SCREEN');
    this.game.resume();
  });

  this.init = function () {
    this.addClass('LEAVE LEAVE-END');
  };
  
  this.okay = function () {
    var sfx = this.audio.sfx.button;
    if(sfx) sfx.play();
    this.game.exit();
  };

  this.cancel = function () {
    var sfx = this.audio.sfx.button;
    if(sfx) sfx.play();
    this.leave();
  };

});
