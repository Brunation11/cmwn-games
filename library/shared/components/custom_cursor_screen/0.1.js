class CustomCursorScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      cursorLeft: 0,
      cursorTop: 0,
      touchstart: false,
      revealOpen: false,
    };
  }

  bootstrap() {
    super.bootstrap();

    window.addEventListener('mousemove', this.moveCursor.bind(this));
    window.addEventListener('touchstart', this.touchstart.bind(this));
  }

  moveCursor(e) {
    var zoom = skoash.trigger('getState').scale;
    this.setState({
      cursorLeft: e.clientX / zoom - 50,
      cursorTop: e.clientY / zoom - 65,
    });
  }

  touchstart() {
    this.setState({
      touchstart: true
    });
  }
 
  renderCursor() {
    var cursor, className, ref, props = [];
    cursor = this.props.cursor;
    className = ref = 'cursor';
    if (cursor && cursor.props) {
      props = cursor.props;
      className = className + ' ' + cursor.props.className;
      ref = cursor.ref || ref;
    }
    return (
      <div
        {...props}
        ref={ref}
        className={className}
        style={{
          left: this.state.cursorLeft,
          top: this.state.cursorTop,
        }}
      />
    );
  }

  
  renderContent() {
    return (
      <div>
        {this.renderCursor()}
        {this.renderContentList()}
      </div>
    );
  }
}

export default CustomCursorScreen;
