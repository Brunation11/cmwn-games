export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-layer"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_14.1.mp3" delay={500} />
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src="media/images/Img_14.1.png" />
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
