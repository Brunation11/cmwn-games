import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'delivery-person',
        vo: 'DeliveryPersonNo',
        label: 'DeliveryPerson',
        header: 'Delivery Person',
        copy: (
            <span>
                Your door is not opening!<br/>They can leave the package<br />on the stoop!
            </span>
        )
    });
}
