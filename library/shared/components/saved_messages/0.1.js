import Selectable from '../selectable/0.1';

import classNames from 'classnames';

class SavedMessages extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e) {
    var li, message, key, classes = [];

    li = e.target.closest('LI');

    if (!li) return;

    key = li.getAttribute('data-ref');

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

  getClass(key) {
    return classNames({
      [this.state.classes[key] || '']: true,
      DRAFT: true,
    });
  }

  getClassNames() {
    return classNames({
      'item-drawer': true,
      SAVED: true,
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
          className={this.getClass(key)}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
        >
          <skoash.Image src={item.thumbnail} />
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

export default SavedMessages;
