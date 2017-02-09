import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Selectable from 'shared/components/selectable/0.1';

export default function (props, ref, key) {
    var answers = ['barkley', 'shepherd', 'wolf'];

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="meet-the-team"
        >
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.labels.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}officer.barkley.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}officer.shepherd.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}officer.wolf.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.slider.jpg`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.profile.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}bkg.3.jpg`}
            />

            <skoash.Audio
                ref="intro"
                type="voiceOver"
                src={`${MEDIA.VO}MeetTeam.mp3`}
            />

            <skoash.Component className="header">
                <span>
                    Meet the "Safety First" K-9 Team<br />by clicking or tapping on the images below.
                </span>
            </skoash.Component>

            <MediaCollection
                play={_.get(props, 'data.sfx')}
                onPlay={function () {
                    this.updateGameState({
                        path: 'sfx',
                        data: ''
                    });
                }}
            >
                <skoash.Audio
                    ref="correct"
                    type="sfx"
                    src={`${MEDIA.EFFECT}DogBark.mp3`}
                    onComplete={function () {
                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                open: _.get(props, 'data.selectable.target')
                            }
                        });
                    }}
                />
            </MediaCollection>


            <MediaCollection
                play={_.get(props, 'data.reveal.open')}
                onPlay={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: ''
                        }
                    });
                }}
            >
                <skoash.MediaSequence
                    ref={answers[0]}
                    silentOnStart
                >
                    <skoash.Audio
                        ref={`${answers[0]}-vo`}
                        type="voiceOver"
                        src={`${MEDIA.VO}Barkley.mp3`}
                    />
                    <skoash.Audio
                        ref={`${answers[0]}-intro`}
                        type="voiceOver"
                        src={`${MEDIA.VO}BarkleyIntro.mp3`}
                        startDelay={1000}
                    />
                </skoash.MediaSequence>
                <skoash.MediaSequence
                    ref={answers[1]}
                    silentOnStart
                >
                    <skoash.Audio
                        ref={`${answers[1]}-vo`}
                        type="voiceOver"
                        src={`${MEDIA.VO}Shepherd.mp3`}
                    />
                    <skoash.Audio
                        ref={`${answers[1]}-intro`}
                        type="voiceOver"
                        src={`${MEDIA.VO}ShepherdIntro.mp3`}
                        startDelay={1000}
                    />
                </skoash.MediaSequence>
                <skoash.MediaSequence
                    ref={answers[2]}
                    silentOnStart
                >
                    <skoash.Audio
                        ref={`${answers[2]}-vo`}
                        type="voiceOver"
                        src={`${MEDIA.VO}Wolf.mp3`}
                    />
                    <skoash.Audio
                        ref={`${answers[2]}-intro`}
                        type="voiceOver"
                        src={`${MEDIA.VO}WolfIntro.mp3`}
                        startDelay={1000}
                    />
                </skoash.MediaSequence>
            </MediaCollection>

            <Selectable
                selectClass="HIGHLIGHTED"
                selectRespond={function (target) {
                    this.updateGameState({
                        path: 'sfx',
                        data: 'correct'
                    });
                    this.updateGameState({
                        path: 'selectable',
                        data: {
                            target: target
                        }
                    });
                }}
                list={[
                    <skoash.ListItem data-ref={answers[0]} className={answers[0]}>
                        <skoash.Image src={`${MEDIA.IMAGE}officer.${answers[0]}.png`} />
                    </skoash.ListItem>,
                    <skoash.ListItem data-ref={answers[1]} className={answers[1]}>
                        <skoash.Image src={`${MEDIA.IMAGE}officer.${answers[1]}.png`} />
                    </skoash.ListItem>,
                    <skoash.ListItem data-ref={answers[2]} className={answers[2]}>
                        <skoash.Image src={`${MEDIA.IMAGE}officer.${answers[2]}.png`} />
                    </skoash.ListItem>
                ]}
            />

            <RevealPrompt
                ref="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component ref={answers[0]}>
                        <skoash.Component className="bkg-reveal" />
                        <skoash.Component className={answers[0]}>
                            <skoash.Image src={`${MEDIA.IMAGE}officer.${answers[0]}.png`} />
                        </skoash.Component>
                        <skoash.Component className="frame">
                            <span>
                                I'll show you who you should<br />
                                and shouldn't let into your house<br />
                                when you're alone!
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component ref={answers[1]}>
                        <skoash.Component className="bkg-reveal" />
                        <skoash.Component className={answers[1]}>
                            <skoash.Image src={`${MEDIA.IMAGE}officer.${answers[1]}.png`} />
                        </skoash.Component>
                        <skoash.Component className="frame">
                            <span>
                                Police officers care about your safety!<br />
                                Us K-9's will teach you some things<br />
                                that will help keep you safe.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component ref={answers[2]}>
                        <skoash.Component className="bkg-reveal" />
                        <skoash.Component className={answers[2]}>
                            <skoash.Image src={`${MEDIA.IMAGE}officer.${answers[2]}.png`} />
                        </skoash.Component>
                        <skoash.Component className="frame">
                            <span>
                                I'll give you safety tips for both<br />
                                on your way to school or just<br />
                                hanging out at home!
                            </span>
                        </skoash.Component>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
