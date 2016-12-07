import Score from 'shared/components/score/0.1';
import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import Timer from 'shared/components/timer/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';
import Reveal from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key, opts = {}) {
    var itemInteract;
    var enemyInteract;
    var enemyDisable;
    var onLabyrinthStart;
    var onLabyrinthStop;
    var onLabyrinthComplete;
    var getTime;
    var onTimerComplete;
    var onOpenReveal;
    var onCloseReveal;
    var items = [];
    var enemies = [];

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

    enemyDisable = function () {
        this.updateGameState({
            path: 'game',
            data: {
                sfx: 'disable',
            },
        });
        setTimeout(() => {
            this.updateGameState({
                path: 'game',
                data: {
                    sfx: null,
                },
            });
        }, 500);
    };

    onLabyrinthStart = function () {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            var offset;
            if (_.get(props, 'data.game.stop', false)) return;
            offset = {
                width: this.player.offsetWidth,
                height: this.player.offsetHeight,
            };
            _.each(this.enemies, enemy => {
                if (this.doIntersect(this.state.playerX, this.state.playerY, offset, enemy)) return;
                Math.random() < opts.disableChance ? enemy.disable() : enemy.enable();
            });
        }, opts.disableInterval);
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

    getTime = function () {
        var timeLeft;
        var minutesLeft;
        var secondsLeft;
        timeLeft = this.props.timeout / 1000 - this.state.time;
        minutesLeft = Math.floor(timeLeft / 60);
        secondsLeft = timeLeft % 60;
        secondsLeft = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
        return `${minutesLeft}:${secondsLeft}`;
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
                    <skoash.Audio
                        ref="interact"
                        type="sfx"
                        src="media/_sounds/_effects/LightCapture.mp3"
                        complete
                    />,
                ]}
            />
        );
    }

    for (let i = 0; i < opts.enemiesCount; i++) {
        enemies.push(
            <IteractiveItem
                className={'enemy-' + (i + 1)}
                onInteract={enemyInteract}
                onDisable={enemyDisable}
                children={[
                    <skoash.Audio
                        ref="interact"
                        type="sfx"
                        src="media/_sounds/_effects/EnergyHog.mp3"
                        complete
                    />,
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
            <skoash.Image className="hidden" src="media/_images/inside.meter.png" />
            <MediaCollection
                play={_.get(props, 'data.game.vo')}
                children={opts.vos}
            />
            <MediaCollection
                play={_.get(props, 'data.game.sfx')}
                children={[
                    <skoash.Audio
                        ref="disable"
                        type="sfx"
                        src="media/_sounds/_effects/HogDisappear.mp3"
                        complete
                    />,
                ]}
            />
            <Reveal
                openOnStart={opts.openOnStart}
                openReveal={_.get(props, 'data.openReveal')}
                closeReveal={_.get(props, 'data.closeReveal')}
                onOpen={onOpenReveal}
                onClose={onCloseReveal}
                list={opts.revealList}
            />
            <Labyrinth
                img={`${ENVIRONMENT.MEDIA}ImageAssets/map.01.fullimg.jpg`}
                map={`${ENVIRONMENT.MEDIA}ImageAssets/map.01.jpg`}
                input={_.get(props, 'data.d-pad', {})}
                startX={250}
                startY={385}
                speed={2}
                scale={_.get(props, 'gameState.scale', 1)}
                start={_.get(props, 'data.game.start', false)}
                onStart={onLabyrinthStart}
                onStop={onLabyrinthStop}
                onComplete={onLabyrinthComplete}
                assets={[
                    <skoash.Audio ref="collide" type="sfx" src="media/_sounds/_effects/wall.mp3" complete />,
                ]}
                // items={items}
                // enemies={enemies}
            />
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
