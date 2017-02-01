import GameEmbedder from 'shared/components/game_embedder/0.1';
import DPad from 'shared/components/d_pad/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="game-screen"
        >
            <GameEmbedder
                src="../phaser-test-game/index.html"
                controller={_.get(props, 'data.d-pad')}
            />
            <DPad />
        </skoash.Screen>
    );
}
