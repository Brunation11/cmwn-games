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

  renderThumb(item) {
    var firstImg, background;

    background = item && item.rules && item.rules.background &&
      item.rules.background.src ? item.rules.background.src :
      '';

    firstImg = item && item.rules && item.rules.items &&
      item.rules.items[0] && item.rules.items[0].src ?
      item.rules.items[0].src : '';

    return (
      <div
        className="thumbnail"
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        <skoash.Image src={firstImg} />
      </div>
    );
  }

  renderList() {
    var items, self = this;

    if (!self.props.data || !self.props.data.items) return;

    items = self.props.data.items;

    if (self.state.category) {
      items = items[self.state.category].items;
    }

    return items.map((item, key) => {
      var timestamp = moment(item.timestamp);
      return (
        <skoash.ListItem
          className={self.getClass(key)}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
        >
          {self.renderThumb(item)}
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
