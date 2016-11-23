import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-mule"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="mule" answers={['mule']} className="mule animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem
                        ref="capibara"
                        className="capibara animated"
                        message="capibara"
                        return
                    />,
                    <skoash.ListItem
                        ref="goat"
                        className="goat animated"
                        message="goat"
                        return
                    />,
                    <skoash.ListItem
                        ref="mule"
                        className="mule animated"
                        message="mule"
                        return
                    />
                ]}
                revealList={[
                    <skoash.ListItem ref="mule">
                        <h3>
                            A mule is the offspring of a<br/>
                            male donkey and a female horse.<br/>
                            The mule cannot reproduce.
                        </h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="mule" type="voiceOver" src="media/audio/VO_24-2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
