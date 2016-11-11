export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="lets-clean-up"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/screen24.mp3" />
            <skoash.Image className="toilet" src="media/S_3/img_3.1.png" />
            <skoash.Component className="message">
                <p>Help keep the contaminants<br />out of the water supply</p>
                <skoash.Image className="banner" src="media/images/text-letscleanup_.png" />
            </skoash.Component>
        </skoash.Screen>
    );
}
