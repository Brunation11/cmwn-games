import SelectableReveal from '../../shared/components/selectable_reveal/0.1.js';
import Inbox from '../../shared/components/inbox/0.1.js';
import SavedMessages from '../../shared/components/saved_messages/0.1.js';

class InboxScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'send',
      load: true,
    };

  }

  open() {
    var self = this;

    skoash.trigger('getData', {
      categories: 'inbox',
    }).then(data => {
      self.updateData.call(self, data);
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
        
      </div>
    );
  }
}

export default InboxScreen;
