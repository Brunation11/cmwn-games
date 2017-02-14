import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'person-with-flat',
        vo: 'FlatTire',
        label: 'FlatTireYes',
        header: 'Person With The Flat Tire',
        copy: (
            <span>
                That person will have<br />to call a friend.
            </span>
        )
    });
}
