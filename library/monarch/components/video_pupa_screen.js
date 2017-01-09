export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video-pupa"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}CatterpillarBuildsPupa.mp3`}
            />

            <skoash.Component className="copy-container">
                <span className="copy">
                    After two weeks, the
                    <br />
                    caterpillar is fully grown
                    <br />
                    and then finds a place to
                    <br />
                    transform. Attaching itself
                    <br />
                    to a stem or a leaf, the
                    <br />
                    caterpillar spins a
                    <br />
                    pupa out of silk.
                </span>
            </skoash.Component>


            <skoash.Component className="video-container">
                {/*
                <skoash.Video
                    src={`${MEDIA.VIDEO}MonarchNewVideo.mov`}
                />
                */}
            </skoash.Component>

        </skoash.Screen>
    );
}
