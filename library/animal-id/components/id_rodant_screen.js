import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-rodant"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_5-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_4.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['chipmunk']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem className="kangaroo animated" />,
                    <skoash.ListItem className="cow animated" />,
                    <skoash.ListItem className="falcon animated" />,
                    <skoash.ListItem data-ref="chipmunk" className="chipmunk animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="chipmunk">
                        <h3>Rodents gnaw and have long incisor<br/>teeth that never stop growing.</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="chipmunk" type="voiceOver" src="media/audio/VO_5-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
