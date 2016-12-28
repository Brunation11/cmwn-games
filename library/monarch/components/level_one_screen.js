import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 1,
        fact1VO: '250Eggs', // needs to be updated
        fact2VO: '250Eggs',
        fact3VO: '1179',
        fact1Content: (
            <p>
                While most Monarch eggs<br/>
                are laid on milkweed leaves,<br/>
                accidents do happen and eggs<br/>
                could be found on other plants.
            </p>
        ),
        fact2Content: (
            <p>
                Monarchs can lay a maximum<br/>
                of 250 eggs per day,<br/>
                one egg at a time.
            </p>
        ),
        fact3Content: (
            <p>
                The highest number of eggs<br/>
                laid by a Monarch in<br/>
                captivity is 1179
            </p>
        ),
    });
}
