export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-everybody"
            className="large-frame"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-20-1.mp3`} />
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <div className="frame">
                <p>
                    Everybody leaves fingerprints,<br/>
                    see if you can find some more.<br/>
                    <br/>
                    Dip the brush in powder and<br/>
                    lightly dust countertops or sinks<br/>
                    and lift all the existing prints you can find.<br/>
                    Place on the construction paper.
                </p>
            </div>
        </skoash.Screen>
    );
}
