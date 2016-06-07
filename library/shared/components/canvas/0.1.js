import EditableAsset from '../editable_asset/0.1.js';

import classNames from 'classnames';

class Canvas extends play.Component {
  constructor() {
    super();

    this.state = {
      background: null,
      items: [],
      messages: [],
      offsetX: 0,
      offsetY: 0,
      active: false,
    };

    this.boundDeleteItem = this.deleteItem.bind(this);
    this.boundCheckItem = this.checkItem.bind(this);
    this.boundDeactivateItems = this.deactivateItems.bind(this);
    this.boundRelayerItems = this.relayerItems.bind(this);
  }

  getItems() {
    var items, messages, self = this;

    items = this.state.items.map((item, key) => {
      var state = self.refs['item-' + key].state;

      item.state = {
        id: state.id,
        thumbnail: state.thumbnail,
        timestamp: state.timestamp,
        left: state.left,
        top: state.top,
        scale: state.scale,
        rotation: state.rotation,
        layer: state.layer,
        zoom: state.zoom,
        valid: state.valid,
        corners: state.corners,
      };

      return item;
    });

    messages = this.state.messages.map((item, key) => {
      var state = self.refs['message-' + key].state;

      item.state = {
        left: state.left,
        top: state.top,
        scale: state.scale,
        rotation: state.rotation,
        layer: state.layer,
        zoom: state.zoom,
        valid: state.valid,
        corners: state.corners,
      };

      return item;
    });

    return {
      background: this.state.background,
      items,
      messages,
    };
  }

  setItems(message) {
    if (message) {
      /*
       *
       * This is being this way in order to make sure the
       * EditableAssets get cleared.
       *
       * This prevents the new assets from inheriting
       * state from the old assets.
       *
       */
      this.setState({
        background: null,
        items: [],
        messages: [],
      }, () => {
        this.setState(message);
      });
    }
  }

  addItem(asset) {
    var items, messages;

    if (asset.type === 'background') {
      this.setState({
        background: asset,
      });
    } else if (asset.type === 'item') {
      items = this.state.items;
      items.push(asset);

      this.setState({
        items,
      });
    } else if (asset.type === 'message') {
      messages = this.state.messages;
      messages.push(asset);

      this.setState({
        messages,
      });
    }
  }

  deleteItem(key, type) {
    var items;

    items = this.state[type + 's'];
    delete items[key];

    this.setState({
      [type + 's']: items,
    });
  }

  deactivateItems(exclude, type) {
    if (typeof exclude === 'object' && exclude.target) {
      if (exclude.target.tagName !== 'UL') {
        return;
      }
      this.setState({
        active: false,
      });
    }

    if (typeof exclude === 'number') {
      this.setState({
        active: true,
      });
    }

    this.state.items.map((item, key) => {
      if ((key !== exclude || type !== 'item') && this.refs['item-' + key]) {
        this.refs['item-' + key].deactivate();
      }
    });

    this.state.messages.map((item, key) => {
      if ((key !== exclude || type !== 'message') && this.refs['message-' + key]) {
        this.refs['message-' + key].deactivate();
      }
    });
  }

  relayerItems(type) {
    var layers = [];

    this.state[type + 's'].map((item, key) => {
      var layer;

      layer = this.refs[type + '-' + key].state.layer;

      if (layers.indexOf(layer) === -1) {
        layers.push(layer);
      }
    });

    layers.sort((a, b) => {
      return a < b;
    });

    this.state[type + 's'].map((item, key) => {
      var oldLayer, newLayer;

      oldLayer = this.refs[type + '-' + key].state.layer;
      newLayer = (type === 'message') ? 10000 : 1000;
      newLayer = newLayer - layers.indexOf(oldLayer);

      this.refs[type + '-' + key].relayer(newLayer);
    });
  }

  checkItem(key, type) {
    var intersects = false, self = this;

    if (this.state[type + 's'][key].canOverlap) {
      return true;
    }

    this.state[type + 's'].some((item, index) => {
      if (key === index) return;
      if (this.state[type + 's'][index].canOverlap) return;
      intersects = play.util.doIntersect(
        self.refs[type + '-' + key].state.corners,
        self.refs[type + '-' + index].state.corners
      );
      return intersects;
    });

    return !intersects;
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
          deleteItem={self.boundDeleteItem}
          checkItem={self.boundCheckItem}
          deactivateItems={self.boundDeactivateItems}
          relayerItems={self.boundRelayerItems}
          ref={'item-' + key}
          key={key}
        />
      );
    });
  }

  renderMessages() {
    var self = this;

    return this.state.messages.map((item, key) => {
      return (
        <EditableAsset
          {...item}
          data-ref={key}
          deleteItem={self.boundDeleteItem}
          checkItem={self.boundCheckItem}
          deactivateItems={self.boundDeactivateItems}
          relayerItems={self.boundRelayerItems}
          ref={'message-' + key}
          key={key}
        />
      );
    });
  }

  getClassNames() {
    return classNames({
      canvas: true,
      ACTIVE: this.state.active,
    });
  }

  render() {
    return (
      <ul
        className={this.getClassNames()}
        style={this.getStyle()}
        onClick={this.deactivateItems.bind(this)}
      >
        {this.renderItems()}
        {this.renderMessages()}
      </ul>
    );
  }
}

export default Canvas;
