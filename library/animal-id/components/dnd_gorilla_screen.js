import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-gorilla"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="gorilla" answers={['gorilla']} className="gorilla animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem ref="panda" className="panda animated" message="panda" return />,
                    <skoash.ListItem ref="gorilla" className="gorilla animated" message="gorilla" return />,
                    <skoash.ListItem ref="horse" className="horse animated" message="horse" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="gorilla">
                        <h3>
                            Gorillas are endangered.<br/>
                            Humans destroy their habitats<br/>
                            with farming and deforestation.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="gorilla" type="voiceOver" src="media/audio/VO_23-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
