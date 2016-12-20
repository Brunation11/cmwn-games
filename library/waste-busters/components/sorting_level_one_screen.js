import SortingGameComponent from './sorting_game_component';

export default function (props, ref, key) {
    return SortingGameComponent(props, ref, key, {
        level: 1,
        points: 100,
        timer: 60000,
        instructions: (
            <p>
                Launch the object into the correct bin before<br/>
                the timer runs out to get to the next level.<br/>
                <br/>
                Should the waste be recycled,<br/>
                composted, or taken to the landfill?<br/>
                This is your chance to prove what<br/>
                you know and gain points!
            </p>
        ),
        complete: (
            <p>
                test
            </p>
        ),
    });
}
