import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-dragon"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="dragon" answers={['dragon']} className="elephant animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem ref="dragon" className="dragon animated" message="dragon" return />,
                    <skoash.ListItem ref="turtle" className="turtle animated" message="turtle" return />,
                    <skoash.ListItem ref="snake" className="snake animated" message="snake" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="dragon">
                        <h3>The Komodo dragon<br/> is the largest living lizard<br/> in the world!</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="dragon" type="voiceOver" src="media/audio/VO_21-1.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
