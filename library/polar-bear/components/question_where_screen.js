export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="question-where"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-8-1.mp3`} delay={500} />
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src={`${CMWN.MEDIA.IMAGE}img-8-1.png`} />
                <h3>Where do<br />Polar Bears live?</h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
