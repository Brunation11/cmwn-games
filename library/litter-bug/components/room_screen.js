export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="room"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}throw-trash-room.mp3`} />
            <skoash.Audio ref="button" complete type="sfx" src={`${CMWN.MEDIA.EFFECT}no.mp3`} />
            <div className="avatar animated" />
            <div className="banner animated" />
        </skoash.Screen>
    );
}
