import Selectable from '../selectable/0.1';

import classNames from 'classnames';

class Inbox extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e) {
    var li, message, key, type, classes = [];

    li = e.target.closest('LI');

    if (!li) return;

    key = li.getAttribute('data-ref');
    type = this.refs[key].props.item.type;

    if (type === 'category') {
      this.setState({
        category: key,
      });
    } else {
      message = this.refs[key].props.item;
      classes[key] = this.state.selectClass;

      this.setState({
        message,
        classes,
      });
    }
  }

  selectButton() {
    if (typeof this.props.selectRespond === 'function' && this.state.message) {
      this.props.selectRespond(this.state.message);
    }
  }

  cancelButton() {
    if (typeof this.props.cancelRespond === 'function') {
      this.props.cancelRespond();
    }
  }

  componentWillReceiveProps() {
    this.setState({
      category: null,
    });
  }

  getClass(key, unread, sent) {
    return classNames({
      [this.state.classes[key] || '']: true,
      UNREAD: unread,
      SENT: sent,
    });
  }

  getClassNames() {
    return classNames({
      'item-drawer': true,
      COMPLETE: this.state.complete,
    }, this.props.className);
  }

  renderList() {
    var items;

    if (!this.props.data || !this.props.data.items) return;

    items = this.props.data.items;

    if (this.state.category) {
      items = items[this.state.category].items;
    }

    return items.map((item, key) => {
      var timestamp = moment(item.timestamp); // eslint-disable-line no-undef
      return (
        <skoash.ListItem
          className={this.getClass(key, item.unread, item.sent)}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
        >
          <skoash.Image src={item['profile-image']} />
          <span className="username">{item.username}</span>
          <span className="timestamp">
            <span className="date">{timestamp.format('DD.MM.YY')}</span>
            <span className="time">{timestamp.format('h:mm:ss a')}</span>
          </span>
        </skoash.ListItem>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className={this.getClassNames()} onClick={this.state.selectFunction.bind(this)}>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Inbox;
