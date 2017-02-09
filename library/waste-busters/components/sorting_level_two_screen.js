import SortingGameComponent from './sorting_game_component';

export default function (props, ref, key) {
    return SortingGameComponent(props, ref, key, {
        level: 2,
        points: 100,
        timer: 120000,
        instructionsVO: 'Get_Ready_Go',
        completeVO: 'Waste_Sorting_Wizard',
        completeSFX: 'LevelComplete',
        instructions: (
            <p>
                Sorting is just about to<br/>
                get a little tougher!<br/>
                Get Ready! Go!
            </p>
        ),
        complete: (
            <p>
                Wow, you're doing<br/>
                amazing sorting work!<br/>
                Keep going and become<br/>
                a Sorting Champion!
            </p>
        ),
    });
}
