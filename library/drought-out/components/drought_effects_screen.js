export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="drought-effects"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}DroughtCan.mp3`}/>
            <skoash.Component className="frame animated">
                <skoash.Image className="falcon" src={`${MEDIA.IMAGE}falcon.png`}/>
                <p>
                    Drought can have<br /> severe effects on<br /> the environment.<br />
                    It's really bad for<br /> humans, too!
                </p>
                <skoash.Image className="cactus" src={`${MEDIA.IMAGE}img_9.1.png`}/>
            </skoash.Component>
        </skoash.Screen>
    );
}
