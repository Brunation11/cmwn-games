import Selectable from '../selectable/0.1';

import classNames from 'classnames';

class SavedMessages extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e) {
    var message, key, classes = [];

    if (e.target.tagName !== 'LI') return;

    key = e.target.getAttribute('data-ref');

    message = this.refs[key].props.item;
    classes[key] = this.state.selectClass;

    this.setState({
      message,
      classes,
    }, this.selectRespond.bind(this));
  }

  selectRespond() {
    if (typeof this.props.selectRespond === 'function' && this.state.message) {
      this.props.selectRespond(this.state.message);
    }
  }

  componentWillReceiveProps() {
    this.setState({
      category: null,
    });
  }

  getClass(key, unread) {
    return classNames({
      [this.state.classes[key] || '']: true,
      UNREAD: unread,
    });
  }

  renderList() {
    var items;

    if (!this.props.data || !this.props.data.items) return;

    items = this.props.data.items;

    if (this.state.category) {
      items = items[this.state.category].items;
    }

    return items.map((item, key) => {
      return (
        <play.ListItem
          className={this.getClass(key, item.unread)}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
        >
          <play.Image src={item.thumbnail} />
          <span>{item.timestamp}</span>
        </play.ListItem>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className={'item-drawer ' + this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default SavedMessages;
