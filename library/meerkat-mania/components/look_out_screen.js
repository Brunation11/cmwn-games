export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="look-out"
        >
            <skoash.MediaSequence>
                <skoash.Audio type="sfx" src={`${CMWN.MEDIA.EFFECT}s-4-1.mp3`} />
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-1.mp3`} />
            </skoash.MediaSequence>

            <skoash.Component className="frame">
                <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-8.png`} />
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
