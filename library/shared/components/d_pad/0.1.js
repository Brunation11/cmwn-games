import classNames from 'classnames';

const UP = 'up';
const DOWN = 'down';
const LEFT = 'left';
const RIGHT = 'right';

class DPad extends skoash.Component {
  bootstrap() {
    var mousedown, mouseup;

    super.bootstrap();

    this.DOM = ReactDOM.findDOMNode(this);

    mousedown = e => {
      if (!e.target) return;
      this.updateGameState({
        path: this.props.outputTarget,
        data: {
          ref: e.target.getAttribute('data-ref')
        }
      });
    };

    mouseup = e => {
      if (!e.target) return;
      this.updateGameState({
        path: this.props.outputTarget,
        data: {
          ref: null
        }
      });
    };

    this.DOM.addEventListener('mousedown', mousedown);
    this.DOM.addEventListener('mouseup', mouseup);
    this.DOM.addEventListener('mouseout', mouseup);
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
