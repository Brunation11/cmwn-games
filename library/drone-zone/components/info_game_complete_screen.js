export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-game-complete"
        >
            <skoash.Image className="hidden" src={`${MEDIA.IMAGE}winscreen.png`} />

            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}YouveWonTheGame.mp3`}
            />

            <skoash.Component className="frame fact">
                <span className="copy">
                    YOU'VE WON
                    <br />
                    THE GAME!
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
