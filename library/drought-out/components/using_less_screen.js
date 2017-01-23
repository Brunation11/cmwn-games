export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-using-less"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/UsingLess.mp3`}
            />
            <skoash.Image src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/img_13.1.png`}/>
            <p>
                Using less<br /> adds up!
            </p>
        </skoash.Screen>
    );
}
