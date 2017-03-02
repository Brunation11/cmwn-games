import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-discover"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-24-4.mp3`} />
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-24-1.png`}
                />
                <SelectableReveal
                    ref="selectable-reveal"
                    selectableSelectClass="HIGHLIGHTED"
                    allCorrect
                    assets={[
                        <skoash.Audio
                            ref="correct"
                            type="sfx"
                            src={`${CMWN.MEDIA.EFFECT}answer-correct.mp3`}
                        />
                    ]}
                    selectableList={[
                        <skoash.ListItem className="feet animated" data-ref="feet">
                        <h3>Fur between<br />pads keep<br />feet warm</h3>
                      </skoash.ListItem>,
                        <skoash.ListItem className="ears animated" data-ref="ears">
                        <h3>Small ears<br />prevent<br />heat loss</h3>
                      </skoash.ListItem>,
                        <skoash.ListItem className="coat animated" data-ref="coat">
                        <h3>Wooly undercoat<br />traps<br />body heat</h3>
                      </skoash.ListItem>
                    ]}
                    revealAssets={[
                        <skoash.Audio
                            ref="feet"
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}feet.mp3`}
                            delay={1000}
                        />,
                        <skoash.Audio
                            ref="ears"
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}ears.mp3`}
                            delay={1000}
                        />,
                        <skoash.Audio
                            ref="coat"
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}coat.mp3`}
                            delay={1000}
                        />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
