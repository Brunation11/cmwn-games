import Score from 'shared/components/score/0.1';
import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key) {
  var itemInteract, enemyInteract, getEnemyClassNames;

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
          }, 2000);
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
      <DPad />
      <Reveal
        // openOnStart="0"
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
          </skoash.Component>
        ]}
      />
    </skoash.Screen>
  );
}
