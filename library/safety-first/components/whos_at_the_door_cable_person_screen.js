import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'cable-person',
        vo: 'CablePersonNo',
        label: 'CablePerson',
        header: 'Cable Person',
        copy: (
            <span>
                You don't know them.<br />They'll have to come back<br />when your parents are home.
            </span>
        )
    });
}
