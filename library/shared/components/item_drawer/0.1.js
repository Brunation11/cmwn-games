import Selectable from '../selectable/0.1';

import classNames from 'classnames';

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

  getULClass() {
    var categories = '';

    if (this.props.categories) {
      categories = this.props.categories.join(' ');
    }

    return classNames({
      'item-drawer': true,
      [categories]: true,
      COMPLETE: this.state.complete,
    });
  }

  renderButtons() {
    return (
      <div className="buttons">
        <button className="select" onClick={this.selectButton.bind(this)} />
        <button className="cancel" onClick={this.cancelButton.bind(this)} />
      </div>
    );
  }

  renderItemText(item) {
    var text = [];

    if (item.name) {
      text.push(<span className="name">{item.name}</span>);
    }

    if (item.description) {
      text.push(<span className="description">{item.description}</span>);
    }

    return text;
  }

  renderList() {
    var items, self = this;

    if (!this.props.data) return;

    items = this.props.data;

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
          {self.renderItemText(item)}
        </play.ListItem>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="item-drawer-container">
          <ul className={this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
            {this.renderList()}
          </ul>
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

export default ItemDrawer;
