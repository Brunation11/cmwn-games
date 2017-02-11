import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 3,
        fact1VO: 'DronesCanBeUsed',
        fact2VO: 'DroneRacing',
        fact3VO: 'WinterOlympics',
        completeVO: 'LevelThreeComplete',
        fact1Content: (
            <p>
                Drones can be used in farming for
                <br />
                many things, including dusting crops
                <br />
                and monitoring livestock.
            </p>
        ),
        fact2Content: (
            <p>
                Drone racing as an amateur sport
                <br />
                started in 2014 in Australia.
            </p>
        ),
        fact3Content: (
            <p>
                Drones were used to film the
                <br />
                2014 Winter Olympics.
            </p>
        ),
        completeContent: (
            <p>
                The crops have been properly
                <br />
                tended to, and will yield an
                <br />
                amazing harvest!
            </p>
        )
    });
}
