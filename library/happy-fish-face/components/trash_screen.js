import ClassNames from 'classnames';

import MediaCollection from 'shared/components/media_collection/0.1';
import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';
import Timer from 'shared/components/timer/0.1';
import CustomCursorScreen from 'shared/components/custom_cursor_screen/0.1';

const TRY_AGAIN = '0';
const GOOD_JOB = '1';

class TrashScreenComponent extends CustomCursorScreen {
    start() {
        super.start();

        var center = this.refs['children-1'].refs['children-0'];
        ['selectable', 'timer', 'children-0'].forEach(ref => { center.refs[ref].incompleteRefs(); });
        
        this.incomplete();
    }
}

export default function (props, ref, key) {

    var playAudio = function (play, playNext) {
        var callback = playNext ? playAudio.bind(this, playNext) : _.noop;
        this.updateGameState({
            path: 'media',
            data: {
                play
            },
            callback,
        });
    };

    var onSelect = function (ref, isCorrect) {
        var play = isCorrect? 'correct' : 'incorrect';
        playAudio.call(this, play, 'dummy');
    };

    var openReveal = function (open, cb = _.noop) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open,
            },
            callback: cb
        });
    };

    var timerAction = function (action, nextAction) {
        var callback = nextAction ? timerAction.bind(this, nextAction) : _.noop;

        this.updateGameState({
            path: 'timer',
            data: {
                action,
            },
            callback
        });
    };

    var selectableComplete = function () {
        openReveal.call(this, GOOD_JOB, timerAction.bind(this, 'stop', 'complete'));
    };

    var timerComplete = function () {
        if (_.get(props, 'data.reveal.open', '') === GOOD_JOB) return;

        openReveal.call(this, TRY_AGAIN);
    };

    var revealClose = function (ref) {
        openReveal.call(this, null);

        if (ref === TRY_AGAIN) { 
            timerAction.call(this, 'restart');
            this.updateGameState({
                path: 'selectable',
                data: {
                    incompleteRefs: true
                }
            });
        }
    };

    return (
        <TrashScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="trash"
            className={_.get(props, 'data.reveal.open', null) ? 'REVEAL-OPEN' : ''}
        >
            <MediaCollection
                ref="collection"
                play={_.get(props, 'data.media.play', null)}
            >
                <skoash.Audio
                    data-ref="correct"
                    type="sfx"
                    src="media/_audio/_S_Trash/HFF_SX_Right.mp3"
                />
                <skoash.Audio
                    data-ref="incorrect"
                    type="sfx"
                    src="media/_audio/_S_Trash/HFF_SX_Wrong.mp3"
                    complete
                />
            </MediaCollection>
            <skoash.Component className="center">
                <skoash.Component className="group">
                    <skoash.Component className="center">
                        <Reveal
                            ref="reveal"
                            className="center"
                            onClose={revealClose}
                            openReveal={_.get(props, 'data.reveal.open', null)}
                            list={[
                                <skoash.Component type="li" complete>
                                    <skoash.Image src="media/_images/_S_GoodJob/img_10.2.png" />
                                    <p>
                                        You ran out of time!
                                    </p>
                                </skoash.Component>,
                                <skoash.Component type="li" className="tryAgain">
                                    <skoash.Image src="media/_images/_S_GoodJob/img_10.1.png" />
                                    <p>
                                        Take this offline.<br /> Never throw the trash in the water.
                                    </p>
                                </skoash.Component>,
                            ]}
                            assets={[
                                <skoash.Audio
                                    type="voiceOver"
                                    src="media/_audio/_S_GoodJob/HFF_VO_TryAgain.mp3"
                                    complete
                                />,
                                <skoash.MediaSequence silentOnStart>
                                    <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_GoodJob.mp3" />
                                    <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_NeverThrow.mp3" />
                                </skoash.MediaSequence>,
                            ]}
                        />
                    </skoash.Component>
                    <Timer
                        ref="timer"
                        countDown={true}
                        action={_.get(props, 'data.timer.action', null)}
                        timeout={90000}
                        leadingContent={<skoash.Image src="media/_images/_S_Trash/img_9.1.png" />}
                        onComplete={timerComplete}
                    />
                    <Selectable
                        ref="selectable"
                        selectClass="HIGHLIGHTED"
                        onComplete={selectableComplete}
                        onSelect={onSelect}
                        incompleteRefs={_.get(props, 'data.selectable.incompleteRefs', false)}
                        list={[
                            <skoash.ListItem correct data-ref="bottle" />,
                            <skoash.ListItem correct data-ref="cans" />,
                            <skoash.ListItem correct data-ref="cleaner" />,
                            <skoash.ListItem correct data-ref="wash" />,
                            <skoash.ListItem correct data-ref="necklace" />,
                            <skoash.ListItem correct data-ref="oil" />,
                            <skoash.ListItem correct data-ref="bag" />,
                            <skoash.ListItem correct data-ref="water" />,
                            <skoash.ListItem correct data-ref="shoes" />,
                            <skoash.ListItem correct data-ref="soap" />,
                            <skoash.ListItem correct data-ref="sauce" />,
                            <skoash.ListItem correct data-ref="beeker" />,
                            <skoash.ListItem correct data-ref="drum" />,
                            <skoash.ListItem correct data-ref="cosmetics" />,
                            <skoash.ListItem correct data-ref="tire" />,
                            <skoash.ListItem correct data-ref="floss" />,
                            <skoash.ListItem correct data-ref="ketchup" />,
                            <skoash.ListItem correct data-ref="bulb" />,
                            <skoash.ListItem correct data-ref="fries" />,
                            <skoash.ListItem correct data-ref="soda" />,
                            <skoash.ListItem data-ref="coral" />,
                            <skoash.ListItem data-ref="crab" />,
                            <skoash.ListItem data-ref="turtle" />,
                            <skoash.ListItem data-ref="shell" />,
                            <skoash.ListItem data-ref="fish1" />,
                            <skoash.ListItem data-ref="fish2" />,
                            <skoash.ListItem data-ref="lobster" />,
                            <skoash.ListItem data-ref="shell2" />,
                            <skoash.ListItem data-ref="fish3" />,
                            <skoash.ListItem data-ref="starfish" />,
                            <skoash.ListItem data-ref="starfish" className="second" />,
                            <skoash.ListItem data-ref="octopus" />,
                            <skoash.ListItem data-ref="shell3" />,
                            <skoash.ListItem data-ref="seahorse" />,
                            <skoash.ListItem data-ref="fish4" />,
                            <skoash.ListItem data-ref="fish5" />,
                            <skoash.ListItem data-ref="jellyfish" />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </TrashScreenComponent>
    );
}
