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


  /**
   *
   * from http://stackoverflow.com/questions/10962379/how-to-check-intersection-between-2-rotated-rectangles
   *
   * Helper function to determine whether there is an intersection between the two polygons described
   * by the lists of vertices. Uses the Separating Axis Theorem
   *
   * @param a an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
   * @param b an array of connected points [{x:, y:}, {x:, y:},...] that form a closed polygon
   * @return true if there is any intersection between the 2 polygons, false otherwise
   */
  doPolygonsIntersect(a, b) {
    var polygons = [a, b];
    var minA, maxA, projected, i, i1, j, minB, maxB;

    for (i = 0; i < polygons.length; i++) {

      // for each polygon, look at each edge of the polygon, and determine if it separates
      // the two shapes
      var polygon = polygons[i];
      for (i1 = 0; i1 < polygon.length; i1++) {

        // grab 2 vertices to create an edge
        var i2 = (i1 + 1) % polygon.length;
        var p1 = polygon[i1];
        var p2 = polygon[i2];

        // find the line perpendicular to this edge
        var normal = { x: p2.y - p1.y, y: p1.x - p2.x };

        minA = maxA = undefined;
        // for each vertex in the first shape, project it onto the line perpendicular to the edge
        // and keep track of the min and max of these values
        for (j = 0; j < a.length; j++) {
          projected = normal.x * a[j].x + normal.y * a[j].y;
          if ((typeof minA === 'undefined') || projected < minA) {
            minA = projected;
          }
          if ((typeof maxA === 'undefined') || projected > maxA) {
            maxA = projected;
          }
        }

        // for each vertex in the second shape, project it onto the line perpendicular to the edge
        // and keep track of the min and max of these values
        minB = maxB = undefined;
        for (j = 0; j < b.length; j++) {
          projected = normal.x * b[j].x + normal.y * b[j].y;
          if ((typeof minB === 'undefined') || projected < minB) {
            minB = projected;
          }
          if ((typeof maxB === 'undefined') || projected > maxB) {
            maxB = projected;
          }
        }

        // if there is no overlap between the projects, the edge we are looking at separates the two
        // polygons, and we know there is no overlap
        if (maxA < minB || maxB < minA) {
          return false;
        }
      }
    }
    return true;
  }

  checkItem(key, type) {
    var intersects = false, self = this;

    if (this.state[type + 's'][key].canOverlap) {
      return true;
    }

    this.state[type + 's'].some((item, index) => {
      if (key === index) return;
      if (this.state[type + 's'][index].canOverlap) return;
      intersects = self.doPolygonsIntersect(
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
