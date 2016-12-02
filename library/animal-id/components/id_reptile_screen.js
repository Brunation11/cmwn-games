import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-reptile"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_9-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_9.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['alligator']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem className="buzzor animated" />,
                    <skoash.ListItem data-ref="alligator" className="alligator animated" />,
                    <skoash.ListItem className="squid animated" />,
                    <skoash.ListItem className="bat animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="alligator">
                        <h3>A reptile is a cold blooded<br/>vertebrate with dry scaly skin.</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="alligator" type="voiceOver" src="media/audio/VO_9-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
