import ItemDrawer from '../../shared/components/item_drawer/0.1.js';

const DEFAULT_PROFILE_IMAGE = '';

class FriendScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'friends',
      load: true,
      complete: true,
      recipient: {},
      opts: {},
    };

  }

  selectRespond(message) {
    skoash.trigger('pass-data', {
      name: 'add-recipient',
      goto: this.state.opts.goto,
      message
    });
  }

  updateData(d) {
    var data = d && d.user ? d.user : skoash.trigger('getState').data.user;

    data = data.map(friend => {
      var src = friend._links.user_image && friend._links.user_image.href ?
        friend._links.user_image.href :
        DEFAULT_PROFILE_IMAGE;
      return {
        'user_id': friend.user_id,
        name: friend.username,
        src,
        // I need to get the flips earned back from the backend to do this.
        description: '',
        // description: friend.flips_earned + ' Flips Earned',
      };
    });

    this.setState({
      data,
    });
  }

  open(opts) {
    var recipient, self = this;

    skoash.trigger('getData', {
      name: 'getFriends'
    }).then(data => {
      self.updateData.call(self, data);
    });

    recipient = skoash.trigger('getState').recipient;

    self.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
      recipient,
      opts,
    }, () => {
      self.refs.drawer && self.refs.drawer.start();
    });

    if (!self.state.started) {
      self.start();
    }
  }

  suggestFriends() {
    window.open('https://changemyworldnow.com/friends');
  }

  renderFriends() {
    if (this.state.data && this.state.data.length) {
      return (
        <ItemDrawer
          ref="drawer"
          selectRespond={this.selectRespond.bind(this)}
          cancelRespond={this.back}
          categories={this.state.opts.categories}
          data={this.state.data}
          selectedItem={this.state.recipient}
          buttons={this.buttons}
          complete={true}
          className={this.state.opts.goto}
        />
      );
    }

    return (
      <div className={this.props.className}>
        <div className="item-drawer-container">
          <div className="suggest-friends-buttons">
            <button className="continue" onClick={this.selectRespond.bind(this, {})} />
            <button className="suggest" onClick={this.suggestFriends} />
          </div>
        </div>
      </div>
    );
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
        {this.renderFriends()}
      </div>
    );
  }
}

export default FriendScreen;
