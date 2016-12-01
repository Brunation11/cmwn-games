import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Selectable from 'shared/components/selectable/0.1';

export default function (props, ref, key, opts = {}) {
    var sfxOnComplete;
    var selectRespond;

    sfxOnComplete = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: _.get(props, 'data.selectable.target')
            }
        });
    };

    selectRespond = function (target) {
        this.updateGameState({
            path: 'selectable',
            data: {
                target: target
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`whos-at-the-door-${opts.id}`}
        >
            <skoash.Audio
                ref="intro"
                type="voiceOver"
                src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/WhosAtDoor.mp3`}
            />

            <skoash.Component className={`frame ${opts.id}`}>
                <span>
                    {opts.label}
                </span>
            </skoash.Component>

            <skoash.Component className="banner" />

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
                    ref="yes"
                    type="sfx"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/Yes.mp3`}
                    onComplete={sfxOnComplete}
                />
                <skoash.Audio
                    ref="no"
                    type="sfx"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/No.mp3`}
                    onComplete={sfxOnComplete}
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
                <skoash.Audio
                    ref={opts.id}
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/${opts.vo}.mp3`}
                />
            </MediaCollection>

            <Selectable
                ref="selectable"
                selectClass="HIGHLIGHTED"
                selectRespond={function (target) {
                    selectRespond(target);
                }}
                list={[
                    <skoash.ListItem data-ref="yes" className="yes-btn" />,
                    <skoash.ListItem data-ref="no" className="no-btn" />
                ]}
            />

            <RevealPrompt
                ref="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component ref={opts.id}>
                        <skoash.Component className={`frame ${opts.id}`}>
                            <span>
                                {opts.label}
                            </span>
                        </skoash.Component>
                        <skoash.Component className="prompt">
                            <span>
                                {opts.copy}
                            </span>
                            <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/barkley.fullbody.png`} />
                        </skoash.Component>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
