import classNames from 'classnames';

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

class DPad extends skoash.Component {
  bootstrap() {
    var mousedown, mouseup, keydown;

    super.bootstrap();

    this.DOM = ReactDOM.findDOMNode(this);

    mousedown = e => {
      this.updateRef(e.target.getAttribute('data-ref'));
    };

    mouseup = () => {
      this.updateRef(null);
    };

    this.DOM.addEventListener('mousedown', mousedown);
    this.DOM.addEventListener('mouseup', mouseup);
    this.DOM.addEventListener('mouseout', mouseup);

    keydown = (e) => {
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
    };

    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', mouseup);
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
