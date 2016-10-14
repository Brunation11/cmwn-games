import Score from 'shared/components/score/0.1';
import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import Timer from 'shared/components/timer/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';
import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key) {
  var itemInteract,
    enemyInteract,
    getEnemyClassNames,
    onPlaySFX,
    onLabyrinthReady,
    onLabyrinthComplete,
    onTimerComplete,
    onOpenReveal,
    onCloseReveal,
    tryAgain;

  itemInteract = function () {
    this.complete();
    this.disable();
    this.updateGameState({
      path: 'correct',
      data: _.get(props, 'data.correct', 0) + 1,
    });
    this.updateGameState({
      path: 'game',
      data: {
        sfx: 'light-capture',
      },
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

  onPlaySFX = function () {
    this.updateGameState({
      path: 'game',
      data: {
        sfx: '',
      },
    });
  };

  onLabyrinthReady = function () {
    setInterval(() => {
      var offset;
      if (_.get(props, 'data.game.stop', false)) return;
      offset = {
        width: this.player.offsetWidth,
        height: this.player.offsetHeight,
      };
      _.each(this.enemies, enemy => {
        if (this.doIntersect(this.state.playerX, this.state.playerY, offset, enemy)) return;
        Math.random() < .5 ? enemy.disable() : enemy.enable();
      });
    }, 4000);
  };

  onLabyrinthComplete = function () {
    this.updateGameState({
      path: 'openReveal',
      data: '1',
    });
    this.updateGameState({
      path: 'game',
      data: {
        complete: true,
      },
    });
  };

  onTimerComplete = function () {
    if (_.get(props, 'data.openReveal') === '1') return;
    this.updateGameState({
      path: 'openReveal',
      data: '2',
    });
  };

  onOpenReveal = function (message) {
    this.updateGameState({
      path: 'game',
      data: {
        stop: true,
        start: false,
        vo: 'children-' + message,
      },
    });
  };

  onCloseReveal = function (prevMessage) {
    if (prevMessage === '2' && !_.get(props, 'data.closeReveal')) {
      skoash.trigger('quit');
      return;
    }

    this.updateGameState({
      path: 'game',
      data: {
        stop: false,
        start: true,
        restart: false,
      },
    });
    this.updateGameState({
      path: 'closeReveal',
      data: false,
    });
    this.updateGameState({
      path: 'openReveal',
      data: false,
    });
    this.updateGameState({
      path: 'correct',
      data: 0,
    });

    if (prevMessage === '1') {
      skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
    }
  };

  tryAgain = function () {
    skoash.trigger('updateState', {
      path: 'closeReveal',
      data: true,
    });
  };

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="labyrinth-level-one-screen"
    >
      <skoash.Image className="hidden" src="media/_images/frame.yellow.png" />
      <skoash.Image className="hidden" src="media/_sprites/sprites.meter.png" />
      <MediaCollection
        play={_.get(props, 'data.game.vo')}
      >
        <skoash.Audio type="voiceOver" src="media/_sounds/_vos/Instructions.mp3" />
        <skoash.Audio type="voiceOver" src="media/_sounds/_vos/LevelUp1.mp3" />
        <skoash.Audio type="voiceOver" src="media/_sounds/_vos/TryAgain.mp3" complete />
      </MediaCollection>
      <MediaCollection
        play={_.get(props, 'data.game.sfx')}
        onPlay={onPlaySFX}
      >
        <skoash.Audio ref="light-capture" type="sfx" src="media/_sounds/_effects/LightCapture.mp3" />
      </MediaCollection>
      <Reveal
        openOnStart="0"
        openReveal={_.get(props, 'data.openReveal')}
        closeReveal={_.get(props, 'data.closeReveal')}
        onOpen={onOpenReveal}
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
              <p>
                <h2>Level up!</h2>
                <h2>Level up!</h2>
                <span>ECO-TIP:</span> Save energy by walking through your own house<br/>
                before you leave and making sure all the lights are out.
              </p>
            </div>
          </skoash.Component>,
          <skoash.Component className="labyrinth-frame try-again">
            <skoash.Image className="eco" src="media/_images/mr.eco.png" />
            <div className="copy">
              <p>
                Sorry,<br/>
                Try Again!
              </p>
              <button onClick={tryAgain} />
            </div>
          </skoash.Component>
        ]}
      />
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
        speed={2}
        scale={_.get(props, 'gameState.scale', 1)}
        start={_.get(props, 'data.game.start', false)}
        onReady={onLabyrinthReady}
        onComplete={onLabyrinthComplete}
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
          checkComplete={_.get(props, 'data.game.start', false)}
          restart={_.get(props, 'data.game.start', false)}
          complete={_.get(props, 'data.game.complete', false)}
        />
        <h3>
          TURN OFF
        </h3>
        <p>
          the lights that other<br/>
          people leave on!
        </p>
      </skoash.Component>
      <DPad
        start={_.get(props, 'data.game.start', false)}
        stop={_.get(props, 'data.game.stop', false)}
        assets={[
          <skoash.Audio ref="keydown" type="sfx" src="media/_sounds/_effects/Click.mp3" complete />
        ]}
      />
    </skoash.Screen>
  );
}
