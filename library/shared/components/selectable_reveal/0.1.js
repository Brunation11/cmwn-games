class SelectableReveal extends play.Component {
  constructor() {
    super();

  }

  renderSelectable() {
    return null;
  }

  renderReveal() {
    return null;
  }

  render() {
    return (
      <div className="selectable-reveal">
        {this.renderSelectable()}
        {this.renderReveal()}
      </div>
    );
  }
}

export default SelectableReveal;
