import Score from 'shared/components/score/0.1';
import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import Timer from 'shared/components/timer/0.1';
import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key) {
  var itemInteract, enemyInteract, getEnemyClassNames, onTimerComplete, onCloseReveal;

  itemInteract = function () {
    this.complete();
    this.disable();
    this.updateGameState({
      path: 'correct',
      data: _.get(props, 'data.correct', 0) + 1,
    });
  };

  enemyInteract = function () {
    this.setState({
      hit: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          hit: false
        });
      }, 1000);
    });
  };

  getEnemyClassNames = function () {
    return {HIT: this.state.hit};
  };

  onTimerComplete = function () {
    // if (!this.state.revealOpen) {
    //   this.refs['center-2'].open();
    //   this.refs.reveal.open(TRY_AGAIN);
    //   this.setState({ revealOpen: true });
    // }
  };

  onCloseReveal = function (prevMessage) {
    if (prevMessage === '1') {
      skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
    }
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="labyrinth-level-one-screen"
    >
      <skoash.Image className="hidden" src="media/_images/frame.yellow.png" />
      <skoash.Image className="hidden" src="media/_images/sprites.meter.png" />
      <skoash.Component className="left">
        <skoash.Image className="avatar" src="media/_images/mr.eco.avatar.png" />
        <Score
          increment={10}
          max={40}
          correct={_.get(props, 'data.correct', 0)}
        />
      </skoash.Component>
      <Labyrinth
        img="media/_images/floor.plan.png"
        map="media/_images/floor.plan-BW.png"
        input={_.get(props, 'data.d-pad', {})}
        startX={245}
        startY={380}
        scale={_.get(props, 'gameState.scale', 1)}
        onReady={function () {
          setInterval(() => {
            var offset = {
              width: this.player.offsetWidth,
              height: this.player.offsetHeight,
            };
            _.each(this.enemies, enemy => {
              if (this.doIntersect(this.state.playerX, this.state.playerY, offset, enemy)) return;
              Math.random() < .5 ? enemy.disable() : enemy.enable();
            });
          }, 4000);
        }}
        items={[
          <IteractiveItem
            className="item-1"
            checkComplete={false}
            onInteract={itemInteract}
          />,
          <IteractiveItem
            className="item-2"
            checkComplete={false}
            onInteract={itemInteract}
          />,
          <IteractiveItem
            className="item-3"
            checkComplete={false}
            onInteract={itemInteract}
          />,
          <IteractiveItem
            className="item-4"
            checkComplete={false}
            onInteract={itemInteract}
          />,
        ]}
        enemies={[
          <IteractiveItem
            className="enemy-1"
            onInteract={enemyInteract}
            getClassNames={getEnemyClassNames}
          />,
          <IteractiveItem
            className="enemy-2"
            onInteract={enemyInteract}
            getClassNames={getEnemyClassNames}
          />,
          <IteractiveItem
            className="enemy-3"
            onInteract={enemyInteract}
            getClassNames={getEnemyClassNames}
          />,
        ]}
      />
      <skoash.Component className="level-container">
        <skoash.Image className="level" src="media/_images/text.level.png" />
        <span>1</span>
        <Timer
          countDown
          timeout={30000}
          leadingContent="TIME LEFT"
          getTime={function () {
            var time = this.props.countDown ? this.props.timeout / 1000 - this.state.time : this.state.time;
            time = time < 10 ? '0' + time : time;
            return time;
          }}
          onComplete={onTimerComplete}
        />
        <h3>
          TURN OFF
        </h3>
        <p>
          the lights that other<br/>
          people leave on!
        </p>
      </skoash.Component>
      <DPad />
      <Reveal
        openOnStart="1"
        onClose={onCloseReveal}
        list={[
          <skoash.Component className="labyrinth-frame">
            <skoash.Image className="eco" src="media/_images/mr.eco.png" />
            <div className="copy">
              <p>
                Move Mr. Eco<br/>
                by using the arrow keys<br/>
                and help him<br/>
                turn off the lights!
              </p>
              <div className="reveal-arrows">
                <div />
                <div />
                <div />
                <div />
              </div>
            </div>
          </skoash.Component>,
          <skoash.Component className="labyrinth-frame level-up">
            <skoash.Image className="eco" src="media/_images/mr.eco.png" />
            <div className="copy">
              <h2>
                Level up!
              </h2>
              <p>
                <span>ECO-TIP:</span> Save energy by walking through your own house<br/>
                before you leave and making sure all the lights are out.
              </p>
            </div>
          </skoash.Component>
        ]}
      />
    </skoash.Screen>
  );
}
