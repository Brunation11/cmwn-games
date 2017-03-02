import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-how-warmer"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-23-1.mp3`} />
            <skoash.Component className="frame">
                <h3>Polar Bears have a layer of fat<br />under their skin<br/>that is 4 inches thick.</h3>
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-23-1.png`}
                />
                <SelectableReveal
                    ref="selectable-reveal"
                    answers={['warm']}
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
                        <skoash.ListItem className="cold animated" data-ref="cold" />,
                        <skoash.ListItem className="warm animated" data-ref="warm" />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
