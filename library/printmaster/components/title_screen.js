export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.Audio ref="screen-complete" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-1-3.mp3`} complete />
            <skoash.Image ref="bkg" className="hidden" src={`${CMWN.MEDIA.IMAGE}img-1-2.png`} />
            <skoash.Component ref="title">
                <skoash.MediaSequence
                    ref="media"
                    loop
                >
                    <skoash.Audio ref="0" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-1-1.mp3`} />
                    <skoash.Audio ref="1" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-1-2.mp3`} />
                </skoash.MediaSequence>
                <skoash.Image ref="img" className="scanner animated" src={`${CMWN.MEDIA.IMAGE}img-1-1.gif`} />
                <div className="title">
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                    <div className="animated" />
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
