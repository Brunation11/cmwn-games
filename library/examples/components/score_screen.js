import Score from 'shared/components/score/0.1';

const UP = 'up';
const DOWN = 'down';
const SCORE = 'score';
const MAX = 100;
const INCREMENT = 20;
const DOWNINCREMENT = 10;

var ScoreScreen;

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

ScoreScreen = (
    <ScoreScreenComponent
        id="score"
    >
        <Score
            ref={SCORE}
            max={MAX}
            increment={INCREMENT}
            downIncrement={DOWNINCREMENT}
        />
    </ScoreScreenComponent>
);

export default ScoreScreen;
