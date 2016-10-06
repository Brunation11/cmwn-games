import classNames from 'classnames';

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

class DPad extends skoash.Component {
  constructor() {
    super();

    this.mousedown = this.mousedown.bind(this);
    this.clear = this.clear.bind(this);
    this.keydown = this.keydown.bind(this);
  }

  mousedown(e) {
    this.updateRef(e.target.getAttribute('data-ref'));
  }

  clear() {
    this.updateRef(null);
  }

  keydown(e) {
    var ref = null;
    if (e.keyCode === 37) {
      ref = 'left';
    } else if (e.keyCode === 38) {
      ref = 'up';
    } else if (e.keyCode === 39) {
      ref = 'right';
    } else if (e.keyCode === 40) {
      ref = 'down';
    }
    this.updateRef(ref);
  }

  bootstrap() {
    super.bootstrap();

    this.DOM = ReactDOM.findDOMNode(this);

    this.DOM.addEventListener('mousedown', this.mousedown);
    this.DOM.addEventListener('clear', this.clear);
    this.DOM.addEventListener('mouseout', this.clear);


    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.clear);
  }

  updateRef(ref) {
    this.updateGameState({
      path: this.props.outputTarget,
      data: {
        ref
      }
    });
  }

  getClassNames() {
    return classNames('d-pad', super.getClassNames());
  }

  render() {
    return (
      <div
        {...this.props}
        className={this.getClassNames()}
      >
        {this.renderContentList('assets')}
        <div data-ref={UP} className={UP} />
        <div data-ref={LEFT} className={LEFT} />
        <div data-ref={DOWN} className={DOWN} />
        <div data-ref={RIGHT} className={RIGHT} />
      </div>
    );
  }
}

DPad.defaultProps = _.defaults({
  img: '',
  map: '',
  outputTarget: 'd-pad',
}, skoash.Component.defaultProps);

export default DPad;
