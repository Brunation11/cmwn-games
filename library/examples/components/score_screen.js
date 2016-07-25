import Score from 'shared/components/score/0.1';

const UP = 'up';
const DOWN = 'down';
const SCORE = 'score';

class ScoreScreenComponent extends skoash.Screen {
  constructor() {
    super();

    this.count = 0;

    this.up = this.up.bind(this);
    this.down = this.down.bind(this);
  }

  up() {
    var increment;
    if (++this.count % 3 === 0) increment = 30;
    this.refs[SCORE].up(increment);
  }

  down() {
    this.refs[SCORE].down();
  }

  renderContent() {
    return (
      <div>
        {this.renderContentList()}
        <button onClick={this.up}>{UP}</button>
        <button onClick={this.down}>{DOWN}</button>
      </div>
    );
  }
}

var ScoreScreen = (
  <ScoreScreenComponent
    id="score"
  >
    <Score
      ref={SCORE}
      max={100}
      increment={20}
      downIncrement={10}
    />
  </ScoreScreenComponent>
);

export default ScoreScreen;
