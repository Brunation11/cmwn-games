import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 1,
        introVO: 'Responsibly',
        completeContent: (
            <p>
                While most Monarch eggs<br/>
                are laid on milkweed leaves,<br/>
                accidents do happen and eggs<br/>
                could be found on other plants.
            </p>
        ),
    });
}
