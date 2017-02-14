import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'mother',
        vo: 'MotherYes',
        label: 'Mother',
        header: 'Mother',
        copy: (
            <span>
                Open for parents and guardians.
            </span>
        )
    });
}
