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
      if (e.data.target && e.data.target.id === 'pause') {
        if (e.name === 'mousedown') {
          this.game.paused = !this.game.paused;
        }
      } else {
        if (e.name === 'mousedown') {
          this.controller[e.data.target.id] = true;
        } else if (e.name === 'mouseup') {
          this.controller[e.data.target.id] = false;
        }
      }
    }, false);

    document.domain = 'changemyworldnow.com';
  }
}

export default Game;
