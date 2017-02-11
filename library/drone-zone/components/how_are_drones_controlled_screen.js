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

        this.updateGameState({
            path: 'sfx',
            data: {
                playing: 'reveal'
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

        this.updateGameState({
            path: 'sfx',
            data: {
                playing: null
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
                src={`${MEDIA.VO}HowAreDronesControlled.mp3`}
            />

            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprite.controllers.png`}
            />

            <skoash.Component className="header">
                <h1>HOW ARE DRONES CONTROLLED?</h1>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="reveal"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Reveal_1.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="computers"
                    type="voiceOver"
                    src={`${MEDIA.VO}Computers.mp3`}
                />
                <skoash.Audio
                    ref="remote-control"
                    type="voiceOver"
                    src={`${MEDIA.VO}RemoteControl.mp3`}
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
                    >
                        <span className="click">
                            click to reveal
                        </span>
                        <span className="label">
                            computers
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="remote-control"
                        className="question-mark remote-control"
                        correct={true}
                    >
                        <span className="click">
                            click to reveal
                        </span>
                        <span className="label">
                            remote control
                        </span>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
