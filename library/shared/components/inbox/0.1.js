import Selectable from '../selectable/0.1';

import classNames from 'classnames';

class Inbox extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e) {
    var li, message, key, classes = [];

    li = e.target.closest('LI');

    if (!li) return;

    key = li.getAttribute('data-ref');

    if (!this.refs[key]) return;

    message = this.refs[key].props.item;
    classes[key] = this.state.selectClass;

    this.setState({
      message,
      classes,
    });

    if (typeof this.props.selectRespond === 'function' && message) {
      this.props.selectRespond(message);
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

  getStatusText(item) {
    if (!item.status || item.status === 'COMPLETE') return '';
    return item.status;
  }

  renderList() {
    var items, friends;

    if (!this.props.data || !this.props.data.items) return;

    items = this.props.data.items;

    if (this.state.category) {
      items = items[this.state.category].items;
    }

    friends = skoash.trigger('getState').data.user || [];

    return items.map((item, key) => {
      var timestamp, image, name;
      timestamp = moment(item.updated);
      key = 'message-' + key;

      friends.some(friend => {
        if (item.created_by === friend.friend_id) {
          image = friend._embedded.image ? friend._embedded.image.url : '';
          name = friend.username;
          return false;
        }
        return true;
      });

      return (
        <skoash.ListItem
          className={this.getClass(key, item.unread, item.sent)}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
        >
          <skoash.Image src={image} />
          <span className="username">{name}</span>
          <span className="timestamp">
            <span className="date">{timestamp.format('DD.MM.YY')}</span>
            <span className="time">{timestamp.format('h:mm:ss a')}</span>
          </span>
          <span className={'status ' + item.status}>
            {this.getStatusText(item)}
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
