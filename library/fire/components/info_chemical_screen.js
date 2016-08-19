import AudioSequence from 'shared/components/audio_sequence/0.1';

class InfoChemicalScreenComponent extends skoash.Screen {

  constructor() {
    super();

    this.state = {
      flame: false,
      equal: false,
      text: false
    }
  }

  open(opts) {
    super.open(opts);

    this.setState({
      flame: false,
      equal: false,
      text: false,
    });
  }

  startAnimation(item) {
    console.log(item);
    var temp = {};
    temp[item] = true;
    this.setState(temp);
  }

  renderMediaSequence() {
    return (
      <AudioSequence ref="media-sequence" playInterval={[2000, 1000, 700]}>
        <skoash.Audio type="voiceOver" src="media/S_2/vo_ChemicalReaction.mp3" />  
        <skoash.Audio type="sfx" src="media/S_2/S_2.2.mp3" 
          onPlay={this.startAnimation.bind(this, 'flame')} />
        <skoash.Audio type="sfx" src="media/S_2/S_2.3.mp3"
          onPlay={this.startAnimation.bind(this, 'equal')} />
        <skoash.Audio type="sfx" src="media/S_2/S_2.4.mp3"
          onPlay={this.startAnimation.bind(this, 'text')} />
      </AudioSequence>
    );
  }

  getClassNames() {
    var classNames = super.getClassNames();
    if (this.state.flame) classNames += ' FLAME';
    if (this.state.equal) classNames += ' EQUAL';
    if (this.state.text) classNames += ' TEXT';

    return classNames;
  }

  renderContent() {
    return (
      <div>
        {this.renderMediaSequence()}
        {this.renderContentList()}
      </div>
    );
  }
}

export default function (props, ref, key) {
  return (
    <InfoChemicalScreenComponent
      {...props}
      ref={ref}
      key={key}
      id="info-chemical"
    >
      <skoash.Image className="animated" src="media/S_2/img_2.1.png" />
      <skoash.Image className="animated flame" src="media/S_2/img_2.2.png" />
      <skoash.Image className="animated equal" src="media/S_2/img_2.3.png" />
      <h2 className="animated text">
        Chemical<br />Reaction
      </h2>
    </InfoChemicalScreenComponent>
  );
}
