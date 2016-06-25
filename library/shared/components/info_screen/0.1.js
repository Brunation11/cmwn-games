class InfoScreen extends skoash.Screen {
  constructor() {
    super();
  }

  renderContentList() {
    var children = this.props.children || this.props.content || [];
    return children.map((component, key) => {
      return (
        <component.type
          {...component.props}
          ref={component.ref}
          key={key}
        />
      );
    });
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
      </div>
    );
  }
}

export default InfoScreen;
