export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="look-out"
        >
            <skoash.MediaSequence>
                <skoash.Audio type="sfx" src="media/S_4/S_4.1.mp3" />
                <skoash.Audio type="voiceOver" src="media/S_4/VO_4.1.mp3" />
            </skoash.MediaSequence>

            <skoash.Component className="frame">
                <skoash.Image className="background" src="media/_Frames/FR_8.png" />
                <p>
                    We meerkats really<br/>
                    look out for each other.<br/>
                    We make sure everyone<br/>
                    is safe and has<br/>
                    everything they need.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
