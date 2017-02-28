import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="choose-what-color"
        >
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src={`${CMWN.MEDIA.IMAGE}img-6-1.png`} />
                <SelectableReveal
                    ref="selectable-reveal"
                    revealAll
                    answers={['clear']}
                    assets={[
                        <skoash.Audio
                            ref="correct"
                            type="sfx"
                            src={`${CMWN.MEDIA.EFFECT}answer-correct.mp3`}
                        />,
                        <skoash.Audio
                            ref="incorrect"
                            type="sfx"
                            src={`${CMWN.MEDIA.EFFECT}answer-incorrect.mp3`}
                            complete
                        />
                    ]}
                    selectableList={[
                        <skoash.ListItem className="white animated" data-ref="white">
                            <p><strong>White</strong></p>
                        </skoash.ListItem>,
                        <skoash.ListItem className="plaid animated" data-ref="plaid">
                            <p><strong>Plaid</strong></p>
                        </skoash.ListItem>,
                        <skoash.ListItem className="clear animated" data-ref="clear">
                            <p><strong>Clear</strong></p>
                        </skoash.ListItem>
                    ]}
                    revealAssets={[
                        <skoash.Audio
                            ref="clear"
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}clear.mp3`}
                            delay={500}
                        />,
                        <skoash.Audio
                            ref="plaid"
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}plaid.mp3`}
                            delay={500}
                            complete
                        />,
                        <skoash.Audio
                            ref="white"
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}white.mp3`}
                            delay={500}
                            complete
                        />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
