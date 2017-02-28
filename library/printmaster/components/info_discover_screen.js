export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-discover"
            className="large-frame"
            onOpen={function () {
                skoash.trigger('passData', {
                    name: 'typing',
                    duration: 5000,
                });
            }}
            onClose={function () {
                skoash.trigger('passData', {
                    name: 'stopTyping',
                });
            }}
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-3-1.mp3`} />
            <skoash.Image ref="img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <skoash.Component className="frame">
                <skoash.Image ref="img" className="animated" src={`${CMWN.MEDIA.IMAGE}img-3-1.png`} />
                <div>
                    <span>
                        <p>CLICK AND DISCOVER</p>
                    </span>
                    <span>
                        <p>THE FOUR MOST COMMON</p>
                    </span>
                    <span>
                        <p>TYPES OF PATTERNS THAT</p>
                    </span>
                    <span>
                        <p>FORM FINGERPRINTS</p>
                    </span>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
