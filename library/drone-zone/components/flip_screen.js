export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}HeresYourFlip.mp3`}
            />

            <skoash.Component className="header">
                <span>
                    HERE'S YOUR FLIP!
                </span>
            </skoash.Component>
            <skoash.Image
                className="flip"
                src={`${MEDIA.SPRITE}dz.animatedearnedflip.gif`}
            />
        </skoash.Screen>
    );
}
