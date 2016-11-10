import _ from 'lodash';

class GameEmbedder extends skoash.Component {
  constructor() {
    super();

    /*
     * For testing purposes, in order for skoash to be able to communicate
     * with the embedded game, you may want to include `document.domain = 'localhost';`
     * in both this component and the game you're embedding.
     * In production you may want to include `document.domain = 'changemyworldnow.com';`
     * in the embedded game since it will be included in the skoash game.
     */

    this.respond = this.respond.bind(this);
    this.onLoad = this.onLoad.bind(this);
  }

  bootstrap() {
    super.bootstrap();

    this.gameNode = ReactDOM.findDOMNode(this.refs.game);
    this.gameNode.addEventListener('game-event', this.respond);
  }

  respond(opts) {
    if (opts.complete) {
      this.complete();
    } else if (opts.updateGameState) {
      this.updateGameState(opts);
    }
  }

  onLoad() {
    this.emitEvent({
      name: 'focus',
    });

    this.props.onLoad.call(this);
  }

  emitEvent(data) {
    var e = new Event('skoash-event');
    e.name = data.name;
    e.data = data;
    this.gameNode.contentWindow.dispatchEvent(e);
  }

  render() {
    return (
      <iframe
        {...this.props}
        ref="game"
        onLoad={this.onLoad}
      />
    );
  }
}

GameEmbedder.defaultProps = _.defaults({
  complete: false,
  checkComplete: false,
  onLoad: _.noop,
}, skoash.Component.defaultProps);

export default GameEmbedder;
