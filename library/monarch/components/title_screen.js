export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            completeDelay={3000}
        >
            {
                // <skoash.Audio
                //     ref="screen-complete"
                //     type="sfx"
                //     src={`${MEDIA.EFFECT}Shake.mp3`}
                // />
            }
        </skoash.Screen>
    );
}
