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
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_5/VO_5.1.mp3" />
            <skoash.Image ref="img" className="animated" src="media/S_5/img_5.1.gif" />
            <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_2.png" />
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
