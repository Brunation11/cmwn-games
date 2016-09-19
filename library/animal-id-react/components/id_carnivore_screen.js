import SelectableReveal from '../../shared/components/selectable_reveal/0.1.js';

class IDCarnivore extends play.Screen {
  constructor() {
    super();


    this.state = {
      id: 'id-carnivore'
    };

    this.selectableList = [
      <li data-ref={'lion'}>
        <play.Image className="option" src="media/images/img_3.2.png" />
      </li>,
      <li>
        <play.Image className="option" src="media/images/img_3.3.png" />
      </li>,
      <li>
        <play.Image className="option" src="media/images/img_3.4.png" />
      </li>,
      <li>
        <play.Image className="option" src="media/images/img_3.5.png" />
      </li>,
    ];

    this.revealList = [
      <li data-ref="lion">
        <h3>A carnivore is an animal<br/> that eats only meat.</h3>
      </li>,
    ];

    this.revealAssets = [
      <play.Audio
        data-ref={'lion'}
        type={'voiceOver'}
        src={'media/audio/VO_3-2.mp3'}
        delay={1000}
      />,
    ];

    this.assets = [
      <play.Audio
        data-ref="correct"
        type="sfx"
        src="media/audio/S_3.2.mp3"
        complete={true}
      />,
      <play.Audio
        data-ref="incorrect"
        type="sfx"
        src="media/audio/id-incorrect.mp3"
        complete={true}
      />,
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
        <play.Audio ref="vo" type="voiceOver" src="media/audio/VO_3-1.mp3" />
        <div className="center">
          <div className="frame">
            <play.Image
              className="title"
              src="media/images/img_3.1.png"
            />
            <SelectableReveal
              ref={'selectableReveal'}
              answers={['lion']}
              assets={this.assets}
              selectableList={this.selectableList}
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

export default IDCarnivore;
