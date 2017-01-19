export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-wanted-your-own-drone"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}HaveYouEverWanted.mp3`}
            />

            <skoash.Component className="frame">
                <span className="copy">
                    HAVE YOU EVER
                    <br />
                    WANTED YOUR OWN DRONE?
                    <br />
                    HERE'S YOUR CHANCE!
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
