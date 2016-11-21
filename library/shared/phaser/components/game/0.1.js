class Game {
  constructor(opts = {}) {
    opts.preload = (opts.preload || _.noop).bind(this);
    opts.create = (opts.create || _.noop).bind(this);
    opts.update = (opts.update || _.noop).bind(this);

    opts = _.defaults(opts, {
      width: 960,
      height: 540,
      renderer: Phaser.CANVAS,
      parent: '',
      helpers: {},
      state: { preload: opts.preload, create: opts.create, update: opts.update },
    });

    this.helpers = opts.helpers;

    this.game = new Phaser.Game(opts.width, opts.height, opts.renderer, opts.parent, opts.state);

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
