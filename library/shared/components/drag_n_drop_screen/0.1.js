import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

class DragNDropScreen extends skoash.Screen {
  constructor() {
    super();
    this.correctRespond = this.correctRespond.bind(this);
  }

  correctRespond(draggable, dropzoneKey) {
    var dropzone = this.refs.dropzone.refs.dropzone.refs[`dropzone-${dropzoneKey}`];

    if (dropzone.state.content) {
      dropzone.state.content.returnToStart();
    }

    dropzone.setState({
      content: draggable
    });
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        <DropzoneReveal
          ref="dropzone"
          correctRespond={this.correctRespond}
          dropzones={this.props.dropzones}
          dropzoneList={this.props.dropzoneList}
          revealAssets={this.props.revealAssets}
        />
        {this.renderContentList('afterDropzoneList')}
      </div>
    );
  }
}

export default DragNDropScreen;
