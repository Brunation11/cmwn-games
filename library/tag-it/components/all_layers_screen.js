export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="all-layers"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-when-all.mp3`} />
            <p className="text">
                    When all layers<br />
                    of paint have dried,<br />
                    you are ready to<br />
                    place on the faucet.
            </p>
            <skoash.Image ref="image" src={`${CMWN.MEDIA.IMAGE}img-20-1.png`} />
        </skoash.Screen>
    );
}

