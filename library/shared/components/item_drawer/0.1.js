import shortid from 'shortid';
import classNames from 'classnames';

import Selectable from 'shared/components/selectable/0.1';
import ScrollArea from 'shared/components/scroll_area/0.1';

class ItemDrawer extends Selectable {
  shouldComponentUpdate(nextProps, nextState) {
    var items, quickCheck, itemsChanged;

    items = nextProps.data || [];
    if (nextState.category && items[nextState.category]) {
      items = items[nextState.category].items;
    }

    quickCheck = _.reduce(items, (a, i) => a + i.name, '');

    itemsChanged = this.quickCheck !== quickCheck;
    if (itemsChanged) this.quickCheck = quickCheck;

    return itemsChanged || (JSON.stringify(this.state.classes) !== JSON.stringify(nextState.classes));
  }

  start() {
    var items, selectedItem, selectClass, selectFunction, classes = {}, self = this;

    selectClass = this.props.selectClass || this.state.selectClass || 'SELECTED';
    selectFunction = selectClass === 'HIGHLIGHTED' ? this.highlight : this.select;

    items = self.props.data || [];

    if (self.state.category && items[self.state.category]) {
      items = items[self.state.category].items;
    }

    selectedItem = JSON.stringify(self.props.selectedItem);

    _.each(items, (item, key) => {
      if (self.props.selectedItem && JSON.stringify(item) === selectedItem) {
        classes[key] = selectClass;
      }
    });

    if (this.props.selectOnStart) {
      classes[this.props.selectOnStart] = selectClass;
    }

    this.setState({
      started: true,
      classes,
      selectClass,
      selectFunction,
      categoryName: '',
      category: '',
    });

    _.each(self.refs, ref => {
      if (typeof ref.start === 'function') ref.start();
    });
  }

  selectHelper(e) {
    var li, message, key, type, categoryName, classes = [];

    li = e.target.closest('LI');
    if (!li) return;

    key = li.getAttribute('data-ref');
    if (!this.refs[key]) return;

    type = this.refs[key].props.item.asset_type;
    if (!type) return;

    if (type === 'folder') {
      categoryName = this.refs[key].props.item.name;
      this.setState({
        category: key,
        categoryName
      });
    } else {
      message = this.refs[key].props.item;
      classes[key] = this.props.selectClass;

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

  continueButton() {
    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond({});
    }
  }

  cancelButton() {
    if (typeof this.props.cancelRespond === 'function') {
      this.props.cancelRespond.call(this);
    }
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

  getClassNames() {
    return classNames({
      'ANSWERED': _.values(this.state.classes).indexOf(this.state.selectClass) !== -1
    }, this.props.className, 'item-drawer-component');
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
    var white = item && item.name && item.name.toLowerCase()[item.name.length - 1] === 'w';

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
    var content = [], src;

    if (item.src || item.thumb) {
      src = item.thumb || item.src;
    } else if (item.items) {
      if (!_.isArray(item.items)) {
        item.items = _.values(item.items);
      }

      if (item.items[0]) {
        src = item.items[0].thumb || item.items[0].src;
      }

      if (!src) {
        item.items.some(subitem => {
          if (subitem.name === '_thumb.png') {
            src = subitem.thumb || subitem.src;
            return true;
          }
        });
      }
    }

    if (src) {
      content.push(<skoash.Image src={src} key={0} />);
    }

    if (item.name && (item.asset_type === 'folder' || item.asset_type === 'friend')) {
      content.push(<span className="name" key={1}>{item.name}</span>);
    }

    if (item.description) {
      content.push(<span className="description" key={2}>{item.description}</span>);
    }

    return content;
  }

  renderList() {
    var items, self = this;

    if (!this.props.data) return;

    items = this.props.data;

    if (this.state.category && items[this.state.category]) {
      items = items[this.state.category].items;
    }

    if (!_.isArray(items)) {
      items = _.values(items);
    }

    return items.sort((a, b) => {
      var aVal = !_.isNaN(window.parseInt(a.order)) ? window.parseInt(a.order) : Infinity;
      var bVal = !_.isNaN(window.parseInt(b.order)) ? window.parseInt(b.order) : Infinity;
      if (aVal === bVal) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }
      if (aVal < bVal) return -1;
      return 1;
    }).filter(item =>
      item.name !== '_thumb.png'
    ).map((item, key) =>
      <skoash.ListItem
        className={this.getClass(key, item)}
        ref={key}
        data-ref={key}
        item={item}
        key={shortid.generate()}
      >
        {self.renderItemContent(item)}
      </skoash.ListItem>
    );
  }

  render() {
    return (
      <div className={this.getClassNames()}>
        <div className="item-drawer-container">
          <h2>{this.getCategory()}</h2>
          <ScrollArea ref="scroll-area" img={this.props.scrollbarImg}>
            <ul ref="list" className={this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
              {this.renderList()}
            </ul>
          </ScrollArea>
        </div>
        {this.renderButtons()}
      </div>
    );
  }
}

ItemDrawer.defaultProps = _.defaults({
  scrollbarImg: '',
}, Selectable.defaultProps);

export default ItemDrawer;
