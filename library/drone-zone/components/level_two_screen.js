import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 2,
        fact1VO: 'Dominos',
        fact2VO: 'DroneDecorate',
        fact3VO: 'DronesArcheology',
        completeVO: 'LevelTwoComplete',
        fact1Content: (
            <p>
                Domino's delivered the world's
                <br />
                first pizza by drone in 2016.
            </p>
        ),
        fact2Content: (
            <p>
                Drones have been used to decorate
                <br />
                stages for shows, reaching high areas.
            </p>
        ),
        fact3Content: (
            <p>
                Drones are used in archeology
                <br />
                to survey sites and take photos.
            </p>
        ),
        completeContent: (
            <p>
                Thank you for dropping
                <br />
                off all that mail.
            </p>
        )
    });
}
