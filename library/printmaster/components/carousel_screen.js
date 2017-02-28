import Target from 'shared/components/target/0.1';
import Carousel from 'shared/components/carousel/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="carousel"
        >
            <skoash.Image className="hidden cannon" src={`${CMWN.MEDIA.IMAGE}img-10-3.png`} />
            <skoash.Image className="hidden viewport" src={`${CMWN.MEDIA.IMAGE}img-10-3.png`} />
            <skoash.Image className="hidden target" src={`${CMWN.MEDIA.IMAGE}img-10-8.png`} />
            <skoash.Image className="hidden score" src={`${CMWN.MEDIA.IMAGE}img-10-9.png`} />
            <skoash.Image className="hidden reveal" src={`${CMWN.MEDIA.FRAME}fr-3.png`} />
            <skoash.Component className="group">
                <Carousel
                    className={'slide' + (_.get(props, 'data.reveal.indexToOpen', 0) === 7 ? ' disable' : '')}
                    clickable
                    delay={400}
                    targetIndex={2}
                    onSelect={function (target) {
                        this.updateScreenData({
                            key: 'attempt',
                            data: {
                                target
                            }
                        });
                    }}
                    bin={
                      <skoash.Randomizer
                        bin={[
                            <div ref="loops" message="loops"></div>,
                            <div ref="whorl" message="whorl"></div>,
                            <div ref="arch" message="arch"></div>,
                            <div ref="doubleloops" message="doubleloops"></div>,
                        ]}
                      />
                    }
                />
                <Target
                    attempt={_.get(props, 'data.attempt.target.ref', null)}
                    onUpdateState={function (correct) {
                        let data = {
                            attempt: {
                                target: null,
                            }
                        };
                        if (correct) {
                            data.score = {
                                correct: _.get(props, 'data.score.correct', 0) + 1
                            };
                        }
                        this.updateScreenData({
                            data,
                        });
                    }}
                    dataTarget="target"
                    setTarget={_.get(props, 'data.reveal.indexToOpen', 0)}
                    completeOnStart
                    checkComplete={false}
                    targets={[
                        <skoash.Image
                            name="loops"
                            amount={2}
                            targetClass="loops-2"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-11.png`}
                        />,
                        <skoash.Image
                            name="whorl"
                            amount={3}
                            targetClass="whorl-3"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-15.png`}
                        />,
                        <skoash.Image
                            name="arch"
                            amount={3}
                            targetClass="arch-3"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-18.png`}
                        />,
                        <skoash.Image
                            name="doubleloops"
                            amount={2}
                            targetClass="doubleloops-2"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-20.png`}
                        />,
                        <skoash.Image
                            name="whorl"
                            amount={2}
                            targetClass="whorl-2"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-14.png`}
                        />,
                        <skoash.Image
                            name="doubleloops"
                            amount={3}
                            targetClass="doubleloops-3"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-21.png`}
                        />,
                        <skoash.Image
                            name="arch"
                            amount={2}
                            targetClass="arch-2"
                            className="animated"
                            src={`${CMWN.MEDIA.IMAGE}img-10-17.png`}
                        />,
                    ]}
                    assets={[
                        <skoash.Audio ref="correct" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-10-3.mp3`} />,
                        <skoash.Audio ref="incorrect" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-10-4.mp3`} />
                    ]}
                />
                <skoash.Score
                    correct={_.get(props, 'data.score.correct', 0)}
                    dataTarget="score"
                    completeDelay={1000}
                    max={_.get(props, 'data.target.amount', null)}
                    completeOnStart
                    resetOnComplete
                    multipleCompletes
                    onComplete={function () {
                        this.updateScreenData({
                            data: {
                                score: {
                                    correct: 0
                                },
                                reveal: {
                                    indexToOpen: _.get(props, 'data.reveal.indexToOpen', -1) + 1
                                }
                            }
                        });
                    }}
                >
                    <div className="board">
                        <div />
                        <div />
                        <div />
                    </div>
                </skoash.Score>
            </skoash.Component>
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.Audio ref="0" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-1.mp3`} />,
                <skoash.Audio ref="1" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-5.mp3`} />,
                <skoash.Audio ref="2" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-4.mp3`} />,
                <skoash.Audio ref="3" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-6.mp3`} />,
                <skoash.Audio ref="4" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-7.mp3`} />,
                <skoash.Audio ref="5" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-8.mp3`} />,
                <skoash.Audio ref="6" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-9.mp3`} />,
                <skoash.Audio ref="7" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-10.mp3`} />,
            </skoash.MediaCollection>
            <skoash.Reveal
              openTarget="reveal"
              openReveal={_.get(props, 'data.reveal.indexToOpen')}
              list={[
                  <li>
                      <p className="typing">CLICK WHEN THE PRINT</p>
                      <p className="typing">MATCHES THE DESCRIPTION</p>
                      <p className="typing">AND GET A COOL FACT!</p>
                  </li>,
                  <li>
                      The chance of having the same<br/>
                      fingerprint as someone else<br/>
                      is 1 in 64 billion.
                  </li>,
                  <li>
                      Fingerprints are more<br/>
                      unique than DNA.
                  </li>,
                  <li>
                      Fingerprinting is part of the<br/>
                      science of biometrics which uses<br/>
                      physical characteristics<br/>
                      as identifiers.
                  </li>,
                  <li>
                      The ridges that make up<br/>
                      fingerprints are called<br/>
                      friction ridges.
                  </li>,
                  <li>
                      Your fingerprints never change.
                  </li>,
                  <li>
                      Your fingertips contain pores<br/>
                      that attach to sweat glands.<br/>
                      The sweat is what causes you<br/>
                      to leave prints on the<br/>
                      things you touch.
                  </li>,
                  <li>
                      Fingerprinting is a technique<br/>
                      know as dactyloscopy.
                  </li>,
              ]}
            />
        </skoash.Screen>
    );
}
