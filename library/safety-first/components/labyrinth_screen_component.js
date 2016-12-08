import Score from 'shared/components/score/0.1';
import Labyrinth from 'shared/components/labyrinth/0.1';
import DPad from 'shared/components/d_pad/0.1';
import IteractiveItem from 'shared/components/interactive_item/0.1';
import Timer from 'shared/components/timer/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';

export default function (props, ref, key, opts = {}) {
    var itemInteract;
    var onLabyrinthStart;
    var onLabyrinthStop;
    var onLabyrinthComplete;
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
            var offset;
            if (_.get(props, 'data.game.stop', false)) return;
            offset = {
                width: this.player.offsetWidth,
                height: this.player.offsetHeight,
            };
        }, opts.disableInterval);
    };

    onLabyrinthStop = function () {
        clearInterval(this.interval);
    };

    onLabyrinthComplete = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'level-up'
            }
        });
    };

    onOpenReveal = function (message) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: message
            }
        });
    };

    onCloseReveal = function (prevMessage) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: ''
            }
        });
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
        >
            <MediaCollection
                play={_.get(props, 'data.reveal.open')}
                children={opts.vos}
            />

            <RevealPrompt
                ref="reveal"
                openOnStart={opts.openOnStart}
                openReveal={_.get(props, 'data.reveal.open', null)}
                onOpen={onOpenReveal}
                onClose={onCloseReveal}
                list={opts.revealList}
            />

            <Labyrinth
                img={`${ENVIRONMENT.MEDIA}ImageAssets/map.01.fullimg.jpg`}
                map={`${ENVIRONMENT.MEDIA}ImageAssets/map.01.jpg`}
                input={_.get(props, 'data.d-pad', {})}
                startX={140}
                startY={120}
                speed={2}
                scale={_.get(props, 'gameState.scale', 1)}
                start={_.get(props, 'data.game.start', false)}
                onStart={onLabyrinthStart}
                onStop={onLabyrinthStop}
                onComplete={onLabyrinthComplete}
                items={items}
            />

            <DPad
                start={_.get(props, 'data.game.start', false)}
                stop={_.get(props, 'data.game.stop', false)}
            />
        </skoash.Screen>
    );
}
