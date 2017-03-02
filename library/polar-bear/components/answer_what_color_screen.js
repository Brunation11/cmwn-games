export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="answer-what-color"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-7-4.mp3`} delay={500} />
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src={`${CMWN.MEDIA.IMAGE}img-6-1.png`} />
                <h3>
                    Yup.<br />
                    The fur is actually<br />
                    a clear tube that<br />
                    looks white because it<br />
                    reflects the light.
                </h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
