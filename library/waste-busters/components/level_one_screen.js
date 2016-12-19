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
        completeContent: (
            <p>
                You can now use the tips you've<br/>
                learned to help reduce<br/>
                the amount of waste<br/>
                created in the world!
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
        fact2Content: (
            <p>
                <h4>
                    Use Metal Utensils
                </h4>
                Tip: Reusable metal spoons,<br/>
                knives and forks are<br/>
                the way to go!
            </p>
        ),
        fact3Content: (
            <p>
                <h4>
                    Sort Recyclables from Waste
                </h4>
                Tip: Create or buy special bins<br/>
                to separate the metal,<br/>
                glass, paper and plastic<br/>
                from your waste.
            </p>
        ),
    });
}
