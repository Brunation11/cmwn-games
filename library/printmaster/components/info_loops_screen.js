export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-loops"
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
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-5-1.mp3`} />
            <skoash.Image ref="img" className="animated" src={`${CMWN.MEDIA.SPRITE}img-5-1.gif`} />
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-2.png`} />
            <div className="frame">
                <div>
                    <div>
                        <span className="animated">
                            <h2 className="typing">
                                LOOPS
                            </h2>
                        </span>
                        <p className="animated">
                            Loops curve around or<br/>
                            upward starting on one<br/>
                            side of the tip of the finger<br/>
                            and ending on the other.
                        </p>
                    </div>
                </div>
            </div>

        </skoash.Screen>
    );
}
