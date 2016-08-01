import _ from 'lodash';

class Runner extends skoash.Component {
  constructor() {
    super();

    this.state = {
      canCatch: true,
      stamp: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('click');
  }

  bootstrap() {
    super.bootstrap();
    this.refs['runner-component'].addEventListener('click', this.onClick);
  }

  start() {
    super.start();
    this.bootstrap();
    this.checkCollisions();
  }

  checkCollisions() {
    var time = Date.now();
    //if (!this.state.started || this.state.paused) return;
    if (time >= this.state.stamp) {
      this.setState({
        stamp: time + 1000
      });

      /*
       var bucketRect = this.bucketNode.getBoundingClientRect();
       _.forEach(this.catchableNodes, function (val, key) {
       if (this.isColliding(bucketRect, val.getBoundingClientRect())) {
       this.selectCatchable(this.refs[`${key}-catchable`], key);
       }
       }.bind(this));*/
      window.requestAnimationFrame(this.checkCollisions);
    } else {
      window.requestAnimationFrame(this.checkCollisions);
    }
  }

  isColliding(bucketRect, catchRect) {
    var xCenter = catchRect.left + (catchRect.right - catchRect.left) / 2;
    var yOffset = (catchRect.bottom - catchRect.top) / 6;
    return (bucketRect.top < catchRect.bottom - yOffset && bucketRect.top > catchRect.top + yOffset &&
    xCenter > bucketRect.left && xCenter < bucketRect.right);
  }

  getClasses() {
    var classes = '';

    if (this.state.complete || this.props.isComplete) classes += ' COMPLETE';

    return classes;
  }

  renderFlyer() {
    return (
      <div className="center inline">
        <this.props.flyer.type
          {...this.props.flyer.props}
          ref="flyer"
        />
      </div>
    );
  }

  render() {
    return (
      <div ref="runner-component" className={'runner ' + this.getClasses()}>
        {this.renderFlyer()}
      </div>
    );
  }
}

Runner.defaultProps = _.merge(skoash.Component.defaultProps, {});

export default Runner;
