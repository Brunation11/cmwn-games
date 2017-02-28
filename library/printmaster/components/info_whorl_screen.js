export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-whorl"
            className="types"
            onOpen={function () {
                skoash.trigger('passData', {
                    name: 'typing',
                    duration: 500,
                });
            }}
            onClose={function () {
                skoash.trigger('passData', {
                    name: 'stopTyping',
                });
            }}
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-6-1.mp3`} />
            <skoash.Image ref="img" className="animated" src={`${CMWN.MEDIA.IMAGE}img-6-1.gif`} />
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
            <div className="frame">
                <div>
                    <div>
                        <span className="animated">
                            <h2 className="typing">
                                WHORL
                            </h2>
                        </span>
                        <p className="animated">
                            Whorls appear as<br/>
                            a circular pattern.
                        </p>
                    </div>
                </div>
            </div>

        </skoash.Screen>
    );
}
