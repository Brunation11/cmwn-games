export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="great-job"
            className="large-frame"
        >
            <skoash.MediaSequence>
                <skoash.Audio ref="great-job" type="voiceOver" src={`${MEDIA.VO}GreatJob.mp3`}/>
            </skoash.MediaSequence>
            <skoash.Component className="frame animated">
                <skoash.Image src={`${MEDIA.IMAGE}img_8.1.png`}/>
                <p>
                    Now let's look<br /> at the impact of drought.
                </p>
                <skoash.Image src={`${MEDIA.IMAGE}img_8.2.png`}/>
            </skoash.Component>
        </skoash.Screen>
    );
}
