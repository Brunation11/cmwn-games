import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-lion"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="lion" answers={['lion']} className="lion animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem ref="lion" className="lion animated" message="lion" return />,
                    <skoash.ListItem ref="tiger" className="tiger animated" message="tiger" return />,
                    <skoash.ListItem ref="cat" className="cat animated" message="cat" return />
                ]}
                revealList={[
                    <skoash.ListItem ref="lion">
                        <h3>
                            African lions live together in<br />
                            groups called “prides” and are<br />
                            the most social of<br />
                            all the big cats.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="lion" type="voiceOver" src="media/audio/VO_17-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
