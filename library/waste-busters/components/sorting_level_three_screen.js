import SortingGameComponent from './sorting_game_component';

export default function (props, ref, key) {
    return SortingGameComponent(props, ref, key, {
        level: 3,
        points: 100,
        timer: 120000,
        instructionsVO: 'Waste_Sorting_Action',
        completeVO: 'Waste_Sorting_Wizard',
        completeSFX: 'GameWon',
        instructions: (
            <p>
                The clock is set!<br/>
                Get ready for some<br/>
                challenging waste<br/>
                sorting action!
            </p>
        ),
        complete: (
            <p>
                You are now a
                <h3>WASTE SORTING CHAMPION</h3>
                Thank you for learning<br/>
                about the right way<br/>
                to dispose of waste.
            </p>
        ),
    });
}
