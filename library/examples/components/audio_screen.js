export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="audio"
        >
            <skoash.MediaSequence ref="audio-sequence">
                <skoash.Audio type="voiceOver" src="media/S_3/VO_3.1.mp3" />
                <skoash.Audio type="voiceOver" src="media/S_3/VO_3.2.mp3" />
                <skoash.Audio type="voiceOver" src="media/S_3/VO_3.3.mp3" />
            </skoash.MediaSequence>
        </skoash.Screen>
    );
}
