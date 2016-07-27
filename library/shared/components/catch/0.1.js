import _ from 'lodash';
import Catchable from 'shared/components/catchable/0.1';


class Catch extends skoash.Component {
  constructor() {
    super();

    this.state = {
      canCatch: true,
      stamp: 0
    };

    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.boundOnResize = this.onResize.bind(this);
    this.checkCollisions = this.checkCollisions.bind(this);
  };

  componentDidMount() {
    this.bucketNode = ReactDOM.findDOMNode(this.refs['bucket']);
    this.catchableNodes = _.map(this.props.catchables, function(val, key) {
      return ReactDOM.findDOMNode(this.refs[`${key}-catchable`]);
    }.bind(this));
  }

  prepareBucket() {
    var bucketRef = this.refs['bucket'];
    //this.bucketDom =

    console.log(bucketRef);
   /* if (bucketRef) {
      bucketRef.
    }*/
  }

  selectCatchable(catchableNode) {
    if (!this.state.started || this.state.paused || !this.state.canCatch) return;

    console.log('CAUGHT');
    /*
    window.setTimeout(function () {
      catchableNode.removeClass('CAUGHT');
    }, 4000);*/
  }

  checkCollisions() {
    var time = Date.now();
    if (!this.state.started || this.state.paused) return;
    if (time >= this.state.stamp) {
      this.setState({
        stamp: time + 1000
      });
      //console.log('checking collisions ' + this.state.stamp);
      if (this.done) {

      } else {
        var bucketRect = this.bucketNode.getBoundingClientRect();
        _.forEach(this.catchableNodes, function(val) {
          var rect = val.getBoundingClientRect();
          console.log(rect);
          var catchableCenter = rect.left + (rect.right - rect.left) / 2;
          if (bucketRect.top < rect.bottom && bucketRect.top > rect.top &&
            catchableCenter > bucketRect.left && catchableCenter < bucketRect.right) {
            this.selectCatchable(val);
          }
        }.bind(this));
      }
      window.requestAnimationFrame(this.checkCollisions);
    } else {
      window.requestAnimationFrame(this.checkCollisions);
    }
  }

  attachMouseEvents() {
    var catchRef = this.refs['catch-component'];
    if (catchRef) {
      catchRef.addEventListener('mousemove', this.boundOnMouseMove);
      catchRef.addEventListener('touchstart', this.boundOnMouseMove);
      catchRef.addEventListener('touchmove', this.boundOnMouseMove);
    }
  }

  onMouseMove(e) {
    this.setState({
      mouseX: e.pageX
    });
  }

  onResize() {
    var edges = this.getEdges(ReactDOM.findDOMNode(this.refs['bucket']));
    this.setState({
      bucketTop: edges.top,
      bucketBottom: edges.bottom,
      bucketWidth: (edges.right - edges.left)
    });
    this.setZoom();
    console.log(play.trigger('getState').scale);
  }

  start() {
    play.Component.prototype.start.call(this);
    //console.log('start');
    this.bootstrap();
    this.checkCollisions();
  }

  restart() {
    this.setState({
      stamp: 0
    }, () => {
      this.checkCollisions();
    });
  }

  stop() {
    this.setState({
      started: false
    });
  }

  pause() {
    if (this.state.started) {
      this.setState({
        paused: true
      });
    }
  }

  resume(){
    if (this.state.paused) {
      this.setState({
        paused: false
      }, () => {
        this.checkCollisions();
      });
    }
  }

  bootstrap(){
    play.Component.prototype.bootstrap.call(this);

    this.onResize();
    this.prepareBucket();
    this.attachMouseEvents();
    window.addEventListener('resize', this.boundOnResize);
  }

  setZoom(){
    this.setState({
      zoom: play.trigger('getState').scale,
    });
  }

  getEdges(el){
    var top, left, width, height;

    left = 0;
    top = 0;
    width = el.offsetWidth;
    height = el.offsetHeight;

    while (el) {
      if (el.className && el.className.indexOf('screen') !== -1) {
        break;
      }

      left += el.offsetLeft || 0;
      top += el.offsetTop || 0;
      el = el.offsetParent;
    }

    return {
      top,
      bottom: top + height,
      left,
      right: left + width
    };
  }

  getStyle(){
    return {
      left: `${(this.state.mouseX / this.state.zoom) - (this.state.bucketWidth / 2)}px`
    };
  }

  renderBucket(){
    return (
      <this.props.bucket.type
        {...this.props.bucket.props}
        ref="bucket"
        style={this.getStyle()}
      />
    );
  }

  renderCatchables(){
    return this.props.catchables.map((item, key) =>
      <Catchable
        {...item.props}
        key={key}
        ref={`${key}-catchable`}>
        data-ref={`${key}-catchable`}>
      </Catchable>
    );
  }

  render(){
    return (
      <div ref="catch-component">
        <ul className="items">
          {this.renderCatchables()}
        </ul>
        {this.renderBucket()}
      </div>
    )
  }

}

Catch.defaultProps = {
  catchables: []
};

export default Catch;