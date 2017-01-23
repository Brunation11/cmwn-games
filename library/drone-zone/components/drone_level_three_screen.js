import DroneLevelsScreenComponent from './drone_levels_screen_component';

export default function (props, ref, key) {
    return DroneLevelsScreenComponent(props, ref, key, {
        level: 3,
        instructionsVO: 'LevelThreeHelp',
        factVO: 'DronesCanBeUsed',
        instructions: (
            <span className="copy">
                Help the drone
                <br />
                plant and
                <br />
                fertilize crops!
            </span>
        ),
        factContent: (
            <p>
                Drones can be used in farming for
                <br />
                many things, including dusting crops
                <br />
                and monitoring livestock.
            </p>
        ),
    });
}
