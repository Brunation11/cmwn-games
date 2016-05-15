class Flip extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'flip'
    };

  }

  renderContent() {
    return (
      <div>flip screen content</div>
    );
  }
}

export default Flip;
