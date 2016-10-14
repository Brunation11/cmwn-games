import Score from 'shared/components/score/0.1';
import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import Timer from 'shared/components/timer/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';
import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key, opts = {}) {
  var itemInteract,
    enemyInteract,
    onLabyrinthStart,
    onLabyrinthStop,
    onLabyrinthComplete,
    onTimerComplete,
    onOpenReveal,
    onCloseReveal,
    items = [],
    enemies = [];

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

  onLabyrinthStart = function () {
    this.interval = setInterval(() => {
      var offset;
      if (_.get(props, 'data.game.stop', false)) return;
      offset = {
        width: this.player.offsetWidth,
        height: this.player.offsetHeight,
      };
      _.each(this.enemies, enemy => {
        if (this.doIntersect(this.state.playerX, this.state.playerY, offset, enemy)) return;
        Math.random() < .75 ? enemy.disable() : enemy.enable();
      });
    }, 4000);
  };

  onLabyrinthStop = function () {
    clearInterval(this.interval);
  };

  onLabyrinthComplete = function () {
    this.updateGameState({
      path: 'openReveal',
      data: 'level-up',
    });
    this.updateGameState({
      path: 'game',
      data: {
        complete: true,
      },
    });
  };

  onTimerComplete = function () {
    if (_.get(props, 'data.openReveal') === 'level-up') return;
    this.updateGameState({
      path: 'openReveal',
      data: 'try-again',
    });
  };

  onOpenReveal = function (message) {
    this.updateGameState({
      path: 'game',
      data: {
        stop: true,
        start: false,
        vo: message,
      },
    });
  };

  onCloseReveal = function (prevMessage) {
    if (prevMessage === 'try-again' && !_.get(props, 'data.closeReveal')) {
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

    if (prevMessage === 'level-up') {
      skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
    }
  };

  for (let i = 0; i < opts.itemsCount; i++) {
    items.push(
      <IteractiveItem
        className={'item-' + (i + 1)}
        checkComplete={false}
        onInteract={itemInteract}
        children={[
          <skoash.Audio ref="interact" type="sfx" src="media/_sounds/_effects/LightCapture.mp3" complete />,
        ]}
      />
    );
  }

  for (let i = 0; i < opts.enemiesCount; i++) {
    enemies.push(
      <IteractiveItem
        className={'enemy-' + (i + 1)}
        onInteract={enemyInteract}
        children={[
          <skoash.Audio ref="disable" type="sfx" src="media/_sounds/_effects/HogDisappear.mp3" complete />,
          <skoash.Audio ref="interact" type="sfx" src="media/_sounds/_effects/EnergyHog.mp3" complete />,
        ]}
      />
    );
  }

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id={opts.id}
    >
      <skoash.Image className="hidden" src="media/_images/frame.yellow.png" />
      <skoash.Image className="hidden" src="media/_images/frame.lvlup.png" />
      <skoash.Image className="hidden" src="media/_images/frame.sorry.png" />
      <skoash.Image className="hidden" src="media/_images/frame.win.png" />
      <skoash.Image className="hidden" src="media/_sprites/sprites.meter.png" />
      <MediaCollection
        play={_.get(props, 'data.game.vo')}
        children={opts.vos}
      />
      <Reveal
        openOnStart={opts.openOnStart}
        openReveal={_.get(props, 'data.openReveal')}
        closeReveal={_.get(props, 'data.closeReveal')}
        onOpen={onOpenReveal}
        onClose={onCloseReveal}
        list={opts.revealList}
      />
      <skoash.Component className="left">
        <skoash.Image className="avatar" src="media/_images/mr.eco.avatar.png" />
        <Score
          increment={10}
          max={opts.itemsCount * 10}
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
        onStart={onLabyrinthStart}
        onStop={onLabyrinthStop}
        onComplete={onLabyrinthComplete}
        assets={[
          <skoash.Audio ref="collide" type="sfx" src="media/_sounds/_effects/wall.mp3" complete />,
        ]}
        items={items}
        enemies={enemies}
      />
      <skoash.Component className="level-container">
        <skoash.Image className="level" src="media/_images/text.level.png" />
        <span>{opts.levelNumber}</span>
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
