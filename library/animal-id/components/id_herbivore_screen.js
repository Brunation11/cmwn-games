import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-herbivore"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_10-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_10.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['deer']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem data-ref="deer" className="deer animated" />,
                    <skoash.ListItem className="possum animated" />,
                    <skoash.ListItem className="tiger animated" />,
                    <skoash.ListItem className="skunk animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="deer">
                        <h3>An herbivore is an animal<br/>that eats only plants.</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="deer" type="voiceOver" src="media/audio/VO_10-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
