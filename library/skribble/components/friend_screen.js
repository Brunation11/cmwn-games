import ItemDrawer from '../../shared/components/item_drawer/0.1.js';

class FriendScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'friends'
    };

  }

  selectRespond(message) {
    play.trigger('pass-data', {
      name: 'add-recipient',
      message
    });
  }

  updateData() {
    var data = play.trigger('getState').data.friends;

    data = data.map(friend => {
      return {
        'user_id': friend.user_id,
        name: friend.name,
        src: friend.profile_image,
        description: friend.flips_earned + ' Flips Earned',
      };
    });

    data.unshift({
      name: 'Choose Friend Later',
    });

    this.setState({
      data,
    });
  }

  open(opts) {
    var self = this;

    play.trigger('getData', {
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
          cancelRespond={this.goto.bind(this, 'canvas')}
          categories={this.state.opts.categories}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default FriendScreen;
