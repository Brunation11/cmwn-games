import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-mollusk"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_8-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_8.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['clam']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem className="octopus animated" />,
                    <skoash.ListItem data-ref="clam" className="clam animated" />,
                    <skoash.ListItem className="stingray animated" />,
                    <skoash.ListItem className="scorpian animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="clam">
                        <h3>
                            A mollusk is an invertebrate<br/>
                            animal (no spine) that lives in water<br/>
                            or damp areas and usually has<br/>
                            an external shell.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="clam" type="voiceOver" src="media/audio/VO_8-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
