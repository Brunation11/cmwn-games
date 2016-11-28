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
            <skoash.Audio
                ref="intro"
                type="voiceOver"
                src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/MeetTeam.mp3`}
            />

            <skoash.Component className="header">
                <span>
                    Meet the "Safety First" K-9 Team<br />by clicking or tapping on the images below.
                </span>
            </skoash.Component>

            <MediaCollection
                play={_.get(props, 'data.reveal.open') ? 'correct' : ''}
                onPlay={function () {
                    this.play(_.get(props, 'data.reveal.open'));
                }}
            >
                {
                // <skoash.Audio
                    // ref="correct"
                    // type="sfx"
                    // src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/DarkBark.mp3`}
                // />
                }
                <skoash.MediaSequence
                    ref={answers[0]}
                    silentOnStart
                >
                    <skoash.Audio
                        ref={`${answers[0]}-vo`}
                        type="voiceOver"
                        src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/Barkley.mp3`}
                    />
                    <skoash.Audio
                        ref={`${answers[0]}-intro`}
                        type="voiceOver"
                        src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/BarkleyIntro.mp3`}
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
                        src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/Shepherd.mp3`}
                    />
                    <skoash.Audio
                        ref={`${answers[1]}-intro`}
                        type="voiceOver"
                        src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/ShepherdIntro.mp3`}
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
                        src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/Wolf.mp3`}
                    />
                    <skoash.Audio
                        ref={`${answers[2]}-intro`}
                        type="voiceOver"
                        src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/WolfIntro.mp3`}
                        startDelay={1000}
                    />
                </skoash.MediaSequence>
            </MediaCollection>

            <Selectable
                selectClass="HIGHLIGHTED"
                selectRespond={function (target) {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: target
                        }
                    });
                }}
                list={[
                    <skoash.ListItem data-ref={answers[0]} className={answers[0]}>
                        <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/officer.${answers[0]}.png`} />
                    </skoash.ListItem>,
                    <skoash.ListItem data-ref={answers[1]} className={answers[1]}>
                        <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/officer.${answers[1]}.png`} />
                    </skoash.ListItem>,
                    <skoash.ListItem data-ref={answers[2]} className={answers[2]}>
                        <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/officer.${answers[2]}.png`} />
                    </skoash.ListItem>
                ]}
            />

            <RevealPrompt
                ref="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component className={answers[0]} ref={answers[0]}>
                        <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/officer.${answers[0]}.png`} />
                        <skoash.Component className="frame">
                            <span>
                                I'll show you who you should<br />
                                and shouldn't let into your house<br />
                                when you're alone!
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component className={answers[1]} ref={answers[1]}>
                        <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/officer.${answers[1]}.png`} />
                        <skoash.Component className="frame">
                            <span>
                                Police officers care about your safety!<br />
                                Us K-9's will teach you some things<br />
                                that will help keep you safe.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component className={answers[2]} ref={answers[2]}>
                        <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/officer.${answers[2]}.png`} />
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
