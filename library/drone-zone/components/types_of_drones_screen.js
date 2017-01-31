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
            id="types-of-drones"
        >
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.qmarks.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.dronetypes.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.dronetypes.png`} />

            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing', null)}
                onPlay={onPlay}
            >
                <skoash.MediaSequence
                    ref="reveal"
                    silentOnStart
                >
                    <skoash.Audio
                        type="sfx"
                        src={`${MEDIA.EFFECT}AnswerReveal.mp3`}
                    />
                    <skoash.Audio
                        type="sfx"
                        src={`${MEDIA.EFFECT}TextRevelLoop.mp3`}
                    />
                </skoash.MediaSequence>
            </skoash.MediaCollection>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="instructions"
                    type="voiceOver"
                    src={`${MEDIA.VO}TypesOfDrones.mp3`}
                />
                <skoash.Audio
                    ref="military"
                    type="voiceOver"
                    src={`${MEDIA.VO}MilitaryDrones.mp3`}
                />
                <skoash.Audio
                    ref="delivery"
                    type="voiceOver"
                    src={`${MEDIA.VO}DelveryDrones.mp3`}
                />
                <skoash.Audio
                    ref="racing"
                    type="voiceOver"
                    src={`${MEDIA.VO}RacingDrones.mp3`}
                />
                <skoash.Audio
                    ref="media"
                    type="voiceOver"
                    src={`${MEDIA.VO}PhotoDrones.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.Reveal
                openTarget="reveal"
                closeTarget="reveal"
                openOnStart="instructions"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="instructions"
                        className="frame instructions"
                    >
                        <h1 className="header">TYPES OF DRONES</h1>
                        <span className="copy">
                            click to reveal all the
                            <br />
                            different types of drones
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="military"
                        className="frame military"
                    >
                        <h1 className="header">MILITARY DRONES</h1>
                        <span className="copy">
                            Drones have been used in the military for quite
                            <br />
                            some time, for research, combat, and cargo delivery.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="delivery"
                        className="frame delivery"
                    >
                        <h1 className="header">DELIVERY DRONES</h1>
                        <span className="copy">
                            Drones can be used to transport
                            <br />
                            mail packages…even pizzas!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="racing"
                        className="frame racing"
                    >
                        <h1 className="header">RACING DRONES</h1>
                        <span className="copy">
                            Some drones are designed for racing, with the ability
                            <br />
                            to fly around 40-60 miles per hour!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="media"
                        className="frame media"
                    >
                        <h1 className="header">PHOTO + VIDEO DRONES</h1>
                        <span className="copy">
                            A drone equipped with a video or still camera
                            <br />
                            can record fantastic images!
                        </span>
                    </skoash.Component>
                ]}
            />

            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                onSelect={onSelect}
                list={[
                    <skoash.Component
                        data-ref="military"
                        className="question-mark military"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="delivery"
                        className="question-mark delivery"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="racing"
                        className="question-mark racing"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="media"
                        className="question-mark media"
                        correct={true}
                    />
                ]}
            />
        </skoash.Screen>
    );
}
