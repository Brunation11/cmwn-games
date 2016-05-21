import Selectable from '../selectable/0.1';

class ItemDrawer extends Selectable {
  constructor() {
    super();
  }

  selectHelper(e, classes) {
    var message;

    if (e.target.tagName !== 'LI') return;

    message = this.refs[e.target.getAttribute('data-ref')].props.item;

    if (typeof this.props.selectRespond === 'function') {
      this.props.selectRespond(message);
    }
  }

  renderList() {
    if (!this.props.data || !this.props.data.items) return;

    return this.props.data.items.map((item, key) => {
      return (
        <play.ListItem
          {...item.props}
          ref={key}
          data-ref={key}
          item={item}
          key={key}
          style={{backgroundImage: 'url("' + item.src + '")'}}
        />
      );
    });
  }

  render() {
    return (
      <ul className={'item-drawer ' + this.getULClass()} onClick={this.state.selectFunction.bind(this)}>
        {this.renderList()}
      </ul>
    );
  }
}

export default ItemDrawer;
