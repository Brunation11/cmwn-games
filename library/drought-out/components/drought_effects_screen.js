export default function (props, ref, key) {
    // TODO need falcon image 1/23/17 AIM
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="drought-effects"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}mp3`}/>
            <skoash.Component className="frame animated">
                <p>
                    Drought can have<br /> severe effects on<br /> the environment.<br />
                    It's really bad for<br /> humans, too!
                </p>
                <skoash.Image src={`${MEDIA.IMAGE}img_9.1.png`}/>
            </skoash.Component>
        </skoash.Screen>
    );
}
