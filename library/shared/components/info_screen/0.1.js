class InfoScreen extends skoash.Screen {
  constructor() {
    super();
  }

  renderContentList() {
    return this.props.content.map((component, key) => {
      var ref = component.props['data-ref'] == null ? key : component.props['data-ref'];
      return (
        <component.type
          {...component.props}
          data-ref={ref}
          ref={ref}
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
