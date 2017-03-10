export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-10-1.mp3`} />
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}bg-slide.png`} />
                    <skoash.Component className="content-group center">
                        <skoash.Component>
                            <h3>You've learned a lot!<br/> Now you know how<br/> to help Sea Turtles!</h3>
                            <h3>Here's your</h3>
                            <skoash.Image
                                className="flip"
                                src={`${CMWN.MEDIA.IMAGE}img-10-1.png`}
                                width="50%"
                            />
                        </skoash.Component>
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
