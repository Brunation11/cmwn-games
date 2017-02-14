import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'brother',
        vo: 'BrotherYes',
        label: 'Brother',
        header: 'Brother',
        copy: (
            <span>
                You know your brother!
            </span>
        )
    });
}
