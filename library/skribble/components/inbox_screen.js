import SelectableReveal from '../../shared/components/selectable_reveal/0.1.js';
import Inbox from '../../shared/components/inbox/0.1.js';
import SavedMessages from '../../shared/components/saved_messages/0.1.js';

const inboxEmptyMessage = (
  <span>
    You haven't received any Skribbles!<br/>
    Get started by sending some!
  </span>
  );
const unreadEmptyMessage = (
  <span>
    You don't have any<br/>
    unread Skribbles!
  </span>
  );
const readEmptyMessage = (
  <span>
    You don't have any<br/>
    read Skribbles!
  </span>
  );
const sentEmptyMessage = (
  <span>
    You haven't sent any Skribbles.<br/>
    Let's get started!
  </span>
  );
const draftsEmptyMessage = (
  <span>
    You don't have any drafts.<br/>
    Start Skribbling!
  </span>
  );


class InboxScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
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

    this.readMessage = this.readMessage.bind(this);
    this.editMessage = this.editMessage.bind(this);
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
          emptyMessage={inboxEmptyMessage}
          selectRespond={this.readMessage}
        />
      </li>,
      <li>
        <Inbox
          data-ref="unread"
          data={{
            items: unread || [],
          }}
          emptyMessage={unreadEmptyMessage}
          selectRespond={this.readMessage}
        />
      </li>,
      <li>
        <Inbox
          data-ref="read"
          data={{
            items: read || [],
          }}
          emptyMessage={readEmptyMessage}
          selectRespond={this.readMessage}
        />
      </li>,
      <li>
        <Inbox
          data-ref="outbox"
          data={{
            items: outbox || [],
          }}
          emptyMessage={sentEmptyMessage}
          friendKey="friend_to"
          selectRespond={this.readMessage}
        />
      </li>,
      <li>
        <SavedMessages
          data-ref="saved"
          data={{
            items: saved || [],
          }}
          emptyMessage={draftsEmptyMessage}
          selectRespond={this.editMessage}
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
      self.updateData();
    });

    skoash.trigger('getData', {
      status: 'sent',
    }).then(() => {
      self.updateData();
    });

    skoash.trigger('getData', {
      status: 'draft',
    }).then(() => {
      self.updateData();
    });

    self.setState({
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

export default function (props, ref, key) {
  return (
    <InboxScreen
      {...props}
      ref={ref}
      key={key}
      id="inbox"
      hideNext
      hidePrev
    />
  );
}
