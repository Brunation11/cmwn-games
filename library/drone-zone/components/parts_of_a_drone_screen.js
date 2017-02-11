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
            id="parts-of-a-drone"
        >
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.radarframe.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.IMAGE}droneparts.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.qmarks.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.parts.png`} />

            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}PartsOfADrone.mp3`}
            />

            <skoash.Component className="header">
                <h1>PARTS OF A DRONE</h1>
            </skoash.Component>

            <skoash.Component className="notice">
                <span>
                    Click to reveal
                    <br />
                    the different
                    <br />
                    parts of a drone!
                </span>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="motor"
                    type="voiceOver"
                    src={`${MEDIA.VO}Motor.mp3`}
                />
                <skoash.Audio
                    ref="lights"
                    type="voiceOver"
                    src={`${MEDIA.VO}Lights.mp3`}
                />
                <skoash.Audio
                    ref="propeller"
                    type="voiceOver"
                    src={`${MEDIA.VO}Propeller.mp3`}
                />
                <skoash.Audio
                    ref="central-core"
                    type="voiceOver"
                    src={`${MEDIA.VO}CentralCore.mp3`}
                />
                <skoash.Audio
                    ref="landing-platform"
                    type="voiceOver"
                    src={`${MEDIA.VO}LandingPlatform.mp3`}
                />
                <skoash.Audio
                    ref="camera"
                    type="voiceOver"
                    src={`${MEDIA.VO}VideoCamera.mp3`}
                />
                <skoash.Audio
                    ref="arm"
                    type="voiceOver"
                    src={`${MEDIA.VO}Arm.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                selectOnStart="instructions"
                onSelect={onSelect}
                list={[
                    <skoash.Component
                        data-ref="motor"
                        className="question-mark motor"
                        correct={true}
                    >
                        <span className="label">
                            MOTOR
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="lights"
                        className="question-mark lights"
                        correct={true}
                    >
                        <span className="label">
                            LIGHTS
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="propeller"
                        className="question-mark propeller"
                        correct={true}
                    >
                        <span className="label">
                            PROPELLER
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="central-core"
                        className="question-mark central-core"
                        correct={true}
                    >
                        <span className="label">
                            CENTRAL CORE
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="landing-platform"
                        className="question-mark landing-platform"
                        correct={true}
                    >
                        <span className="label">
                            LANDING PLATFORM
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="camera"
                        className="question-mark camera"
                        correct={true}
                    >
                        <span className="label">
                            CAMERA
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        data-ref="arm"
                        className="question-mark arm"
                        correct={true}
                    >
                        <span className="label">
                            ARM
                        </span>
                    </skoash.Component>
                ]}
            />

            <skoash.Reveal
                openTarget="reveal"
                closeTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="motor"
                        className="motor"
                    >
                        <h2 className="label">MOTOR</h2>
                    </skoash.Component>,
                    <skoash.Component
                        ref="lights"
                        className="lights"
                    >
                        <h2 className="label">LIGHTS</h2>
                    </skoash.Component>,
                    <skoash.Component
                        ref="propeller"
                        className="propeller"
                    >
                        <h2 className="label">PROPELLER</h2>
                    </skoash.Component>,
                    <skoash.Component
                        ref="central-core"
                        className="central-core"
                    >
                        <h2 className="label">CENTRAL CORE</h2>
                    </skoash.Component>,
                    <skoash.Component
                        ref="landing-platform"
                        className="landing-platform"
                    >
                        <h2 className="label">LANDING PLATFORM</h2>

                    </skoash.Component>,
                    <skoash.Component
                        ref="camera"
                        className="camera"
                    >
                        <h2 className="label">CAMERA</h2>
                    </skoash.Component>,
                    <skoash.Component
                        ref="arm"
                        className="arm"
                    >
                        <h2 className="label">ARM</h2>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
