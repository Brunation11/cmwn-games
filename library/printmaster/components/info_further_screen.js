export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-further"
            className="large-frame"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-21-1.mp3`} />
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <div className="frame">
                <p>
                    Use your magnifying glass and compare<br/>
                    the prints and see if you can identify yours!<br/>
                    <br/>
                    If you want to go further, repeat the<br/>
                    fingerprinting process with<br/>
                    everyone in your family.<br/>
                    See if you can identify their<br/>
                    prints in your collection.
                </p>
            </div>
        </skoash.Screen>
    );
}
