import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-marsupial"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_4-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_5.1.png" />
            <SelectableReveal
                ref="selectable-reveal"
                answers={['koala']}
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
                ]}
                selectableList={[
                    <skoash.ListItem data-ref="koala" className="koala animated" />,
                    <skoash.ListItem className="beaver animated" />,
                    <skoash.ListItem className="sloth animated" />,
                    <skoash.ListItem className="ostrich animated" />
                ]}
                revealList={[
                    <skoash.ListItem data-ref="koala">
                    <h3>
                        Marsupials are mammals.<br/>
                        When they are born, they are not<br/>
                        completely developed.<br/>
                        They continue to grow<br/>
                        in their mother’s pouch.
                    </h3>
                  </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="koala" type="voiceOver" src="media/audio/VO_4-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
