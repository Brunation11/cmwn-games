import Selectable from '../selectable/0.1.js';

import classNames from 'classnames';

class Menu extends Selectable {
  constructor() {
    super();

    this.state = {
      active: false,
      selectClass: 'SELECTED',
      classes: {},
    };
  }

  deactivate() {
    var self = this;

    this.setState({
      active: false,
    });

    Object.keys(this.refs).map(key => {
      if (typeof self.refs[key].deactivate === 'function') {
        self.refs[key].deactivate();
      }
    });
  }

  onClick(e) {
    var li, ul, dom, message, active = false, classes = [];

    li = e.target.closest('LI');

    if (!li) return;

    ul = li.closest('UL');
    dom = ReactDOM.findDOMNode(this); // eslint-disable-line no-undef

    if (ul !== dom) return;

    message = li.getAttribute('data-ref');

    if (this.state.classes[message] !== this.state.selectClass) {
      classes[message] = this.state.selectClass;
      active = !this.props.inactive;
    }

    this.setState({
      classes,
      active,
    });
  }

  renderItems() {
    var self = this;

    if (typeof this.props.items !== 'object') return;

    return Object.keys(this.props.items).map((key) => {
      var item, onClick, gotoObj, categories;

      categories = this.props.categories ? [].concat(this.props.categories) : [];
      categories.push(key);

      item = this.props.items[key];

      if (!item.items || Object.prototype.toString.call(item.items) === '[object Array]') {
        gotoObj = {
          index: 'item-drawer',
          categories,
        };
        onClick = play.trigger.bind(null, 'goto', gotoObj);
      }

      return (
        <play.ListItem
          className={self.getClass(key)}
          data-ref={key}
          ref={key}
          key={key}
          onClick={onClick}
        >
          {key}
          {(() => {
            if (typeof item.items !== 'object' || Object.prototype.toString.call(item.items) === '[object Array]') return;
            return (
              <Menu ref={'menu-' + key} categories={categories} items={item.items} inactive={true} />
            );
          })()}
        </play.ListItem>
      );
    });
  }

  getClassNames() {
    return classNames({
      menu: true,
      ACTIVE: this.state.active,
    });
  }

  render() {
    return (
      <ul
        className={this.getClassNames()}
        onClick={this.onClick.bind(this)}
      >
        {this.renderItems()}
      </ul>
    );
  }
}

export default Menu;
