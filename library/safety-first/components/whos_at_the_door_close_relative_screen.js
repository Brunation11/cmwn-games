import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'close-relative',
        vo: 'CloseRelativeYes',
        label: 'CloseRelative',
        header: 'Close Relative',
        copy: (
            <span>
                A close relative<br />who your parents<br />approve of can come in.
            </span>
        )
    });
}
