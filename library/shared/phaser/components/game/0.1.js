class Game {
  constructor(preload = _.noop, create = _.noop, update = _.noop, helpers = {}) {
    preload = preload.bind(this);
    create = create.bind(this);
    update = update.bind(this);

    this.helpers = helpers;

    this.game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

    this.attachEvents();
  }

  attachEvents() {
    window.addEventListener('skoash-event', (e) => {
      switch (e.name) {
      case 'controller-update':
        this.controller = e.data.controller;
        break;
      case 'pause':
        this.game.paused = true;
        break;
      case 'resume':
        this.game.paused = false;
        break;
      }
    }, false);

    document.domain = 'changemyworldnow.com';
  }
}

export default Game;
