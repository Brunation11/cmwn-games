import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 5,
        introContent: (
            <p>
                You're almost there! Keep<br/>
                picking up waste and learning<br/>
                tips as you head<br/>
                to the finish line!
            </p>
        ),
        completeContent: (
            <p>
                You've won the game!<br/>
                Now take what you've learned,<br/>
                go out into the world,<br/>
                and do your part!
            </p>
        ),
        fact1Content: (
            <p>
                <h4>
                    Buy In Bulk
                </h4>
                Tip: Individually-wrapped items<br/>
                use more packaging than<br/>
                a whole bunch of them<br/>
                sold in one package.
            </p>
        ),
        fact2Content: (
            <p>
                <h4>
                    Carry Water in a<br/>
                    Reusable Water Bottle
                </h4>
                Tip: Bottled water uses containers<br/>
                designed to be used only once.<br/>
                But special reusable water<br/>
                bottles can be filled with<br/>
                water from your tap!
            </p>
        ),
        fact3Content: (
            <p>
                <h4>
                    Prepare Your Cardboard<br/>
                    for Recycling
                </h4>
                Tip: Break boxes down to save<br/>
                space, and be sure<br/>
                to remove any food waste.
            </p>
        ),
    });
}
