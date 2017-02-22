export default function (props, ref, key, opts = {}) {
    var itemInteract;
    var enemyInteract;
    var enemyDisable;
    var onLabyrinthStart;
    var onLabyrinthStop;
    var onLabyrinthComplete;
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
            data: null,
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
            <skoash.InteractiveItem
                className={'item-' + (i + 1)}
                checkComplete={false}
                onInteract={itemInteract}
                children={[
                    <skoash.Audio
                        ref="interact"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}light-capture.mp3`}
                        complete
                    />,
                ]}
            />
        );
    }

    for (let i = 0; i < opts.enemiesCount; i++) {
        enemies.push(
            <skoash.InteractiveItem
                className={'enemy-' + (i + 1)}
                onInteract={enemyInteract}
                onDisable={enemyDisable}
                children={[
                    <skoash.Audio
                        ref="interact"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}energy-hog.mp3`}
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
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}frame-yellow.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}frame-lvlup.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}frame-sorry.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}frame-win.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}inside-meter.png`} />
            <skoash.MediaCollection
                play={_.get(props, 'data.game.vo')}
                children={opts.vos}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.game.sfx')}
                children={[
                    <skoash.Audio
                        ref="disable"
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}hog-disappear.mp3`}
                        complete
                    />,
                ]}
            />
            <skoash.Reveal
                openOnStart={opts.openOnStart}
                openReveal={_.get(props, 'data.openReveal')}
                closeReveal={_.get(props, 'data.closeReveal')}
                onOpen={onOpenReveal}
                onClose={onCloseReveal}
                list={opts.revealList}
            />
            <skoash.Component className="left">
                <skoash.Image className="avatar" src={`${CMWN.MEDIA.IMAGE}mr-eco-avatar.png`} />
                <skoash.Score
                    increment={10}
                    max={opts.itemsCount * 10}
                    correct={_.get(props, 'data.correct', 0)}
                />
            </skoash.Component>
            <skoash.Labyrinth
                img={`${CMWN.MEDIA.IMAGE}floor-plan.png`}
                map={`${CMWN.MEDIA.IMAGE}floor-plan-b-w.png`}
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
                    <skoash.Audio ref="collide" type="sfx" src={`${CMWN.MEDIA.EFFECT}wall.mp3`} complete />
                ]}
                items={items}
                enemies={enemies}
            />
            <skoash.Component className="level-container">
                <skoash.Image className="level" src={`${CMWN.MEDIA.IMAGE}text-level.png`} />
                <span>{opts.levelNumber}</span>
                <skoash.Timer
                    countDown
                    timeout={60000}
                    leadingContent="TIME LEFT"
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
            <skoash.DPad
                start={_.get(props, 'data.game.start', false)}
                stop={_.get(props, 'data.game.stop', false)}
                assets={[
                    <skoash.Audio ref="keydown" type="sfx" src={`${CMWN.MEDIA.EFFECT}click.mp3`} complete />
                ]}
            />
        </skoash.Screen>
    );
}
