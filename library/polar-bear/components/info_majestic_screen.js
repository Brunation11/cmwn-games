export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-majestic"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_2.1.mp3" delay={500} />
            <skoash.Component className="frame">
                <h3>
                    I am a majestic, beautiful<br />
                    Polar Bear and<br />
                    I am endangered.
                </h3>
                <h3>
                    I can only survive<br />
                    where oceans freeze<br />
                    allowing me to hunt<br />
                    seals living under,<br />
                    on or in the ice.
                </h3>
                <skoash.Image ref="bear" className="bear animated" src="media/images/Img_3.2.png" />
            </skoash.Component>
        </skoash.Screen>
    );
}
