import classNames from 'classnames';
import DropzoneReveal from 'shared/components/dropzone_reveal/0.1';


class DropzoneComponent extends skoash.Component {
  getClassNames() {
    return classNames(
      this.state.content,
      skoash.Component.prototype.getClassNames.call(this)
    );
  }
}

class DragNDrop extends skoash.Screen {
  constructor() {
    super();
    this.correctRespond = this.correctRespond.bind(this)
  }

  correctRespond(message, dropzoneKey) {
    var dropzone = this.refs.dropzone.refs.dropzone.refs[`dropzone-${dropzoneKey}`];
    dropzone.setState({
      content: message
    });
  }

  renderDropzones() {
    return this.props.dropznes.map((item, key) =>
      <DropzoneComponent key={key} {...item.props} />
    );
  }

  renderDropzoneReveal() {
    return (
      <DropzoneReveal
        ref={this.props.ref}
        dropzoneMessage={this.props.dropzoneMessage}
        correctRespond={this.correctRespond}
        dropzones={this.renderDropzones()}
        dropzoneList={this.props.dropzoneList}
        revealAssets={this.props.revealAssets}
      />
    );
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        {this.renderDropzoneReveal()}
      </div>
    );
  }
};

export default DragNDrop;