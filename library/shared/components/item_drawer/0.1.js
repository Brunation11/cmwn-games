import Selectable from '../selectable/0.1';

class ItemDrawer extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e) {
    var message, key, type, classes = [];

    if (e.target.tagName !== 'LI') return;

    key = e.target.getAttribute('data-ref');
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
          className={this.getClass(key)}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
          style={{backgroundImage: 'url("' + item.src + '")'}}
        >
          {item.name}
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
        <button onClick={this.selectButton.bind(this)}>{'Select'}</button>
        <button onClick={this.cancelButton.bind(this)}>{'Cancel'}</button>
      </div>
    );
  }
}

export default ItemDrawer;
