import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="what-does-a-nose"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_15-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_15.1.png" />
            <skoash.Component>
                <h3>Touch each nose.</h3>
            </skoash.Component>
            <SelectableReveal
                ref="selectable-reveal"
                selectableSelectClass="HIGHLIGHTED"
                allCorrect
                selectableCheckComplete
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/S_15.1.mp3" />
                ]}
                selectableList={[
                    <skoash.ListItem data-ref="human" className="human flip-container vertical animated">
                        <skoash.Component className="flipper">
                            <skoash.Component className="animated front" />
                            <skoash.Component className="animated back" />
                        </skoash.Component>
                    </skoash.ListItem>,
                    <skoash.ListItem data-ref="rabbit" className="rabbit flip-container vertical animated">
                        <skoash.Component className="flipper">
                            <skoash.Component className="animated front" />
                            <skoash.Component className="animated back" />
                        </skoash.Component>
                    </skoash.ListItem>,
                    <skoash.ListItem data-ref="rhino" className="rhino flip-container vertical animated">
                        <skoash.Component className="flipper">
                            <skoash.Component className="animated front" />
                            <skoash.Component className="animated back" />
                        </skoash.Component>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="human" type="voiceOver" src="media/audio/VO_15-2.mp3" />,
                    <skoash.Audio ref="rabbit" type="voiceOver" src="media/audio/VO_15-3.mp3" />,
                    <skoash.Audio ref="rhino" type="voiceOver" src="media/audio/VO_15-4.mp3" />,
                ]}
            />
        </skoash.Screen>
    );
}
