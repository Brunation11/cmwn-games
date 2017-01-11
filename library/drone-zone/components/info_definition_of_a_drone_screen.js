export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-definition-of-a-drone"
        >

            {/*
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}ADroneIs.mp3`}
            />
            */}

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
