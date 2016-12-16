import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 1,
        introContent: (
            <p>
                On this level, be sure to<br/>
                collect all the <span className="truck" /> to<br/>
                reveal tips on how<br/>
                to responsibly<br/>
                deal with waste!
            </p>
        )
    });
}
