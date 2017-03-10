export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-id"
            className="large-frame"
            onOpen={function () {
                skoash.trigger('passData', {
                    name: 'typing',
                    duration: 4250,
                });
            }}
            onClose={function () {
                skoash.trigger('passData', {
                    name: 'stopTyping',
                });
            }}
        >
            <skoash.MediaSequence ref="media">
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.EFFECT}s-8-1.mp3`} delay={500} />
                <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-8-1.mp3`} />
            </skoash.MediaSequence>
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <div className="frame">
                <div className="center">
                    <span>
                        <h2 className="typing">IDENTIFY...</h2>
                    </span>
                    <div>
                        <p className="typing">ID THE CORRECT</p>
                        <p className="typing">TYPE OF PRINT</p>
                    </div>
                </div>
            </div>
        </skoash.Screen>
    );
}
