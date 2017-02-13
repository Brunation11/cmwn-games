export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="humans-animals"
            className="small-frame"
            playOnStart="tumbleweed"
        >
            <skoash.Audio
                ref="tumbleweed"
                type="sfx"
                src={`${MEDIA.EFFECT}Tumbleweed.mp3`}
                loop
                complete
                checkComplete={false}
                />
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}HumansAnimals.mp3`}/>
            <skoash.Component className="frame animated">
                <p>
                    Humans, animals and <br />plants need <br />water to live!
                </p>
            </skoash.Component>
            <skoash.Sprite
                className="tumbleweed"
                src={`${MEDIA.SPRITE}tumbleweed`}
                animate={true}
            />
        </skoash.Screen>
    );
}
