import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-why-warmer"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_22.1.mp3" />
            <skoash.Component className="frame">
                <skoash.Image ref="banner" className="banner animated" src="media/images/Img_22.1.png" />
                <SelectableReveal
                    ref="selectable-reveal"
                    answers={['oil']}
                    assets={[
                        <skoash.Audio
                            ref="correct"
                            type="sfx"
                            src="media/audio/answer-correct.mp3"
                        />,
                        <skoash.Audio
                            ref="incorrect"
                            type="sfx"
                            src="media/audio/answer-incorrect.mp3"
                            complete
                        />
                    ]}
                    selectableList={[
                        <skoash.ListItem className="oil animated" data-ref="oil" />,
                        <skoash.ListItem className="bag animated" data-ref="bag" />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
