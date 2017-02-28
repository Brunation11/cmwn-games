export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-layer"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-14-1.mp3`} delay={500} />
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src={`${CMWN.MEDIA.IMAGE}img-14-1.png`} />
                <h3>
                    Polar Bears have a thick layer<br/>
                    of fat under their skin.<br/>
                    Do this experiment to see<br/>
                    how they keep warm.
                </h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
