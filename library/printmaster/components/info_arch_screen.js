export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-arch"
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
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4-1.mp3`} />
            <skoash.Image ref="image" className="animated" src={`${CMWN.MEDIA.SPRITE}img-4-1.gif`} />
            <skoash.Image ref="frame-bkg" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
            <div className="frame">
                <div>
                    <div>
                        <span className="animated">
                            <h2 className="typing">
                                ARCH
                            </h2>
                        </span>
                        <p className="animated">
                            Arches slope up to<br/>
                            a peak and then down.
                        </p>
                    </div>
                </div>
            </div>
        </skoash.Screen>
    );
}
