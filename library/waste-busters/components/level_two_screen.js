import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 2,
        introVO: 'landfill',
        fact1VO: 'Portions',
        fact2VO: 'Reusable_Bags',
        fact3VO: 'Rules',
        introContent: (
            <p>
                In this level,<br/>
                you'll discover ways<br/>
                to keep waste<br/>
                out of the landfill!
            </p>
        ),
        completeContent: (
            <p>
                Excellent Work!<br/>
                Reusing certain items is one of<br/>
                the best ways to reduce<br/>
                waste—and it saves<br/>
                you money too!
            </p>
        ),
        fact1Content: (
            <p>
                <span>
                    Choose Smaller Food Portions
                </span>
                Tip: Sometimes our eyes can<br/>
                be bigger than our stomachs!<br/>
                Only take as much food<br/>
                as you can eat.
            </p>
        ),
        fact2Content: (
            <p>
                <span>
                    Carry Reusable Bags
                </span>
                Tip: Keep a canvas bag with<br/>
                you wherever you go,<br/>
                so if you shop you can<br/>
                avoid using plastic!
            </p>
        ),
        fact3Content: (
            <p>
                <span>
                    Discover Recycling Rules
                </span>
                Tip: Each city has their own<br/>
                recycling rules. Discover the<br/>
                rules for where you live!
            </p>
        ),
    });
}
