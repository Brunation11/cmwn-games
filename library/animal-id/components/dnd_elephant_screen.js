import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-elephant"
        >
            <DropzoneReveal
                ref="dropzone-reveal"
                dropzoneAssets={[
                    <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                    <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                    <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
                ]}
                dropzones={[
                    <skoash.ListItem ref="elephant" answers={['elephant']} className="elephant animated" />
                ]}
                dropzoneList={[
                    <skoash.ListItem
                        ref="sloth"
                        className="sloth animated"
                        message="sloth"
                        return
                    />,
                    <skoash.ListItem
                        ref="ant-eater"
                        className="ant-eater animated"
                        message="ant-eater"
                        return
                    />,
                    <skoash.ListItem
                        ref="elephant"
                        className="elephant animated"
                        message="elephant"
                        return
                    />
                ]}
                revealList={[
                    <skoash.ListItem ref="elephant">
                        <h3>Elephants are the biggest<br/> land mammals on earth!</h3>
                    </skoash.ListItem>
                ]}
                revealAssets={[
                    <skoash.Audio ref="elephant" type="voiceOver" src="media/audio/VO_20-1.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
