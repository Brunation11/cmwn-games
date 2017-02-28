import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-which-hand"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-21-1.mp3`} />
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-21.1.png`}
                />
                <SelectableReveal
                    ref="selectable-reveal"
                    answers={['right']}
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
                        <skoash.ListItem className="left animated" data-ref="left" />,
                        <skoash.ListItem className="right animated" data-ref="right" />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
