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
        ),
        fact1Content: (
            <p>
                <h4>
                    Use Less Paper
                </h4>
                Tip: Tear off one paper<br/>
                towel sheet at a time<br/>
                to wipe up spills.
            </p>
        ),
    });
}
