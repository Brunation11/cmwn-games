export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="excel"
        >
            <skoash.Audio type="sfx" src="media/S_2/S_2.1.mp3" complete />
            <skoash.Audio type="voiceOver" src="media/S_2/VO_2.1.mp3" />
            <skoash.Component className="frame">
                <skoash.Image className="background" src="media/_Frames/FR_1.png" />
                <p>
                    Meerkats excel as team players and everyone<br/>
                    in the large Meerkat family, called a mob,<br/>
                    participates in foraging for food,<br/>
                    sentry duty and care of babies.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}


