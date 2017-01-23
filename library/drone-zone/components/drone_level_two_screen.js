import DroneLevelsScreenComponent from './drone_levels_screen_component';

export default function (props, ref, key) {
    return DroneLevelsScreenComponent(props, ref, key, {
        level: 2,
        instructionsVO: 'LevelTwoHelp',
        factVO: 'Dominos',
        instructions: (
            <span className="copy">
                Help the drone
                <br />
                deliver and mail
                <br />
                packages around
                <br />
                the neighborhood.
            </span>
        ),
        factContent: (
            <p>
                Domino's delivered the world's
                <br />
                first pizza by drone in 2016.
            </p>
        ),
    });
}
