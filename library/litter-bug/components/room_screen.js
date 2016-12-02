export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="room"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_assets/_sounds/_vos/ThrowTrashRoom.mp3" />
            <skoash.Audio ref="button" complete type="sfx" src="media/_assets/_sounds/_effects/No.mp3" />
            <div className="avatar animated" />
            <div className="banner animated" />
        </skoash.Screen>
    );
}
