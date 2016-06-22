import ItemDrawer from '../../shared/components/item_drawer/0.1.js';

class FriendScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'friends',
      load: true,
      complete: true,
      opts: {},
    };

  }

  selectRespond(message) {
    skoash.trigger('pass-data', {
      name: 'add-recipient',
      message
    });
  }

  updateData() {
    var data = skoash.trigger('getState').data.friends;

    data = data.map(friend => {
      return {
        'user_id': friend.user_id,
        name: friend.name,
        src: friend.profile_image,
        description: friend.flips_earned + ' Flips Earned',
      };
    });

    data.unshift({
      description: 'Choose Friend Later',
    });

    this.setState({
      data,
    });
  }

  open(opts) {
    var self = this;

    skoash.trigger('getData', {
      categories: ['friends']
    }).then(data => {
      self.updateData.call(self, data);
    });

    self.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
      opts,
    }, () => {
      self.refs.drawer.start();
    });

    if (!self.state.started) {
      self.start();
    }
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
        <div className="header" />
        <ItemDrawer
          ref="drawer"
          selectRespond={this.selectRespond.bind(this)}
          cancelRespond={this.back}
          categories={this.state.opts.categories}
          data={this.state.data}
          selectedItem={this.state.opts.recipient}
          complete={true}
        />
      </div>
    );
  }
}

export default FriendScreen;
