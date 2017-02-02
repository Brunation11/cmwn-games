export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="recycling-arts"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio
                    ref="vo"
                    type="voiceOver"
                    src="media/_audio/S_RecyclingArts/VO_RecyclingArt.mp3"
                />
                <skoash.Audio
                    ref="sfx"
                    type="sfx"
                    src="media/_audio/S_RecyclingArts/TI_Recycling.mp3"
                />
            </skoash.MediaSequence>
            <div className="pallet animated">
                <p>
                    This is a<br />
                    <span className="recycle inline animated"></span><br />
                    project!
                </p>
            </div>
        </skoash.Screen>
    );
}

