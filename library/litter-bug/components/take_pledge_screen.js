export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="take-pledge"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}anti-litter-pledge.mp3`} />
            <skoash.Audio ref="button" complete type="sfx" src={`${CMWN.MEDIA.EFFECT}s-bu-1.mp3`} />
            <skoash.Image ref="bkg" className="background" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <div className="mr-eco"></div>
            <div className="banner"></div>
        </skoash.Screen>
    );
}
