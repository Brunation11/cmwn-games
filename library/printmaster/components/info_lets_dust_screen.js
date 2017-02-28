export default function (props, ref, key) {
    var letsDust = _.get(props, 'data.vo.playing') ? 'lets-dust' : '';
    var count5 = _.get(props, 'data.count5.playing') ? 'count' : '';
    var count4 = _.get(props, 'data.count4.playing') ? 'count' : '';
    var count3 = _.get(props, 'data.count3.playing') ? 'count' : '';
    var count2 = _.get(props, 'data.count2.playing') ? 'count' : '';
    var count1 = _.get(props, 'data.count1.playing') ? 'count' : '';
    var engaged = _.get(props, 'data.engage.playing') ? ' engaged' : '';

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-lets-dust"
            className="large-frame"
            onOpen={function () {
                skoash.trigger('passData', {
                    name: 'typing',
                    duration: 1000,
                });
            }}
            onClose={function () {
                skoash.trigger('passData', {
                    name: 'stopTyping',
                });
            }}
        >
            <skoash.MediaSequence ref="media">
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-11-1.mp3`}
                    playTarget="vo"
                    completeTarget="vo"
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}S_11.2.mp3`}
                    playTarget="count5"
                    completeTarget="count5"
                    sprite={[0, 1000]}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}S_11.2.mp3`}
                    playTarget="count4"
                    completeTarget="count4"
                    sprite={[1000, 1000]}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}S_11.2.mp3`}
                    playTarget="count3"
                    completeTarget="count3"
                    sprite={[2000, 1000]}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}S_11.2.mp3`}
                    playTarget="count2"
                    completeTarget="count2"
                    sprite={[3000, 1000]}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}S_11.2.mp3`}
                    playTarget="count1"
                    completeTarget="count1"
                    sprite={[4000, 1000]}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}S_11.3.mp3`}
                    playTarget="engage"
                />
            </skoash.MediaSequence>
            <skoash.Image ref="frame-img" className="hidden" src={`${CMWN.MEDIA.FRAME}fr-1.png`} />
            <div className="frame">
                <div className={letsDust}>
                    <p className="typing">LET'S DUST FOR</p>
                    <p className="typing">FINGERPRINTS!</p>
                </div>
                <h3 className={count5}>5</h3>
                <h3 className={count4}>4</h3>
                <h3 className={count3}>3</h3>
                <h3 className={count2}>2</h3>
                <h3 className={count1}>1</h3>
                <div className={'engage' + engaged}>
                    <h2 className="typing">ENGAGE...</h2>
                </div>
            </div>
        </skoash.Screen>
    );
}
