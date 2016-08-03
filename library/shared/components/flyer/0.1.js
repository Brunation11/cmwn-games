import _ from 'lodash';

class Flyer extends skoash.Component {
  constructor() {
    super();

    this.state = {
      jumping: false,
      animate: true,
      stamp: 0,
      translateY: 0
    };

    this.onClick = this.onClick.bind(this);
    this.onJumpEnd = this.onJumpEnd.bind(this);
    this.onResize = this.onResize.bind(this);
    this.startGravity = this.startGravity.bind(this);
  }

  bootstrap() {
    super.bootstrap();
    this.addEventListenters();
    this.flyerNode = ReactDOM.findDOMNode(this.refs.flyer);
  }

  start() {
    super.start();
    this.bootstrap();
    this.onResize();
    this.startGravity();
  }

  
  onClick() {
    if (!this.state.started || this.state.paused) return;
    var curTranslateY = this.state.jumping ? this.state.translateY : this.getCurrentTranslateY();

    var translateY = curTranslateY - this.props.jumpSize;

    // ensure inBounds
    var maxTranslateY = (this.state.flyerHeight / 2) - (this.state.containerHeight / 2);
    translateY = this.props.inBounds && translateY < maxTranslateY ? maxTranslateY: translateY;

    // there will be no animation to detect if no change in translateY so decrement
    if (translateY === this.state.translateY) translateY -= 1;


    this.setState({
      translateY,
      jumping: true,
      animate: true
    });
  }

  onJumpEnd() {
    if (this.state.paused || !this.state.started) return;

    if (this.state.jumping) {
      this.setState({jumping: false});
      this.startGravity();
    } else if (!this.props.bottomAnimation) {
      this.setState({animate: false});
    }
  }

  onResize() {
    var zoom = play.trigger('getState').scale;
    var curRect = this.flyerNode.getBoundingClientRect();
    var containerHeight = this.flyerNode.offsetParent ? this.flyerNode.offsetParent.offsetHeight : 0;

    this.setState({
      zoom,
      containerHeight,
      flyerHeight: (curRect.bottom - curRect.top) / zoom,
      initialOffsetY: curRect.top - this.state.translateY * zoom
    });
  }

  startGravity() {
    this.setState({
      falling: true,
      translateY: 160,
      animate: true
    });
  }

  freeze() {
    this.setState({
      jumping: false,
      translateY: this.getCurrentTranslateY(),
      animate: false
    });
  }

  getCurrentTranslateY() {
    return (this.flyerNode.getBoundingClientRect().top - this.state.initialOffsetY) / this.state.zoom;
  }

  restart() {
    this.setState({
      stamp: 0
    }, () => {
      this.startGravity();
    });
  }

  stop() {
    this.setState({
      started: false
    });
  }

  pause() {
    if (this.state.started) {
      this.freeze();
      this.setState({
        paused: true
      });
    }
  }

  resume() {
    if (this.state.paused) {
      this.setState({
        paused: false
      }, () => {
        this.startGravity();
      });
    }
  }

  addEventListenters() {
    this.refs['flyer-component'].addEventListener('click', this.onClick);
    this.refs['flyer-component'].addEventListener('transitionend', this.onJumpEnd);
    window.addEventListener('resize', this.onResize);
  }

  removeEventListeners() {
    this.refs['flyer-component'].removeEventListener('click', this.onClick);
    this.refs['flyer-component'].removeEventListener('transitionend', this.onJumpEnd);
    window.removeEventListener('resize', this.onResize);
  }

  getClasses() {
    var classes = '';

    if (this.state.complete || this.props.isComplete) classes += ' COMPLETE';

    return classes;
  }

  getStyle() {
    // calculate speed of transition based on distance to be traveled & speed prop
    var transitionDist = this.flyerNode ? Math.abs(this.getCurrentTranslateY() - this.state.translateY) : this.props.jumpSize;
    var transitionMillisecs = this.state.jumping ? transitionDist * this.props.jumpSpeed : transitionDist * this.props.fallSpeed;
    var transitionTimingFunction = this.state.jumping ? 'cubic-bezier(.03,1.13,1,.99)' : 'cubic-bezier(.16,0,.68,.05)';

    return {
      transitionTimingFunction,
      transitionDuration: `${transitionMillisecs}ms`,
      transitionProperty: 'transform',
      transform: `translateY(${this.state.translateY}px)`,
      animationPlayState: (!this.state.started || this.state.paused || !this.state.animate) ? 'paused' : 'running'
    };
  }

  renderFlyer() {
    return (
      <div className="center inline">
        <this.props.flyer.type
          {...this.props.flyer.props}
          ref="flyer"
          className="flyer"
          style={this.getStyle()}
        />
      </div>
    );
  }

  render() {
    return (
      <div ref="flyer-component" className={this.getClasses()}>
        {this.renderFlyer()}
      </div>
    );
  }
}

Flyer.defaultProps = _.merge(skoash.Component.defaultProps, {
  inBounds: true,
  bottomAnimation: false,
  jumpSize: 70,
  jumpSpeed: 6,
  fallSpeed: 3
});

export default Flyer;
