export default function (props, ref, key) {
    var onSelect;
    var onPlay;

    onSelect = function (open) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open
            }
        });
    };

    onPlay = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: null
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="how-are-drones-controlled"
        >
            <skoash.Audio
                type="voiceOver"
                // src={`${MEDIA.VO}HowAreDronesControlled.mp3`}
            />

            <skoash.Component className="header">
                <h1>HOW ARE DRONES CONTROLLED?</h1>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="computers"
                    type="voiceOver"
                    // src={`${MEDIA.VO}Computers.mp3`}
                />
                <skoash.Audio
                    ref="remote-control"
                    type="voiceOver"
                    // src={`${MEDIA.VO}RemoteControl.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                onSelect={onSelect}
                list={[
                    <skoash.Component
                        data-ref="computers"
                        className="question-mark computers"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="remote-control"
                        className="question-mark remote-control"
                        correct={true}
                    />
                ]}
            />
        </skoash.Screen>
    );
}
