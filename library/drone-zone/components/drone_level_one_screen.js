import DroneLevelsScreenComponent from './drone_levels_screen_component';

export default function (props, ref, key) {
    return DroneLevelsScreenComponent(props, ref, key, {
        level: 1,
        instructionsVO: 'LevelOneHelp',
        instructions: (
            <span className="copy">
                Help the drone
                <br />
                put out fires
                <br />
                around the city
                <br />
                before the timer
                <br />
                runs out.
            </span>
        )
    });
}
