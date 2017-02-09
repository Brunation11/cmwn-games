import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import Selectable from 'shared/components/selectable/0.1';

import classNames from 'classnames';
import _ from 'lodash';

export default function (props, ref, key, opts = {}) {
    var sfxOnComplete;
    var selectRespond;
    var screenComplete;

    sfxOnComplete = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: opts.id
            }
        });
    };

    selectRespond = function (target) {
        if (_.get(props, 'data.sfx') === target) return;
        this.updateGameState({
            path: 'sfx',
            data: target
        });
    };

    screenComplete = function () {
        this.updateGameState({
            path: 'game',
            data: {
                complete: true
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`whos-at-the-door-${opts.id}`}
            complete={_.get(props, 'data.game.complete')}
        >
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.dogsinframes.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.h1.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}bkg.dooropened.jpg`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.IMAGE}frame.roundedrec.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${MEDIA.SPRITE}sprites.yesno.png`}
            />

            <skoash.MediaSequence>
                <skoash.Audio
                    ref="intro"
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}Doorbell.mp3`}
                />
                <skoash.Audio
                    ref="intro"
                    type="voiceOver"
                    src={`${MEDIA.VO}WhosAtDoor.mp3`}
                    onComplete={function () {
                        this.updateGameState({
                            path: 'game',
                            data: {
                                label: true
                            }
                        });
                    }}
                />
                <skoash.Audio
                    ref="intro"
                    type="voiceOver"
                    src={`${MEDIA.VO}${opts.label}.mp3`}
                />
            </skoash.MediaSequence>

            <skoash.Component className={`frame ${opts.id}`}>
                <span className={classNames({label: _.get(props, 'data.game.label')})}>
                    {opts.header}
                </span>
            </skoash.Component>

            <skoash.Component className="banner" />

            <MediaCollection
                play={_.get(props, 'data.sfx')}
            >
                <skoash.Audio
                    ref="yes"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Yes.mp3`}
                    onComplete={function () {
                        sfxOnComplete.call(this);
                    }}
                />
                <skoash.Audio
                    ref="no"
                    type="sfx"
                    src={`${MEDIA.EFFECT}No.mp3`}
                    onComplete={function () {
                        sfxOnComplete.call(this);
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
                <skoash.Audio
                    ref={opts.id}
                    type="voiceOver"
                    src={`${MEDIA.VO}${opts.vo}.mp3`}
                    onComplete={function () {
                        screenComplete.call(this);
                    }}
                />
            </MediaCollection>

            <Selectable
                ref="selectable"
                selectClass="HIGHLIGHTED"
                selectRespond={function (target) {
                    selectRespond.call(this, target);
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
                            <span className="label">
                                {opts.header}
                            </span>
                        </skoash.Component>
                        <skoash.Component className="prompt">
                            <span className="copy">
                                {opts.copy}
                            </span>
                        </skoash.Component>
                        <skoash.Image
                            className="barklines"
                            src={`${MEDIA.IMAGE}barkley.barklines.png`}
                        />
                        <skoash.Image
                            src={`${MEDIA.IMAGE}barkley.fullbody.png`}
                        />
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
