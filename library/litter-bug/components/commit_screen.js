export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="commit"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}i-promise.mp3`} />
            <skoash.Audio ref="button" complete type="sfx" src={`${CMWN.MEDIA.EFFECT}s-bu-1.mp3`} />
            <div className="pledge">
                I promise to <span className="never"></span> litter
                <br /><span className="spacerA"></span>and to pick up the litter
                <br /><span className="spacerB"></span>I see whenever I safely can.
                <br /><span className="spacer1"></span>I will dispose of it
                <br /><span className="spacer2"></span>in a trash can
                <br /><span className="spacer3"></span>or a recycle bin.
            </div>
            <div className="banner animated" />
        </skoash.Screen>
    );
}
