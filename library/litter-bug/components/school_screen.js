export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="school"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}throw-trash-school.mp3`} />
            <skoash.Audio ref="button" complete type="sfx" src={`${CMWN.MEDIA.EFFECT}no.mp3`} />
            <div className="banner animated" />
            <div className="avatar animated" />
        </skoash.Screen>
    );
}
