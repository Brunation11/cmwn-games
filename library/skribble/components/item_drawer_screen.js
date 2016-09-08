import _ from 'lodash';

import ItemDrawer from '../../shared/components/item_drawer/0.1.js';

class ItemDrawerScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      opts: {
        categories: [],
      },
    };

  }

  selectRespond(message) {
    skoash.trigger('pass-data', {
      name: 'add-item',
      message
    });
  }

  updateData(d) {
    var data = d ? d : skoash.trigger('getState').data.menu.items;

    this.state.opts.categories.forEach(key => {
      if (data[key]) data = data[key];
      if (data.items) data = data.items;
    });

    data = _.values(data);

    this.setState({
      data,
    });
  }

  open(opts) {
    var self = this;

    skoash.trigger('getMedia', {
      path: 'skribble/menu/' + opts.categories.join('/')
    }).then(data => {
      self.updateData(data);
    });

    self.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
      opts,
      data: null
    }, () => {
      self.updateData();
    });

    setTimeout(() => {
      if (!self.state.started) {
        self.start();
      }
    }, 250);
  }

  cancelRespond() {
    if (this.state.category) {
      this.setState({
        category: '',
        categoryName: '',
      });
    } else {
      skoash.trigger('goto', {index: 'canvas'});
    }
  }

  renderContent() {
    return (
      <div>
        <ItemDrawer
          ref="drawer"
          selectRespond={this.selectRespond.bind(this)}
          cancelRespond={this.cancelRespond}
          categories={this.state.opts.categories}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <ItemDrawerScreen
      {...props}
      ref={ref}
      key={key}
      id="item-drawer"
      hideNext
      hidePrev
      load
    />
  );
}
