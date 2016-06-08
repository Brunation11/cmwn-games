import ItemDrawer from '../../shared/components/item_drawer/0.1.js';

class ItemDrawerScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'item-drawer',
      opts: {
        categories: [],
      },
    };

  }

  bootstrap() {
    play.Screen.prototype.bootstrap.call(this);
  }

  selectRespond(message) {
    play.trigger('pass-data', {
      name: 'add-item',
      message
    });
  }

  updateData() {
    var data = play.trigger('getState').data.menus;

    this.state.opts.categories.map((key) => {
      if (data[key]) data = data[key];
      if (data.items) data = data.items;
    });

    this.setState({
      data,
    });
  }

  open(opts) {
    var self = this;

    play.trigger('getData', {
      categories: opts.categories,
      callback: this.updateData.bind(this),
    });

    this.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
      opts,
    });

    setTimeout(() => {
      if (!self.state.started) {
        self.start();
      }
    }, 250);
  }

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return null;
  }

  renderContent() {
    return (
      <div>
        <ItemDrawer
          ref="drawer"
          selectRespond={this.selectRespond.bind(this)}
          cancelRespond={this.goto.bind(this, 'canvas')}
          categories={this.state.opts.categories}
          data={{
            items: this.state.data,
          }}
        />
      </div>
    );
  }
}

export default ItemDrawerScreen;
