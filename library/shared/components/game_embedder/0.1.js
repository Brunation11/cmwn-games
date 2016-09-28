import _ from 'lodash';

class GameEmbedder extends skoash.Component {
  constructor() {
    super();

    document.domain = 'localhost';

    this.respond = this.respond.bind(this);
  }

  bootstrap() {
    super.bootstrap();

    this.gameNode = ReactDOM.findDOMNode(this.refs.game);
    this.gameNode.addEventListener('game-event', this.respond);
  }

  respond(opts) {
    console.log(opts);
    if (opts.complete) {
      this.complete();
    } else if (opts.updateGameState) {
      this.updateGameState(opts);
    }
  }

  emitEvent(data) {
    var e = new Event('skoash-event');
    e.type = 'skoash-event';
    e.name = data.name;
    e.data = data;
    this.gameNode.contentWindow.dispatchEvent(e);
  }

  render() {
    return (
      <iframe
        {...this.props}
        ref="game"
      />
    );
  }
}

GameEmbedder.defaultProps = _.defaults({
  complete: false,
  checkComplete: false,
}, skoash.Component.defaultProps);

export default GameEmbedder;
