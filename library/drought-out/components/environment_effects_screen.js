export default function (props, ref, key) {
    const REVEALS = [
        'less',
        'loss',
        'erosion',
        'endangered',
        'threats',
        'unable',
    ];

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="environment-effects"
            className="bottom-frame"
        >
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}EffectsDrought.mp3`} />
            <skoash.Selectable
                ref="selectable"
                list={
                    _.map(REVEALS, (value) => {
                        return <skoash.ListItem data-ref={value} />;
                    })
                }
                selectClass="HIGHLIGHTED"
                className="scroll-selectable"
                dataTarget="selectable"
            />
            <skoash.MediaCollection
                ref="media-collection"
                play={_.get(props, 'data.media.open', null)}
            >
                <skoash.Audio
                    data-ref={REVEALS[0]}
                    type="voiceOver"
                    src={`${MEDIA.VO}EffectsLess.mp3`}
                />
                <skoash.Audio
                    data-ref={REVEALS[1]}
                    type="voiceOver"
                    src={`${MEDIA.VO}EffectsLoss.mp3`}
                />
                <skoash.Audio
                    data-ref={REVEALS[2]}
                    type="voiceOver"
                    src={`${MEDIA.VO}EffectsErosion.mp3`}
                    />
                <skoash.Audio
                    data-ref={REVEALS[3]}
                    type="voiceOver"
                    src={`${MEDIA.VO}EffectsEndangered.mp3`}
                />
                <skoash.Audio
                    data-ref={REVEALS[4]}
                    type="voiceOver"
                    src={`${MEDIA.VO}EffectsThreats.mp3`}
                />
                <skoash.Audio
                    data-ref={REVEALS[5]}
                    type="voiceOver"
                    src={`${MEDIA.VO}EffectsUnable.mp3`}
                />
            </skoash.MediaCollection>
            <skoash.Component ref="frame" className="frame animated">
                <skoash.Image src={`${MEDIA.IMAGE}img_10.7.png`} />
                <skoash.Reveal
                    ref="reveal"
                    className="scroll-reveal"
                    openTarget="media"
                    openReveal={_.get(props, 'data.selectable.target.props.data-ref')}
                    list={[
                        <skoash.ListItem data-ref={REVEALS[0]}>
                            <p>Less food and water.</p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={REVEALS[1]}>
                            <p>Loss of habitat<br /> for fish and wildlife.</p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={REVEALS[2]}>
                            <p>Erosion of soil.</p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={REVEALS[3]}>
                            <p>Endangered species<br /> could face extinction.</p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={REVEALS[4]}>
                            <p>Threats to homes and lives<br /> from forest fires.</p>
                        </skoash.ListItem>,
                        <skoash.ListItem data-ref={REVEALS[5]}>
                            <p>Unable to play in the water.</p>
                        </skoash.ListItem>,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
