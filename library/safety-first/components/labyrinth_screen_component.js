import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key, opts = {}) {
    var itemInteract;
    var onLabyrinthStart;
    var onLabyrinthStop;
    var onOpenReveal;
    var onCloseReveal;
    var items = [];

    itemInteract = function () {
        this.complete();
        this.disable();
        this.updateGameState({
            path: 'reveal',
            data: {
                open: this.props.className
            }
        });
    };

    onLabyrinthStart = function () {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (_.get(props, 'data.game.stop', false)) return;
        }, opts.disableInterval);
    };

    onLabyrinthStop = function () {
        clearInterval(this.interval);
    };

    onOpenReveal = function (message) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: message
            }
        });
    };

    onCloseReveal = function (message) {
        this.updateGameState({
            path: 'game',
            data: {
                score: _.get(props, 'data.game.score', 0) + 1
            }
        });

        this.updateGameState({
            path: 'reveal',
            data: {
                open: null
            }
        });

        if (message === 'instructions' && opts.tips) {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'tips'
                }
            });
        }

        if (_.get(props, 'data.game.score') === opts.goal) {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'level-up'
                }
            });

            this.updateGameState({
                path: 'game',
                data: {
                    complete: true
                }
            });
        }
    };

    for (let i = 0; i < opts.itemsCount; i++) {
        items.push(
            <IteractiveItem
                className={'item-' + (i + 1)}
                checkComplete={false}
                onInteract={itemInteract}
            />
        );
    }

    return (
        <skoash.Screen
          {...props}
          ref={ref}
          key={key}
          id={opts.id}
          complete={_.get(props, 'data.game.complete', false)}
        >
            <MediaCollection
                complete={_.get(props, 'data.game.complete', false)}
                play={_.get(props, 'data.reveal.open')}
                children={opts.vos}
            />

            <RevealPrompt
                ref="reveal"
                complete={_.get(props, 'data.game.complete', false)}
                openOnStart={opts.openOnStart}
                openReveal={_.get(props, 'data.reveal.open', null)}
                onOpen={onOpenReveal}
                onClose={onCloseReveal}
                list={opts.revealList}
            />

            <Labyrinth
                img={opts.img}
                map={opts.map}
                input={_.get(props, 'data.d-pad', {})}
                startX={opts.startX}
                startY={opts.startY}
                speed={2}
                scale={_.get(props, 'gameState.scale', 1)}
                onStart={onLabyrinthStart}
                onStop={onLabyrinthStop}
                items={items}
            />

            <DPad
                start={_.get(props, 'data.game.start', false)}
                stop={_.get(props, 'data.game.stop', false)}
            />
        </skoash.Screen>
    );
}
