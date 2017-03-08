class WhoScreenComponent extends skoash.Screen {
    open(opts) {
        super.open(opts);

        this.checkComplete = null;
        this.refs.selectable.incompleteRefs();
        this.checkComplete = super.checkComplete;
    }
}

export default function (props, ref, key) {
    const REVEAL_MSG = 0;
    const JOBS = [
        'builder',
        'plumber',
        'firefighter',
        'chef',
    ];

    var openReveal = function () {
        this.updateScreenData({
            key: 'reveal',
            data: {
                open: REVEAL_MSG,
            }
        });
    };

    var play = function (effect, callback) {
        this.updateScreenData({
            key: 'media-sfx',
            data: {
                effect,
            },
            callback,
        });
    };

    var playSFX = function () {
        var dataRef = _.get(props, 'data.selectable.target.props.data-ref', null);
        var effect;

        if (dataRef.length != null) {
            effect = dataRef === 'firefighter' ? 'correct' : 'incorrect';
            play.call(this, effect, play.bind(this, 'dummy', _.noop));
        }
    };

    return (
        <WhoScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="who"
            className={_.get(props, 'data.reveal.open', null) !== null ? 'REVEAL-OPEN' : ''}
        >
            <skoash.Audio ref="title" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-fire-breaks-out2.mp3`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}img-6-2.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}img-6-3.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}img-6-4.png`} />
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}img-6-5.png`} />
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-6-1.png`} />
            <skoash.MediaCollection
                play={_.get(props, 'data.media-sfx.effect', null)}
                onComplete={openReveal}
            >
                <skoash.Audio
                    data-ref="correct"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}s-6-2.mp3`}
                />
                <skoash.Audio
                    data-ref="incorrect"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}s-6-3.mp3`}
                    complete
                />
            </skoash.MediaCollection>
            <skoash.MediaCollection
                play={_.get(props, 'data.selectable.target.props.data-ref', null)}
                onPlay={playSFX}
            >
                <skoash.Audio
                    data-ref={JOBS[0]}
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-builder.mp3`}
                    complete
                />
                <skoash.Audio
                    data-ref={JOBS[1]}
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-plumber.mp3`}
                    complete
                />
                <skoash.Audio
                    data-ref={JOBS[2]}
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-firefighter.mp3`}
                />
                <skoash.Audio
                    data-ref={JOBS[3]}
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-chef.mp3`}
                    complete
                />
            </skoash.MediaCollection>
            <skoash.Selectable
                ref="selectable"
                dataTarget="selectable"
                list={[
                    <skoash.ListItem data-ref={JOBS[0]} className="animated" complete />,
                    <skoash.ListItem data-ref={JOBS[1]} className="animated" complete />,
                    <skoash.ListItem data-ref={JOBS[2]} className="animated" correct />,
                    <skoash.ListItem data-ref={JOBS[3]} className="animated" complete />,
                ]}
            />
            <skoash.Reveal
                ref="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                assets={[
                    <skoash.Audio
                        data-ref="open-sound"
                        type="voiceOver"
                        src={`${CMWN.MEDIA.VO}vo-firefighting-tough.mp3`}
                    />
                ]}
                list={[
                    <skoash.Component className="frame">
                        <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-6-7.png`} />
                        <div className="animated">
                            <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
                            Firefighting is one of the<br />
                            toughest jobs in the world<br />
                            and demands total teamwork.
                        </div>
                    </skoash.Component>
                ]}
            />
        </WhoScreenComponent>
    );
}
