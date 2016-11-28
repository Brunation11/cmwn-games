export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-lets-see"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/LetsSee.mp3`} />
            <skoash.Component className="frame">
                <span>
                    You should not open the door<br />of your house to just anybody.
                </span>
            </skoash.Component>
            <skoash.Image src={`${ENVIRONMENT.MEDIA}ImageAssets/dog.quit.png`} />
        </skoash.Screen>
    );
}
