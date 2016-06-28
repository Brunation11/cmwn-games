import ItemDrawer from '../../shared/components/item_drawer/0.1.js';

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

    this.setState({
      data,
    });
  }

  open(opts) {
    var recipient, self = this;

    skoash.trigger('getData', {
      categories: ['friends']
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

  renderOtter() {
    var copy, src;

    src = 'One';
    copy = (
      <span>
        Don't have<br/> friends yes<br/><br/> Let me suggest<br/> some for you.
      </span>
    );

    if (this.state.data && this.state.data.length) {
      src = 'Two';
      copy = (
        <span>
          Let me find a friend<br/> to send your message to.
        </span>
      );
    }

    return (
      <div className={'otter-container ' + src}>
        <skoash.Image className="otter" src={`media/_Otter/Otter_Static_Greeting${src}.png`} />
        <div className="bubble">
          {copy}
        </div>
      </div>
    );
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
        {this.renderOtter()}
        {this.renderFriends()}
      </div>
    );
  }
}

export default FriendScreen;
