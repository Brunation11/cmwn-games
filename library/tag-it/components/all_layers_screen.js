export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="all-layers"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_AllLayers/VO_WhenAll.mp3" />
            <p className="text">
                    When all layers<br />
                    of paint have dried,<br />
                    you are ready to<br />
                    place on the faucet.
            </p>
            <skoash.Image ref="image" src="media/_images/S_All_layers/img_20.1.png" />
        </skoash.Screen>
    );
}

