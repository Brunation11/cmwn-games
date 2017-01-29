import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 1,
        fact1VO: 'TheMovementsOf',
        fact2VO: 'SearchRescue',
        fact3VO: 'EmergencySituations',
        completeVO: 'LevelOneComplete',
        fact1Content: (
            <p>
                The movements of some tiny drones,
                <br />
                called miniature UAVs, are based
                <br />
                on birds and insects.
            </p>
        ),
        fact2Content: (
            <p>
                Drones were used in search and
                <br />
                rescue missions after hurricanes
                <br />
                struck Texas and Louisiana in 2008.
            </p>
        ),
        fact3Content: (
            <p>
                In emergency situations, drones can
                <br />
                be used to quickly deliver medicine
                <br />
                and life-saving equipment.
            </p>
        ),
        completeContent: (
            <p>
                You're a master firefighter.
            </p>
        )
    });
}
