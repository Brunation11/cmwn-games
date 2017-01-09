export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    src={`${MEDIA.EFFECT}Shake.mp3`}
                />
            </skoash.MediaSequence>
        </skoash.Screen>
    );
}
