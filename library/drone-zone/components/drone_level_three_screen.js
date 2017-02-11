import DroneLevelsScreenComponent from './drone_levels_screen_component';

export default function (props, ref, key) {
    return DroneLevelsScreenComponent(props, ref, key, {
        level: 3,
        instructionsVO: 'LevelThreeHelp',
        instructions: (
            <span className="copy">
                Help the drone
                <br />
                plant and
                <br />
                fertilize crops!
            </span>
        )
    });
}
