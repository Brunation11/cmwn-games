const classNameText = {
  header: 'header',
  yourMessageTo: 'your-message-to',
  username: 'username',
  isReady: 'is-ready',
  buttons: 'buttons',
  createAnother: 'create-another',
  inbox: 'inbox',
};

class SentScreen extends skoash.Screen {
  constructor() {
    super();

    this.state = {
      id: 'sent',
      load: true,
      opts: {
        recipient: {}
      },
    };
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
        <div className={classNameText.header}>
          <span className={classNameText.yourMessageTo} />
          <span className={classNameText.username}>{this.state.opts.recipient.name}</span>
          <br/>
          <span className={classNameText.isReady} />
        </div>
        <div className={classNameText.buttons}>
          <button className={classNameText.createAnother} onClick={this.goto.bind(this, 'friend')} />
          <button className={classNameText.inbox} onClick={this.goto.bind(this, 'inbox')} />
        </div>
      </div>
    );
  }
}

export default SentScreen;
