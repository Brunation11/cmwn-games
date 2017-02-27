export default function (props, ref, key) {
    const STATES = [
        {
            audio: 'vo',
            interval: 2000,
        },
        {
            audio: 'flame',
            interval: 1000
        },
        {
            audio: 'equal',
            interval: 700
        },
        {
            audio: 'text',
        },
    ];

    var play = function (open, i) {
        var state = STATES[i];

        open += ' ' + _.toUpper(state.audio);
        this.updateScreenData({
            key: 'screen-2',
            data: {
                open,
                play: state.audio,
            }
        });

        if (state.interval) {
            setTimeout(() => {
                play.call(this, open, ++i);
            }, state.interval);
        }
    };

    var init = function () {
        setTimeout(() => {
            play.call(this, '', 0);
        }, 100);
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-chemical"
            onOpen={init}
            className={_.get(props, 'data.screen-2.open', null)}
        >
            <skoash.MediaCollection ref="media-collection" play={_.get(props, 'data.screen-2.play', null)}>
                <skoash.Audio
                    ref={STATES[0].audio}
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-chemical-reaction.mp3`}
                />
                <skoash.Audio
                    ref={STATES[1].audio}
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}s-2-2.mp3`}
                    volume={0.5}
                />
                <skoash.Audio
                    ref={STATES[2].audio}
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}s-2-3.mp3`}
                    volume={0.6}
                />
                <skoash.Audio
                    ref={STATES[3].audio}
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}s-2-4.mp3`}
                    volume={0.6}
                />
            </skoash.MediaCollection>
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-2-1.png`} />
            <skoash.Image className="animated flame" src={`${CMWN.MEDIA.IMAGE}img-2-2.png`} />
            <skoash.Image className="animated equal" src={`${CMWN.MEDIA.IMAGE}img-2-3.png`} />
            <h2 className="animated text">
                Chemical<br />Reaction
            </h2>
        </skoash.Screen>
    );
}

