export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-customize-your-own-drone"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}NowItsTimeCustomize.mp3`}
            />

            <skoash.Component className="frame">
                <span className="copy">
                    NOW IT'S TIME
                    <br />
                    TO CUSTOMIZE YOUR VERY
                    <br />
                    OWN DRONE!
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
