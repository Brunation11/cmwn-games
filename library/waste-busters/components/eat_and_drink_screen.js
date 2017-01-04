export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="eat-and-drink"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'EveryDay.mp3'}
            />
            <skoash.Component className="frame-1">
                <skoash.Component className="intro-image-1" />
                <p>
                    Every day, we<br/>
                    eat and drink...
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
