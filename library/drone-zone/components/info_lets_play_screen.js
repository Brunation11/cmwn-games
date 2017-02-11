export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-lets-play"
        >
            <skoash.Image className="hidden" src={`${MEDIA.SPRITE}sprite.levelimgs.png`} />

            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}LetsPlayAGame.mp3`}
            />

            <skoash.Component className="lvl lvl-1" />
            <skoash.Component className="lvl lvl-2" />
            <skoash.Component className="lvl lvl-3" />
            <span className="copy">
                LETS PLAY
                <br />
                A GAME!
            </span>
        </skoash.Screen>
    );
}
