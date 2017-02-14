import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'gas-man',
        vo: 'GasManNo',
        label: 'GasMan',
        header: 'Gas Man',
        copy: (
            <span>
                Not today. Even if<br />the person is wearing a uniform,<br />they are still a stranger.
            </span>
        )
    });
}
