import classNames from 'classnames';

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

class DPad extends skoash.Component {
  constructor() {
    super();

    this.mousedown = this.mousedown.bind(this);
    this.mouseup = this.mouseup.bind(this);
    this.keydown = this.keydown.bind(this);
    this.keyup = this.keyup.bind(this);
  }

  mousedown(e) {
    this.updateRef(e.target.getAttribute('data-ref'));
  }

  mouseup(e) {
    this.updateRef(e.target.getAttribute('data-ref'), false);
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

  keyup(e) {
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
    this.updateRef(ref, false);
  }

  bootstrap() {
    super.bootstrap();

    this.DOM = ReactDOM.findDOMNode(this);

    this.DOM.addEventListener('mousedown', this.mousedown);
    this.DOM.addEventListener('mouseup', this.mouseup);
    this.DOM.addEventListener('mouseout', this.mouseup);

    window.addEventListener('keydown', this.keydown);
    window.addEventListener('keyup', this.keyup);
  }

  updateRef(ref, isDown = true) {
    this.updateGameState({
      path: this.props.outputTarget,
      data: {
        [ref]: isDown
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
  outputTarget: 'd-pad',
}, skoash.Component.defaultProps);

export default DPad;
