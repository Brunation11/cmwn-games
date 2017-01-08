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
            id="types-of-drones"
        >
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="introduction"
                    type="voiceOver"
                    // src={`${MEDIA.VO}TypesOfDrones.mp3`}
                />
                <skoash.Audio
                    ref="military"
                    type="voiceOver"
                    // src={`${MEDIA.VO}MilitaryDrones.mp3`}
                />
                <skoash.Audio
                    ref="delivery"
                    type="voiceOver"
                    // src={`${MEDIA.VO}DelveryDrones.mp3`}
                />
                <skoash.Audio
                    ref="racing"
                    type="voiceOver"
                    // src={`${MEDIA.VO}RacingDrones.mp3`}
                />
                <skoash.Audio
                    ref="media"
                    type="voiceOver"
                    // src={`${MEDIA.VO}PhotoDrones.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                selectOnStart="instructions"
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

            <skoash.Reveal
                openTarget="reveal"
                closeTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="introduction"
                        className="introduction"
                    >
                        <h2 className="header">TYPES OF DRONES</h2>
                        <span className="copy">
                            click to reveal all the
                            <br />
                            different types of drones
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="military"
                        className="military"
                    >
                        <h2 className="header">MILITARY DRONES</h2>
                        <span className="copy">
                            Drones have been in the military for quite
                            <br />
                            some time, for research, combat, and cargo delivery.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="delivery"
                        className="delivery"
                    >
                        <h2 className="header">DELIVERY DRONES</h2>
                        <span className="copy">
                            Drones can be used to transport
                            <br />
                            mail, packages... even pizzas!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="racing"
                        className="racing"
                    >
                        <h2 className="header">RACING DRONES</h2>
                        <span className="copy">
                            Some drones are designed for racing, with the ability
                            <br />
                            to fly around for 40-60 miles per hour!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="media"
                        className="media"
                    >
                        <h2 className="header">PHOTO + VIDEO DRONES</h2>
                        <span className="copy">
                            A drone equiped with a video or still camera
                            <br />
                            can record fantastic images!
                        </span>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
