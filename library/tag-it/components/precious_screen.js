export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="precious"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_audio/S_Precious/VO_Precious.mp3" />
            <skoash.Image ref="image" className="animated" src="media/_images/S_Precious/img_2.1.png" />
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

