import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'grandpa',
        vo: 'GrandpaYes',
        label: 'Grandpa',
        header: 'Grandpa',
        copy: (
            <span>
                Open for grandparents.
            </span>
        )
    });
}
