import EditableAsset from '../editable_asset/0.1.js';

class Canvas extends play.Component {
  constructor() {
    super();

    this.state = {
      background: null,
      items: [],
      offsetX: 0,
      offsetY: 0,
    };
  }

  addItem(message) {
    var items;

    if (message.type === 'background') {
      this.setState({
        background: message,
      });
    } else {
      items = this.state.items;
      items.push(message);

      this.setState({
        items,
      });
    }
  }

  deleteItem(key) {
    var items;

    items = this.state.items;
    delete items[key];

    this.setState({
      items,
    });
  }

  // the key will be passed in here
  checkItem() {

  }

  getStyle() {
    if (!this.state.background) return;

    return {
      backgroundImage: 'url("' + this.state.background.src + '")',
    };
  }

  renderItems() {
    var self = this;

    return this.state.items.map((item, key) => {
      return (
        <EditableAsset
          {...item}
          data-ref={key}
          deleteItem={self.deleteItem.bind(self)}
          checkItem={self.checkItem.bind(self)}
          ref={key}
          key={key}
        />
      );
    });
  }

  render() {
    return (
      <ul
        className={'canvas'}
        style={this.getStyle()}
      >
        {this.renderItems()}
      </ul>
    );
  }
}

export default Canvas;
