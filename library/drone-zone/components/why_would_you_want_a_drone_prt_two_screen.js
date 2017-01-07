import Dropzone from '../shared/components/dropzone/0.1';
import Draggable from '../draggable/0.1.js';

export default function (props, ref, key) {
    var incorrectRespond;
    var onComplete;
    var onPlay;

    incorrectRespond = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'incorrect'
            }
        });
    };

    onComplete = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'complete'
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
            id="why-would-you-want-a-drone-prt-two"
        >
            <skoash.Component className="header">
                <h1>WHY WOULD YOU WANT A DRONE?</h1>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="instructions"
                    type="voiceOver"
                    // src={`${MEDIA.VO}LetsPutKnowTest.mp3`}
                />
                <skoash.Audio
                    ref="construction"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="sports"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="police-duties"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="fire-fighting"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="photography"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="delivery"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
                <skoash.Audio
                    ref="farming"
                    type="voiceOver"
                    // src={`${MEDIA.VO}`}
                />
            </skoash.MediaCollection>

            <Dropzone
                incorrectRespond={function(message) {

                }}
                dropzones={[
                    <skoash.Component answers="construction">
                    </skoash.Component>,
                    <skoash.Component answers="sports">
                    </skoash.Component>,
                    <skoash.Component answers="police-duties">
                    </skoash.Component>,
                    <skoash.Component answers="fire-fighting">
                    </skoash.Component>,
                    <skoash.Component answers="photography">
                    </skoash.Component>,
                    <skoash.Component answers="delivery">
                    </skoash.Component>,
                    <skoash.Component answers="farming">
                    </skoash.Component>
                ]}
                draggables={[
                    <Draggable
                        className="construction"
                        message="construction"
                        return={true}
                    />,
                    <Draggable
                        className="sports"
                        message="sports"
                        return={true}
                    />,
                    <Draggable
                        className="police-duties"
                        message="police-duties"
                        return={true}
                    />,
                    <Draggable
                        className="fire-fighting"
                        message="fire-fighting"
                        return={true}
                    />,
                    <Draggable
                        className="photography"
                        message="photography"
                        return={true}
                    />,
                    <Draggable
                        className="delivery"
                        message="delivery"
                        return={true}
                    />,
                    <Draggable
                        className="farming"
                        message="farming"
                        return={true}
                    />
                ]}
            />

            <skoash.Reveal
                openTarget="reveal"
                closeTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="instructions"
                        className="instructions"
                    >
                        <span className="copy">
                            Let's put your
                            <br />
                            knowledge to the test!
                            <br />
                            Click and drag these
                            <br />
                            tasks to the proper
                            <br />
                            scenario where the
                            <br />
                            drone could be used!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="incorrect"
                        className="incorrect"
                    >
                        <h2>TRY AGAIN</h2>
                        <span className="copy">
                            That's not quite
                            <br />
                            right, but don't
                            <br />
                            worry, you have
                            <br />
                            another chance!
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="complete"
                        className="complete"
                    >
                        <span className="copy">
                            Excellent Job!
                            <br />
                            You are now an
                            <br />
                            expert at drones!
                            <br />
                            Now what will you
                            <br />
                            use a drone for?
                        </span>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
