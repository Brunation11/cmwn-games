export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <skoash.Audio
                type="voiceOver"
                src={MEDIA.VO + 'flip.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.IMAGE + 'frame.square.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'flip.trees.png'}
            />
            <div className="frame square">
                <div className="content">
                    <skoash.Image
                        className="title"
                        src={MEDIA.IMAGE + 'flip.text.png'}
                    />
                    Thanks for taking<br/>
                    the time to learn<br/>
                    about how you<br/>
                    can help the<br/>
                    environment!
                </div>
            </div>
        </skoash.Screen>
    );
}
