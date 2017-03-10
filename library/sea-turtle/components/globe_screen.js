import _ from 'lodash';

import DropzoneReveal from 'shared/components/dropzone_reveal/0.1';
import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';
import Draggable from 'shared/components/draggable/0.1';

const OPEN_ON_START = 10;
const CORRECT = 11;

class GlobeScreenComponent extends skoash.Screen {
    open() {
        super.open();

        this.refs['dropzone-reveal'].incompleteRefs();
    }
}

export default function (props, ref, key) {
    var closeReveal = function (close, callback) {
        if (!Number.isInteger(close)) close = true;

        skoash.trigger('updateState', {
            path: 'reveal',
            data: {
                open: '',
                close,
            },
            callback,
        });
    };

    var openReveal = function (path, open, callback) {
        skoash.trigger('updateState', {
            path,
            data: {
                open,
                close: false,
            },
            callback,
        });
    };

    var selectRespond = function (answer, correctAnswer) {
        var incorrectAudio;
        if (answer === correctAnswer) {
            openReveal('reveal', CORRECT, () => {
                setTimeout(() => {
                    closeReveal(2);
                }, 1000);
            });
        } else {
            // need 2 incorrect audios, so that each incorrect select is distinct
            incorrectAudio = 'incorrect-';
            incorrectAudio += answer > 0 ? '' + answer : '' + correctAnswer; // 1 or 2
            openReveal('reveal', incorrectAudio, () => {
                setTimeout(() => {
                    closeReveal();
                }, 1000);
            });
        }
    };

    return (
        <GlobeScreenComponent
          {...props}
          ref={ref}
          key={key}
          id="globe"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                onComplete={openReveal.bind(undefined, 'final-reveal', 'well-done')}
                dropzoneDraggables={[
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                    <Draggable className="animated" />,
                ]}
                dropzones={[
                    <skoash.Component answers={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}>
                        <skoash.Component className="area">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </skoash.Component>
                    </skoash.Component>,
                ]}
                openOnStart={OPEN_ON_START}
                openReveal={_.get(props, 'data.reveal.open', null)}
                closeReveal={_.get(props, 'data.reveal.close', null)}
                revealList={[
                    <skoash.Component type="li">
                        <h3>Where do Sea Turtles<br />go to nest?</h3>
                        <Selectable
                            list={[
                                <skoash.ListItem><h4>Up a tree</h4></skoash.ListItem>,
                                <skoash.ListItem><h4>To a terrarium</h4></skoash.ListItem>,
                                <skoash.ListItem correct><h4>To their place of birth</h4></skoash.ListItem>,
                            ]}
                            selectRespond={_.bind(selectRespond, undefined, _, '2')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>How many Sea Turtles<br />make it to adulthood?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>1 in 100</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>1 in 1,000</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>Most of them</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '1')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>Can Sea Turtles pull their head and flippers into their shells?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>Yes</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>No</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>It depends on how scared they are</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '1')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>What kind of Sea Turtle<br />can dive to 1,000 feet</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>Green</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>Hawksbill</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>Leatherbacks</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '2')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>How long can a Green Sea Turtle stay underwater?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem correct><h4>5 hours</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>35 minutes</h4></skoash.ListItem>,
                              <skoash.ListItem>
                                  <h4>
                                      Long enough to sing the score of La Traviata
                                  </h4>
                              </skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '0')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>The ocean is salty! Where do Sea Turtles get water?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem correct><h4>From their food</h4></skoash.ListItem>,
                              <skoash.ListItem>
                                  <h4>
                                      From fresh water springs on the ocean floor
                                  </h4>
                              </skoash.ListItem>,
                              <skoash.ListItem><h4>From a nearby tap</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '0')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>If a Sea Turtle looks like he’s crying, what’s really happening?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>Found out he didn’t make the team</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>Shedding excess salt</h4></skoash.ListItem>,
                              <skoash.ListItem>
                                  <h4>
                                      Just saw Selena Gomez and is overwhelmed with emotion
                                  </h4>
                              </skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '1')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>How many years have Sea Turtles been on earth?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>100,000 years</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>Over 150 Million years</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>Since Tuesday</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '1')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>What one ocean<br />does NOT have Sea Turtles?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>Mediterranean</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>Arctic Ocean</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>The Caspian Sea</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '1')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li">
                        <h3>Why do Sea Turtles<br />come onto land?</h3>
                        <Selectable
                          list={[
                              <skoash.ListItem><h4>To get some sun</h4></skoash.ListItem>,
                              <skoash.ListItem correct><h4>To lay eggs</h4></skoash.ListItem>,
                              <skoash.ListItem><h4>Circus work</h4></skoash.ListItem>,
                          ]}
                          selectRespond={_.bind(selectRespond, undefined, _, '1')}
                        />
                    </skoash.Component>,
                    <skoash.Component type="li" id="open-on-start" className="center">
                        <h3>
                            Click and drag icons into<br />
                            the globe to get a question!<br />
                            Answer correctly to<br />
                            fill the globe.
                        </h3>
                    </skoash.Component>,
                    <skoash.Component type="li" id="correct" />,
                    <skoash.Component
                        type="li"
                        ref="instructions"
                        id="instruction"
                        className="center OPEN"
                    >
                        <h3>Keep filling the globe!</h3>
                    </skoash.Component>,
                ]}
                revealAssets={[
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-2.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-3.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-4.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-5.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-6.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-7.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-8.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-9.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-10.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-11.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-1.mp3`}
                        onComplete={closeReveal} />,
                    <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}so-right.mp3`} />,
                    <skoash.Audio
                        type="sfx"
                        ref="incorrect-1"
                        complete
                        src={`${CMWN.MEDIA.EFFECT}so-wrong.mp3`}
                    />,
                    <skoash.Audio
                        type="sfx"
                        ref="incorrect-2"
                        complete
                        src={`${CMWN.MEDIA.EFFECT}so-wrong.mp3`}
                    />,
                    <skoash.Image
                        className="background"
                        src={`${CMWN.MEDIA.FRAME}background-reveal.png`}
                        checkComplete={false}
                        completeOnStart
                    />,
                ]}
            />
            <Reveal
                openReveal={_.get(props, 'data[\'final-reveal\'].open', null)}
                list={[
                    <skoash.Component type="li" ref="well-done" id="well-done" className="center">
                    <div className="group" align="center">
                        <h3>
                            Great job! Now let’s take a look at<br />
                            Sea Turtle risks!
                        </h3>
                    </div>
                  </skoash.Component>,
                ]}
                assets={[
                    <skoash.Audio type="voiceOver" ref="well-done" src={`${CMWN.MEDIA.VO}vo-4-12.mp3`} />,
                    <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}background-reveal.png`} />,
                ]}
            />
        </GlobeScreenComponent>
    );
}
