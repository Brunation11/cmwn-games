export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-what-does-it-do"
        >
            {/*
            <skoash.Audio
                type="voiceOver"
                // src={`${MEDIA.VO}SoWhatDoes.mp3`}
            />
            */}

            <skoash.Component className="frame">
                <h1>SO WHAT DOES IT DO?</h1>
                <span className="content">
                    It is an aircraft that does not
                    <br />
                    contain a human pilot. Instead, the
                    <br />
                    drone is remote controlled by a
                    <br />
                    human or onboard computer.
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
