import EditableAsset from '../editable_asset/0.1.js';

import classNames from 'classnames';

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
    items.splice(key, 1);

    this.setState({
      items,
    });
  }

  checkItem(key) {

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
      <ul className={'canvas'}>
        {this.renderItems()}
      </ul>
    );
  }
}

export default Canvas;
