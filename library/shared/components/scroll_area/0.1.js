import classNames from 'classnames';

const AREA = 'area';
const CONTENT = 'content';
const SCROLLBAR = 'scrollbar';
const SCROLLER = 'scroller';

class ScrollArea extends skoash.Component {
  constructor() {
    super();

    this.state = _.defaults({
      scrollerTop: 0,
      endY: 0,
      zoom: 1,
    }, this.state);

    this.setZoom = this.setZoom.bind(this);

    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);

    this.moveEvent = this.moveEvent.bind(this);

    this.touchStart = this.touchStart.bind(this);
    this.touchEnd = this.touchEnd.bind(this);
  }

  bootstrap() {
    super.bootstrap();

    this.setZoom();
    window.addEventListener('resize', this.setZoom);

    this[AREA] = ReactDOM.findDOMNode(this.refs[AREA]);
    this[CONTENT] = ReactDOM.findDOMNode(this.refs[CONTENT]);
    this[SCROLLBAR] = ReactDOM.findDOMNode(this.refs[SCROLLBAR]);
    this[SCROLLER] = ReactDOM.findDOMNode(this.refs[SCROLLER]);

    this[AREA].scrollTop = 0;

    this[AREA].addEventListener('scroll', e => {
      var areaScrollTop, endY;

      if (!e.target) return;

      areaScrollTop = e.target.scrollTop;
      endY = (this[SCROLLBAR].offsetHeight - this.props.scrollbarHeight) * (areaScrollTop / (this[CONTENT].offsetHeight - this[AREA].offsetHeight));

      this.setState({
        startY: 0,
        endY,
      });
    });

    this[SCROLLER].addEventListener('mousedown', this.mouseDown);
    this[SCROLLER].addEventListener('touchstart', this.touchStart);
  }

  setZoom() {
    skoash.trigger('getState').then(state => {
      this.setState({
        zoom: state.scale,
      });
    });
  }

  mouseDown(e) {
    this.startEvent(e, this.attachMouseEvents);
  }

  touchStart(e) {
    this.startEvent(e, this.attachTouchEvents);
  }

  startEvent(e, cb) {
    var rect, startY, endY, grabY;

    if (e.target !== this[SCROLLER]) return;

    if (e.targetTouches && e.targetTouches[0]) {
      rect = e.target.getBoundingClientRect();
      e = e.targetTouches[0];
      e.offsetY = e.pageY - rect.top;
    }

    grabY = e.offsetY / this.state.zoom;
    startY = this[SCROLLBAR].getBoundingClientRect().top;
    endY = (e.pageY / this.state.zoom - grabY);

    this.setState({
      startY,
      grabY,
      endY,
    });

    if (typeof cb === 'function') cb.call(this);
  }

  attachMouseEvents() {
    window.addEventListener('mousemove', this.moveEvent);
    window.addEventListener('mouseup', this.mouseUp);
  }

  attachTouchEvents() {
    window.addEventListener('touchmove', this.moveEvent);
    window.addEventListener('touchend', this.touchEnd);
  }

  moveEvent(e) {
    var endY, areaScrollTop;

    e = e.targetTouches && e.targetTouches[0] ? e.targetTouches[0] : e;

    endY = Math.min(
      Math.max(
        e.pageY / this.state.zoom - this.state.grabY,
        this.state.startY
      ),
      this.state.startY +
      this[SCROLLBAR].getBoundingClientRect().height / this.state.zoom -
      this.props.scrollbarHeight
    );

    areaScrollTop = endY * (this[CONTENT].offsetHeight - this[AREA].offsetHeight) /
      (this[SCROLLBAR].offsetHeight - this.props.scrollbarHeight);

    this[AREA].scrollTop = areaScrollTop;

    this.setState({
      endY,
    });
  }

  mouseUp() {
    this.detachMouseEvents();
  }

  touchEnd() {
    this.detachTouchEvents();
  }

  detachMouseEvents() {
    window.removeEventListener('mousemove', this.moveEvent);
    window.removeEventListener('mouseup', this.mouseUp);
  }

  detachTouchEvents() {
    window.removeEventListener('touchmove', this.moveEvent);
    window.removeEventListener('touchend', this.touchEnd);
  }

  getScrollerStyle() {
    return {
      backgroundImage: `url(${this.props.img})`,
      top: this.state.endY - this.state.startY,
    };
  }

  getClassNames() {
    return classNames('scroll-area', super.getClassNames());
  }

  render() {
    if (!this.props.shouldRender) return null;

    return (
      <this.props.type {...this.props} className={this.getClassNames()}>
        <skoash.Image className="hidden" src={this.props.img} />
        <div ref={AREA} className={AREA}>
          <div ref={CONTENT} className={CONTENT}>
            {this.renderContentList()}
          </div>
        </div>
        <div
          ref={SCROLLBAR}
          className={SCROLLBAR}
        >
          <div
            ref={SCROLLER}
            className={SCROLLER}
            style={this.getScrollerStyle()}
          />
        </div>
      </this.props.type>
    );
  }
}

ScrollArea.defaultProps = _.defaults({
  img: '',
  scrollbarHeight: 100,
}, skoash.Component.defaultProps);

export default ScrollArea;
