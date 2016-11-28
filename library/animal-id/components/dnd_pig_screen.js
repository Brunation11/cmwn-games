import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-pig"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="pig" answers={['pig']} className="pig animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem
                        ref="mouse"
                        className="mouse animated"
                        message="mouse"
                        return
                    />,
                    <skoash.ListItem
                        ref="hedgehog"
                        className="hedgehog animated"
                        message="hedgehog"
                        return
                    />,
                    <skoash.ListItem
                        ref="pig"
                        className="pig animated"
                        message="pig"
                        return
                    />
                ]}
                revealList={[
                    <skoash.ListItem ref="pig">
                        <h3>
                            Pigs are one of the<br />
                            smartest animals on earth.<br />
                            They are extremely social and<br />
                            form close friendships with<br />
                            each other.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="pig" type="voiceOver" src="media/audio/VO_22-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
