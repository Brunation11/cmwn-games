import InfoComponent from './info-component.js';

class Info extends play.Screen {
  constructor() {
    super();

  }

  renderContent() {
    return (
      <div>
        <div>info screen content</div>
        <InfoComponent />
      </div>
    );
  }
}

export default Info;
