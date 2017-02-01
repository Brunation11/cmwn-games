import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-mammal"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_7-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_7.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['dolphin']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/S_7.4.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem className="snake animated" />,
                    <skoash.ListItem className="pelican animated" />,
                    <skoash.ListItem className="dragon animated" />,
                    <skoash.ListItem data-ref="dolphin" className="dolphin animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="dolphin">
                        <h3>
                            A mammal feeds milk to its young<br/>
                            and is a warm blooded<br/>
                            vertebrate (with a spine).
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="dolphin" type="voiceOver" src="media/audio/VO_7-2.mp3" delay={2000} />
                ]}
            />
        </skoash.Screen>
    );
}
