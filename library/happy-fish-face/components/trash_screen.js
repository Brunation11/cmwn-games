import ClassNames from 'classnames';

import MediaCollection from 'shared/components/media_collection/0.1';
import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';
import Timer from 'shared/components/timer/0.1';
import CustomCursorScreen from 'shared/components/custom_cursor_screen/0.1';

const TRY_AGAIN = '0';
const GOOD_JOB = '1';

class TrashScreenComponent extends skoash.Screen {
    constructor() {
        super();

        this.state = {
            cursorLeft: 0,
            cursorTop: 0,
            touchstart: false,
            revealOpen: false,
        };
    }

    start() {
        super.start();

        this.checkComplete = super.checkComplete; // for replay
    }

    goto(index, buttonSound) {
        super.goto(index, buttonSound);

        this.refs.timer.restart();
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.moveCursor);
        window.removeEventListener('touchstart', this.touchstart);
    }

    complete() {
        var self = this;
        super.complete();
        self.checkComplete = () => {};
    // so it won't try to complete while incompleting all the refs

        if (!this.state.replay) this.setState({ replay: true });

        setTimeout(() => { // have to wait for state to change to complete: true
            if (self.state.complete) {
                self.incomplete();
                ['timer', 'reveal', 'selectable-audio'].forEach(key => {
                    self.refs[key].incompleteRefs();
                });
            }
        }, 500);
    }

    onSelectableAudioComplete() {
        if (!this.state.revealOpen) {
            this.setState({
                revealOpen: true,
            }, () => {
                this.refs['center-2'].open();
                this.refs.reveal.open(GOOD_JOB);
                this.refs.timer.complete();
                this.refs.timer.stop();
            });
        }
    }

    onTimerComplete() {
        if (!this.state.revealOpen) {
            this.refs['center-2'].open();
            this.refs.reveal.open(TRY_AGAIN);
            this.setState({ revealOpen: true });
        }
    }

    closeRespond(ref) {
        this.setState({ revealOpen: false });
        this.refs['center-2'].close();
        if (ref === TRY_AGAIN) {
            this.refs.timer.restart();
            this.refs['selectable-audio'].start();
            this.refs['selectable-audio'].incompleteRefs();
        }
    }

    getClassNames() {
        return ClassNames({
            'REVEAL-OPEN': this.state.revealOpen,
        }, super.getClassNames());
    }
}

export default function (props, ref, key) {
    return (
        <CustomCursorScreen
            {...props}
            ref={ref}
            key={key}
            id="trash"
        >
            <MediaCollection
                ref="collection"
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
            <skoash.Component ref="center-1" className="center">
                <skoash.Component ref="group" className="group">
                    <skoash.Component ref="center-2" className="center">
                        <Reveal
                            ref="reveal"
                            className="center"
                            closeRespond={_.noop}
                            list={[
                                <skoash.Component type="li" data-ref="tryAgain" complete>
                                    <skoash.Image src="media/_images/_S_GoodJob/img_10.2.png" />
                                    <p>
                                        You ran out of time!
                                    </p>
                                </skoash.Component>,
                                <skoash.Component type="li" data-ref="goodJob">
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
                                <skoash.MediaSequence ref="media-sequence" silentOnStart>
                                    <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_GoodJob.mp3" />
                                    <skoash.Audio type="voiceOver" src="media/_audio/_S_GoodJob/HFF_VO_NeverThrow.mp3" />
                                </skoash.MediaSequence>,
                            ]}
                        />
                    </skoash.Component>
                    <Timer
                        ref="timer"
                        countDown={true}
                        timeout={90000}
                        leadingContent={<skoash.Image src="media/_images/_S_Trash/img_9.1.png" />}
                        onComplete={_.noop}
                    />
                    <Selectable
                        ref="selectable"
                        selectClass="HIGHLIGHTED"
                        onComplete={_.noop}
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
        </CustomCursorScreen>
    );
}
