import _ from 'lodash';
import classNames from 'classnames';

import Selectable from '../selectable/0.1';

class ItemDrawer extends Selectable {
  constructor() {
    super();
  }

  start() {
    var items, selectedItem, selectFunction, classes = {}, self = this;

    selectFunction = this.state.selectClass === 'HIGHLIGHTED' ? this.highlight : this.select;

    items = self.props.data || [];

    if (self.state.category) {
      items = items[self.state.category].items;
    }

    selectedItem = JSON.stringify(self.props.selectedItem);

    _.each(items, (item, key) => {
      if (self.props.selectedItem && JSON.stringify(item) === selectedItem) {
        classes[key] = self.state.selectClass;
      }
    });

    if (this.props.selectOnStart) {
      classes[this.props.selectOnStart] = this.state.selectClass;
    }

    this.setState({
      started: true,
      classes,
      selectFunction,
    });

    this.bootstrap();

    _.each(self.refs, ref => {
      if (typeof ref.start === 'function') ref.start();
    });
  }

  selectHelper(e) {
    var li, message, key, type, categoryName, classes = [];

    li = e.target.closest('LI');

    if (!li) return;

    key = li.getAttribute('data-ref');
    type = this.refs[key].props.item.type;

    if (type === 'category') {
      categoryName = this.refs[key].props.item.name;
      this.setState({
        category: key,
        categoryName
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
    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(this.state.message);
    }
  }

  continueButton() {
    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond({});
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

  getCategory() {
    if (this.state.categoryName) {
      return this.state.categoryName;
    }

    if (this.props.categories && this.props.categories.length) {
      return this.props.categories[this.props.categories.length - 1];
    }
    return '';
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

  getClass(key, item) {
    var white = item && item.src && item.src.indexOf('_w.') !== -1;

    return classNames({
      [this.state.classes[key] || '']: true,
      white
    });
  }

  renderButtons() {
    return (
      <div className="buttons">
        <button className="select" onClick={this.selectButton.bind(this)} />
        <button className="continue" onClick={this.continueButton.bind(this)} />
        <button className="cancel" onClick={this.cancelButton.bind(this)} />
      </div>
    );
  }

  renderItemContent(item) {
    var content = [];

    if (item.src) {
      content.push(<skoash.Image src={item.src} />);
    }

    if (item.name) {
      content.push(<span className="name">{item.name}</span>);
    }

    if (item.description) {
      content.push(<span className="description">{item.description}</span>);
    }

    return content;
  }

  renderList() {
    var items, self = this;

    if (!this.props.data) return;

    items = this.props.data;

    if (this.state.category) {
      items = items[this.state.category].items;
    }

    return items.map((item, key) =>
      <skoash.ListItem
        className={this.getClass(key, item)}
        ref={key}
        data-ref={key}
        item={item}
        key={key}
      >
        {self.renderItemContent(item)}
      </skoash.ListItem>
    );
  }

  render() {
    return (
      <div>
        <div className="item-drawer-container">
          <h2>{this.getCategory()}</h2>
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
