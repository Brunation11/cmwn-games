export default function (props, ref, key) {

    const WAYS = [
        'dishes',
        'teeth',
        'plants',
        'clothes',
        'lukewarm',
        'cooler',
        'trash',
        'car',
    ];

    var openReveal = function () {
        var index = _.get(props, 'data.reveal.index', -1);
        if (!_.isFinite(index) || index > 7) index = -1;
        this.updateScreenData({
            key: 'reveal',
            data: {
                index: index + 1
            }
        });
    };

    var closeReveal = function () {
        this.updateScreenData({
            key: 'reveal',
            data: {
                close: true
            },
        });

        updateMeterHeight.call(this);
    };

    var updateMeterHeight = function () {
        var complete = false;
        var height = _.get(props, 'data.meter.height', 0);

        if (!_.isFinite(height) || height >= 7) {
            height = 7;
            complete = true;
        }

        this.updateScreenData({
            key: 'meter',
            data: {
                height: height + 1,
                complete,
            },
        });

    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="conserve"
            className={_.get(props, 'data.selectable.target') ? 'SELECTING' : null}
        >
            <skoash.Image src={`${MEDIA.IMAGE}img_15.1.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.IMAGE}FR_4.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}img_sp_15.1.png`} />
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}img_15.3.png`} />
            <div
                id="door-sprite"
                className={
                    (_.get(props, 'data.reveal.open.length', -1) > 0) ? 'open' : ''
                }
            />
            <skoash.Component id="meter-sprite">
                {[...Array(WAYS.length + 1)].map((value, index) => {
                    return (
                        <skoash.Component
                            className={_.get(props, 'data.meter.height', -1) === index ? 'visible' : ''}
                            key={index}
                        />
                    );
                })}
            </skoash.Component>
            <skoash.MediaCollection
                play={_.get(props, 'data.meter.complete', false) ? 'meter-complete' : ''}
            >
                <skoash.Audio
                    type="sfx"
                    data-ref="meter-complete"
                    src={`${MEDIA.EFFECT}Harmonica.mp3`}
                />
            </skoash.MediaCollection>
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}WaysConserve.mp3`} />
            <skoash.Selectable
                ref="selectable"
                list={[
                    <li
                        id="door"
                        className={
                            (_.get(props, 'data.reveal.open.length', -1) > 0) ? 'open' : ''
                        }
                    />
                ]}
                dataTarget="selectable"
                onSelect={openReveal}
            />
            <skoash.MediaCollection
                play={WAYS[_.get(props, 'data.reveal.index', null)] + ' ' + _}
            >
                {WAYS.map((value) => {
                    return (
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            data-ref={value}
                            src={`${MEDIA.VO}Ways${_.upperFirst(value)}.mp3`}
                        />
                    );
                })}
            </skoash.MediaCollection>
            <skoash.Component ref="frame" className="frame animated">
                <skoash.Reveal
                    ref="reveal"
                    openTarget="reveal"
                    openReveal={WAYS[_.get(props, 'data.reveal.index', null)]}
                    closeReveal={_.get(props, 'data.reveal.close')}
                    list={[
                        <skoash.ListItem data-ref={WAYS[0]}>
                            <p>
                                Don't let the water<br />
                                run while<br />
                                washing dishes.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[1]}>
                            <p>
                                Don't let the water<br />
                                run continuously while<br />
                                brushing your teeth.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[2]}>
                            <p>
                                Use leftover water from<br />
                                the melted ice in your<br />
                                glass to water your plants.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[3]}>
                            <p>
                                Only wash full loads<br />
                                of clothes.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[4]}>
                            <p>
                                Use lukewarm water.<br /><br />
                                Don't let it<br />
                                run to warm up.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[5]}>
                            <p>
                                Collect rain water in<br />
                                a bucket for plants or<br />
                                cleaning or even flushing.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[6]}>
                            <p>
                                Throw trash in<br />
                                a waste basket.<br /><br />
                                Don't flush it.
                            </p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={WAYS[7]}>
                            <p>
                                Wash the car in the grass<br />
                                instead of the driveway.
                            </p>
                        </skoash.ListItem>,
                    ]}
                    assets={[
                        <skoash.Audio
                            data-ref="open-sound"
                            type="sfx"
                            src={`${MEDIA.EFFECT}RevealOpen.mp3`}
                        />,
                        <skoash.Audio
                            data-ref="close-sound"
                            type="sfx"
                            src={`${MEDIA.EFFECT}RevealClosed.mp3`}
                            delay={500}
                        />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
