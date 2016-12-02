export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-human-effects"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_11/VO_11.1.mp3"/>
            <skoash.Component className="frame animated">
                <p>
                    Drought is very<br /> bad for<br /> humans too.
                </p>
                <skoash.Image src="media/S_11/img_11.1.png"/>
            </skoash.Component>
        </skoash.Screen>
    );
}
