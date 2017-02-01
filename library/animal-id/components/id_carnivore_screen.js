import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-carnivore"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_3-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_3.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['lion']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/S_3.2.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem className="beaver animated" />,
                    <skoash.ListItem className="gorilla animated" />,
                    <skoash.ListItem data-ref="lion" className="lion animated" />,
                    <skoash.ListItem className="giraffe animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="lion">
                        <h3>A carnivore is an animal <br /> that eats only meat.</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="lion" type="voiceOver" src="media/audio/VO_3-2.mp3" delay={2000} />
                ]}
            />
        </skoash.Screen>
    );
}
