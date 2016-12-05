export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="ding-dong"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    ref="ding-dong"
                    type="sfx"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/effects/DoorbellLong.mp3`}
                    loop={true}
                />
            </skoash.MediaSequence>
            <skoash.Image
                className="animated infinite"
                src={`${ENVIRONMENT.MEDIA}ImageAssets/ding.dong.png`}
            />
        </skoash.Screen>
    );
}
