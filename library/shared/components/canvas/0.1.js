import _ from 'lodash';

import EditableAsset from '../editable_asset/0.1.js';

import classNames from 'classnames';

class Canvas extends skoash.Component {
  constructor() {
    super();

    this.state = {
      background: null,
      items: [],
      messages: [],
      offsetX: 0,
      offsetY: 0,
      active: false,
      valid: true,
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.deactivateItems = this.deactivateItems.bind(this);
    this.relayerItems = this.relayerItems.bind(this);
    this.setValid = this.setValid.bind(this);
  }

  getItems() {
    var items, messages, self = this;

    items = this.state.items.map((item, key) => {
      var state;

      if (!self.refs['item-' + key]) return item;

      state = self.refs['item-' + key].state;

      item.state = {
        left: _.floor(state.left, 14),
        top: _.floor(state.top, 14),
        scale: _.floor(state.scale, 14),
        rotation: _.floor(state.rotation, 14),
        layer: state.layer,
        valid: state.valid,
        corners: state.corners,
      };

      item.check = state.check;
      item.mime_type = state.mime_type; // eslint-disable-line camelcase

      return item;
    });

    messages = this.state.messages.map((item, key) => {
      var state;

      if (!self.refs['item-' + key]) return item;

      state = self.refs['message-' + key].state;

      item.state = {
        left: _.floor(state.left, 14),
        top: _.floor(state.top, 14),
        scale: _.floor(state.scale, 14),
        rotation: _.floor(state.rotation, 14),
        layer: state.layer,
        valid: state.valid,
        corners: state.corners,
      };

      item.check = state.check;
      item.mime_type = state.mime_type; // eslint-disable-line camelcase

      return item;
    });

    return {
      background: this.state.background,
      items,
      messages,
    };
  }

  reset() {
    this.setState({
      background: null,
      items: [],
      messages: []
    });
  }

  setItems(message) {
    if (message) {
      /*
       *
       * This makes sure the EditableAssets get cleared.
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

  addItem(asset, cb) {
    var items, messages, index;

    if (asset.asset_type === 'background') {
      this.setState({
        background: asset,
      }, () => {
        skoash.trigger('emit', {
          name: 'getMedia',
          'media_id': asset.media_id
        }).then(d => {
          var background = this.state.background;
          background.check = d.check;
          background.mime_type = d.mime_type; // eslint-disable-line camelcase
          this.setState({
            background
          }, cb);
        });
      });

    } else if (asset.asset_type === 'item') {
      items = this.state.items;
      items.push(asset);
      index = items.indexOf(asset);

      this.setState({
        items,
      }, () => {
        skoash.trigger('emit', {
          name: 'getMedia',
          'media_id': asset.media_id
        }).then(d => {
          asset.check = d.check;
          asset.mime_type = d.mime_type; // eslint-disable-line camelcase
          items[index] = asset;
          this.setState({
            items
          }, cb);
        });
      });
    } else if (asset.asset_type === 'message') {
      messages = this.state.messages;
      messages.push(asset);
      index = messages.indexOf(asset);

      this.setState({
        messages,
      }, () => {
        skoash.trigger('emit', {
          name: 'getMedia',
          'media_id': asset.media_id
        }).then(d => {
          asset.check = d.check;
          asset.mime_type = d.mime_type; // eslint-disable-line camelcase
          messages[index] = asset;
          this.setState({
            messages
          }, cb);
        });
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
      if (exclude.target.tagName !== 'LI') {
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
    var self = this;

    return (
      self.state[type + 's'][key].can_overlap ||
      !self.state[type + 's'].some((item, index) =>
        key !== index &&
        !self.state[type + 's'][index].can_overlap &&
        play.util.doIntersect(
          self.refs[type + '-' + key].state.corners,
          self.refs[type + '-' + index].state.corners
        )
      )
    );
  }

  setValid(valid) {
    this.setState({
      valid
    });

    if (typeof this.props.setValid === 'function') {
      this.props.setValid(valid);
    }
  }

  getStyle() {
    if (!this.state.background) return;

    return {
      backgroundImage: `url(${this.state.background.src})`,
    };
  }

  renderItems() {
    var self = this;

    return this.state.items.map((item, key) => {
      return (
        <EditableAsset
          {...item}
          data-ref={key}
          deleteItem={self.deleteItem}
          checkItem={self.checkItem}
          deactivateItems={self.deactivateItems}
          relayerItems={self.relayerItems}
          setValid={self.setValid}
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
          deleteItem={self.deleteItem}
          checkItem={self.checkItem}
          deactivateItems={self.deactivateItems}
          relayerItems={self.relayerItems}
          setValid={self.setValid}
          ref={'message-' + key}
          key={key}
        />
      );
    });
  }

  getClassNames() {
    return classNames({
      canvas: true,
      ACTIVE: !this.props.preview && this.state.active,
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
