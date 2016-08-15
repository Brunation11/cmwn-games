import _ from 'lodash';

import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

class DragNDropScreen extends skoash.Screen {
  constructor() {
    super();
    this.correctRespond = this.correctRespond.bind(this);
    this.dragRespond = this.dragRespond.bind(this);
  }

  dragRespond(draggable) {
    _.forIn(this.refs['dropzone-reveal'].refs.dropzone.refs, (ref, key) => {
      if (key.indexOf('dropzone-') === -1) return;
      if (!this.props.multipleAnswers) {
        if (ref && ref.state && ref.state.content === draggable) {
          ref.setState({
            content: null
          });
        }
      }
    });
    this.incomplete();
  }

  correctRespond(draggable, dropzoneKey) {
    var dropzone, endX, endY, complete = true, content;
    dropzone = this.refs['dropzone-reveal'].refs.dropzone.refs[`dropzone-${dropzoneKey}`];

    if (this.props.centerOnCorrect) {
      endX = (draggable.state.endX - draggable.state.corners[0].x + dropzone.corners[0].x) + ((draggable.state.corners[1].x - draggable.state.corners[0].x) / 2);
      endY = (draggable.state.endY - draggable.state.corners[0].y + dropzone.corners[0].y) + ((draggable.state.corners[3].y - draggable.state.corners[0].y) / 2);
      draggable.setEnd(endX, endY);
    }
      
    if (this.props.multipleAnswers) {
      content = dropzone.state.content || [];
      if (content.indexOf(draggable) === -1) {
        content.push(draggable);
      }
      dropzone.setState({content});
    } else {
      if (dropzone.state.content && draggable !== dropzone.state.content) {
        dropzone.state.content.returnToStart();
        dropzone.state.content.markIncorrect();
      }
      dropzone.setState({
        content: draggable
      });
    }

    if (typeof this.refs['dropzone-reveal'].refs.reveal.open === 'function') {
      this.open(draggable.props.message);
    }
      
    _.forIn(this.refs['dropzone-reveal'].refs.dropzone.refs, (ref, key) => {
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
          ref="dropzone-reveal"
          dropzoneAssets={this.props.dropzoneAssets}
          dragRespond={this.dragRespond}
          correctRespond={this.props.correctRespond || this.correctRespond}
          dropzones={this.props.dropzones}
          dropzoneList={this.props.dropzoneList}
          revealAssets={this.props.revealAssets}
          checkComplete={this.props.checkComplete}
        />
        {this.renderContentList('afterDropzoneList')}
      </div>
    );
  }
  
  render() {
    return (
      <div>
        <DropzoneReveal
          ref="dropzone-reveal"
          dropzoneAssets={this.props.dropzoneAssets}
          dragRespond={this.dragRespond}
          correctRespond={this.props.correctRespond || this.correctRespond}
          dropzones={this.props.dropzones}
          dropzoneList={this.props.dropzoneList}
          secondDropzoneList={this.props.secondDropzoneList}
          revealList={this.props.revealList}
          revealAssets={this.props.revealAssets}
          checkComplete={this.props.checkComplete}
        />
      </div>
    );
  }
}

DragNDropScreen.defaultProps = {
  checkComplete: false,
  checkReady: true,
};

export default DragNDropScreen;