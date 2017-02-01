export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="ladder"
        >
            <skoash.Audio type="voiceOver" src="media/S_10/vo_SpecialGear.mp3" />
            <skoash.Image className="animated" src="media/S_10/img_10.1.png" />
            <skoash.Component className="frame animated">
                <skoash.Image className="background" src="media/_Frames/FR_2.png" />
                <div>
                    Firefighters need lots of<br />
                    special gear to keep<br />
                    them safe and help<br />
                    them battle the flames.
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}

