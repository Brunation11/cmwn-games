import _ from 'lodash';

import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

class DragNDropScreen extends skoash.Screen {
  constructor() {
    super();
    this.correctRespond = this.correctRespond.bind(this);
    this.dragRespond = this.dragRespond.bind(this);
  }

  dragRespond(draggable) {
    _.forIn(this.refs.dropzone.refs.dropzone.refs, (ref, key) => {
      if (key.indexOf('dropzone-') === -1) return;
      if (ref && ref.state && ref.state.content === draggable) {
        ref.setState({
          content: null
        });
      }
    });

    this.incomplete();
  }

  correctRespond(draggable, dropzoneKey) {
    var dropzone, endX, endY, complete = true;
    dropzone = this.refs.dropzone.refs.dropzone.refs[`dropzone-${dropzoneKey}`];

    if (this.props.centerOnCorrect) {
      endX = draggable.state.endX - draggable.state.corners[0].x + dropzone.corners[0].x;
      endY = draggable.state.endY - draggable.state.corners[0].y + dropzone.corners[0].y;
      draggable.setEnd(endX, endY);
    }
    if (!this.props.multipleAnswers) {
      if (dropzone.state.content && draggable !== dropzone.state.content) {
        dropzone.state.content.returnToStart();
        dropzone.state.content.markIncorrect();
      }
    }

    dropzone.setState({
      content: draggable
    });

    _.forIn(this.refs.dropzone.refs.dropzone.refs, (ref, key) => {
      if (key.indexOf('dropzone-')) return;
      if (!ref.state.content) complete = false;
    });

    if (complete) this.complete();
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        <DropzoneReveal
          ref="dropzone"
          dropzoneAssets={this.props.dropzoneAssets}
          dragRespond={this.dragRespond}
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

DragNDropScreen.defaultProps = {
  checkComplete: false,
  checkReady: true,
};

export default DragNDropScreen;
