export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-definition-of-a-drone"
        >
            <skoash.Image className="hidden" src={`${MEDIA.IMAGE}drone.png`} />

            <skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    src={`${MEDIA.EFFECT}AnswerReveal.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${MEDIA.EFFECT}TextRevelLoop.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}DefinitionDrone.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}ADroneIs.mp3`}
                />
            </skoash.MediaSequence>

            <skoash.Component className="frame">
                <h1>DEFINITION OF A DRONE</h1>
                <span className="content">
                    A drone is an
                    <br />
                    unmanned aerial vehicle
                    <br />
                    (UAV).
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
