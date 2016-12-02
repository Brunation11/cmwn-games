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
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_6/VO_6.1.mp3" />
            <skoash.Image ref="img" className="animated" src="media/S_6/img_6.1.gif" />
            <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_2.png" />
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
