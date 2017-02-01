export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="hero"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}BeAHero.mp3`} />
            <skoash.Component className="frame animated">
                <skoash.Image src={`${MEDIA.IMAGE}img_16.1.png`} />
                <p>
                    Take this real world!<br />
                    Do <skoash.Image className="inline" src={`${MEDIA.IMAGE}img_16.2.png`} />
                    and show your family
                    <br /> how they can be heroes too.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}

