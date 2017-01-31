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
            id="why-would-you-want-a-drone-prt-one"
        >
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.jobgameframe.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.qmarkwsquare.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.blanksquares.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.jobicons.png`} />

            <skoash.Component className="header">
                <h1>WHY WOULD YOU WANT A DRONE?</h1>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="reveal"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Reveal_2.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="instructions"
                    type="voiceOver"
                    src={`${MEDIA.VO}WhyWantADrone.mp3`}
                />
                <skoash.Audio
                    ref="construction"
                    type="voiceOver"
                    src={`${MEDIA.VO}Construction.mp3`}
                />
                <skoash.Audio
                    ref="sports"
                    type="voiceOver"
                    src={`${MEDIA.VO}Sports.mp3`}
                />
                <skoash.Audio
                    ref="police-duties"
                    type="voiceOver"
                    src={`${MEDIA.VO}PoliceDuties.mp3`}
                />
                <skoash.Audio
                    ref="fire-fighting"
                    type="voiceOver"
                    src={`${MEDIA.VO}Firefighting.mp3`}
                />
                <skoash.Audio
                    ref="photography"
                    type="voiceOver"
                    src={`${MEDIA.VO}Photography.mp3`}
                />
                <skoash.Audio
                    ref="delivery"
                    type="voiceOver"
                    src={`${MEDIA.VO}Delivery.mp3`}
                />
                <skoash.Audio
                    ref="farming"
                    type="voiceOver"
                    src={`${MEDIA.VO}Farming.mp3`}
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
                        className="frame job-round instructions"
                    >
                        <span className="copy">
                            Click to reveal
                            <br />
                            what you would
                            <br />
                            want a drone for!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="construction"
                        className="frame job-round construction"
                    >
                        <h2 className="label">Construction</h2>
                        <span className="copy">
                            Bring equipment
                            <br />
                            to builders high
                            <br />
                            up in the air.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="sports"
                        className="frame job-round sports"
                    >
                        <h2 className="label">Sports</h2>
                        <span className="copy">
                            View and record
                            <br />
                            sports matches.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="police-duties"
                        className="frame job-round police-duties"
                    >
                        <h2 className="label">Police Duties</h2>
                        <span className="copy">
                            Help people
                            <br />
                            in emergencies.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fire-fighting"
                        className="frame job-round fire-fighting"
                    >
                        <h2 className="label">Fire Fighting</h2>
                        <span className="copy">
                            Bring water to
                            <br />
                            remote regions
                            <br />
                            to put out fires.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="photography"
                        className="frame job-round photography"
                    >
                        <h2 className="label">Photography</h2>
                        <span className="copy">
                            Get hard-to-reach
                            <br />
                            camera angles.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="delivery"
                        className="frame job-round delivery"
                    >
                        <h2 className="label">Delivery</h2>
                        <span className="copy">
                            Drop off packages.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="farming"
                        className="frame job-round farming"
                    >
                        <h2 className="label">Farming</h2>
                        <span className="copy">
                            Oversee and help
                            <br />
                            water crops.
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
                        data-ref="construction"
                        className="question-mark construction"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="sports"
                        className="question-mark sports"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="police-duties"
                        className="question-mark police-duties"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="fire-fighting"
                        className="question-mark fire-fighting"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="photography"
                        className="question-mark photography"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="delivery"
                        className="question-mark delivery"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="farming"
                        className="question-mark farming"
                        correct={true}
                    />
                ]}
            />
        </skoash.Screen>
    );
}
