export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="not-to-waste"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-not-to-waste.mp3`} />
            <skoash.Image ref="image" className="animated" src={`${CMWN.MEDIA.IMAGE}img-2-1.png`} />
            <div className="text">
                <p>
                    We know it's<br />
                    important not to waste it…<br />
                    but it's easy to forget.<br /><br />
                    That's where you come in!
                </p>
            </div>
        </skoash.Screen>
    );
}

