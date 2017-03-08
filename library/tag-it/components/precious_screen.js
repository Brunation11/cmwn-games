export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="precious"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-precious.mp3`} />
            <skoash.Image ref="image" className="animated" src={`${CMWN.MEDIA.IMAGE}img-2-1.png`} />
            <div className="text">
                <p>
                    Water is one of <br />
                    the world's most precious<br />
                    limited resources!
                </p>
            </div>
        </skoash.Screen>
    );
}

