import SelectableReveal from '../../shared/components/selectable_reveal/0.1.js';
import Inbox from '../../shared/components/inbox/0.1.js';
import SavedMessages from '../../shared/components/saved_messages/0.1.js';

class InboxScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'inbox',
      load: true,
    };

    this.selectableList = [
      <li />,
      <li />,
      <li />,
      <li />,
      <li />,
    ];

    this.revealList = this.getRevealList();

  }

  getRevealList(inbox, outbox, saved) {
    var read, unread;

    inbox = inbox || [];

    read = inbox.filter(item => {
      return item.read;
    });

    unread = inbox.filter((item) => {
      return !item.read;
    });

    return [
      <li>
        <Inbox
          data-ref="inbox"
          data={{
            items: inbox || [],
          }}
          selectRespond={this.readMessage.bind(this)}
        />
      </li>,
      <li>
        <Inbox
          data-ref="unread"
          data={{
            items: unread || [],
          }}
          selectRespond={this.readMessage.bind(this)}
        />
      </li>,
      <li>
        <Inbox
          data-ref="ready"
          data={{
            items: read || [],
          }}
          selectRespond={this.readMessage.bind(this)}
        />
      </li>,
      <li>
        <Inbox
          data-ref="outbox"
          data={{
            items: outbox || [],
          }}
          selectRespond={this.readMessage.bind(this)}
        />
      </li>,
      <li>
        <SavedMessages
          data-ref="saved"
          data={{
            items: saved || [],
          }}
          selectRespond={this.editMessage.bind(this)}
        />
      </li>,
    ];
  }

  editMessage(message) {
    skoash.trigger('goto', {
      index: 'canvas',
      message,
    });
  }

  readMessage(message) {
    skoash.trigger('goto', {
      index: 'read',
      message,
    });
  }

  updateData() {
    var data, inbox, outbox, saved;

    data = skoash.trigger('getState').data;
    inbox = data.received;
    outbox = data.sent;
    saved = data.draft;

    console.log(data);

    this.revealList = this.getRevealList(inbox, outbox, saved);

    this.setState({
      inbox,
      outbox,
      saved,
    });
  }

  open() {
    var self = this;

    skoash.trigger('getData', {
      status: 'received',
    }).then(() => {
      self.updateData.call(self);
    });

    skoash.trigger('getData', {
      status: 'sent',
    }).then(() => {
      self.updateData.call(self);
    });

    skoash.trigger('getData', {
      status: 'draft',
    }).then(() => {
      self.updateData.call(self);
    });

    this.setState({
      load: true,
      open: true,
      leave: false,
      close: false,
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
        <div className="center">
          <div className="frame">
            <SelectableReveal
              ref={'selectableReveal'}
              selectableList={this.selectableList}
              revealList={this.revealList}
              selectOnStart={'0'}
              openOnStart={'0'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InboxScreen;
