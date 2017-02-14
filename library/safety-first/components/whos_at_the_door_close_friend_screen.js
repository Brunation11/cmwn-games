import WhosAtTheDoorComponent from './whos_at_the_door_component';

export default function (props, ref, key) {
    return WhosAtTheDoorComponent(props, ref, key, {
        id: 'close-friend',
        vo: 'CloseFriendYes',
        label: 'CloseFriend',
        header: 'Close Friend',
        copy: (
            <span>
                A friend that you know<br />well can come in!
            </span>
        )
    });
}
