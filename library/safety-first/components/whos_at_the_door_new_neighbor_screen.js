import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'new-neighbor',
        vo: 'NewNeighborNo',
        label: 'NewNeighbor',
        header: 'New Neighbor',
        copy: (
            <span>
                The key word is new.<br />
                They will have to come back and<br />
                visit when your parents are home.
            </span>
        )
    });
}
