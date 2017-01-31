export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-help-the-drone"
        >
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.levelimgs.png`} />

            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}HelpTheDrone.mp3`}
            />

            <skoash.Component className="lvl lvl-1" />
            <skoash.Component className="lvl lvl-2" />
            <skoash.Component className="lvl lvl-3" />
            <span className="copy">
                HELP THE DRONE
                <br />
                DO ITS DAILY
                <br />
                ACTIVITIES!
            </span>
        </skoash.Screen>
    );
}
