export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="ladder"
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-special-gear.mp3`} />
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-10-1.png`} />
            <skoash.Component className="frame animated">
                <skoash.Image className="background" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
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

