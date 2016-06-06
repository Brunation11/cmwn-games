import DropzoneReveal from '../../shared/components/dropzone_reveal/0.1.js';

class DNDLion extends play.Screen {
  constructor() {
    super();


    this.state = {
      id: 'dnd-lion'
    };

    this.dropzoneList = [
      <div
        data-ref="lion"
        message={'correct'}
        className="d-1"
        return={true}
      />,
      <div
        className="d-2"
        return={true}
      />,
      <div
        className="d-3"
        return={true}
      />,
    ];

    this.dropzoneAssets = [
      <play.Audio
        type="sfx"
        data-ref="correct"
        src="media/audio/drag-correct.mp3"
      />,
      <play.Audio
        type="sfx"
        data-ref="incorrect"
        src="media/audio/drag-incorrect.mp3"
      />,
      <play.Audio
        type="sfx"
        data-ref="drag"
        src="media/audio/drag.mp3"
      />,
    ];

    this.revealList = [
      <li data-ref="correct">
        <h3>
          African lions live together in<br/>
          groups called “prides” and are<br/>
          the most social of<br/>
          all the big cats.
        </h3>
      </li>,
    ];

    this.revealAssets = [
      <play.Audio data-ref="correct" type="voiceOver" src="media/audio/VO_17-2.mp3" />
    ];

  }

  closeRespond() {
    if (this.state.complete && !this.state.return) {
      this.goto(this.props.index + 1);
    }
  }

  renderContent() {
    return (
      <div>
        <div className="center">
          <div className="frame">
            <DropzoneReveal
              ref={'dropzoneReveal'}
              answers={['correct']}
              dropzoneList={this.dropzoneList}
              dropzoneAssets={this.dropzoneAssets}
              dropzoneMessage={'correct'}
              revealList={this.revealList}
              revealAssets={this.revealAssets}
              closeRespond={this.closeRespond.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DNDLion;
