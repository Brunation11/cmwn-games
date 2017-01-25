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
                src={`${MEDIA.VO}UsingLess.mp3`}
            />
            <skoash.Image src={`${MEDIA.IMAGE}img_13.1.png`}/>
            <p>
                Using less<br /> adds up!
            </p>
        </skoash.Screen>
    );
}
