import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'new-neighbor',
        vo: 'SisterYes',
        label: 'Sister',
        copy: 'That\'s right, you can<br />let your sister in!'
    });
}
