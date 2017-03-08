export default function (props, ref, key) {
    const STATES = [
        {
            audio: 'wood',
            interval: 1000,
        },
        {
            audio: 'plus',
            interval: 1000,
        },
        {
            audio: 'o2',
            interval: 1000,
        },
        {
            audio: 'equal',
            interval: 1000,
        },
        {
            audio: 'fire',
        },
    ];

    var play = function (open, i) {
        var state = STATES[i];
        var audio = state.audio;

        if (audio === 'wood') audio += ' vo';

        open += ' ' + _.toUpper(state.audio);

        this.updateScreenData({
            key: 'screen-3',
            data: {
                open,
                play: audio,
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
            id="info-fuel-oxygen"
            onOpen={init}
            className={_.get(props, 'data.screen-3.open', null)}
        >
            <skoash.MediaCollection
                play={_.get(props, 'data.screen-3.play', null)}
            >
                    <skoash.Audio
                        ref={STATES[0].audio}
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}s-3-2.mp3`}
                    />
                    <skoash.Audio
                        ref={STATES[1].audio}
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}s-3-4.mp3`}
                    />
                    <skoash.Audio
                        ref={STATES[2].audio}
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}s-3-2.mp3`}
                    />
                    <skoash.Audio
                        ref={STATES[3].audio}
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}s-3-4.mp3`}
                    />
                    <skoash.Audio
                        ref={STATES[4].audio}
                        type="sfx"
                        src={`${CMWN.MEDIA.EFFECT}s-3-3.mp3`}
                    />
                    <skoash.Audio
                        ref="vo"
                        type="voiceOver"
                        src={`${CMWN.MEDIA.VO}vo-fuel-oxygen-make-it-burn.mp3`}
                    />
            </skoash.MediaCollection>
            <skoash.Image className="animated wood" src={`${CMWN.MEDIA.IMAGE}img-3-1.png`} />
            <skoash.Image className="animated plus" src={`${CMWN.MEDIA.IMAGE}img-3-2.png`} />
            <skoash.Image className="animated o2" src={`${CMWN.MEDIA.IMAGE}img-3-3.png`} />
            <skoash.Image className="animated equal" src={`${CMWN.MEDIA.IMAGE}img-3-4.png`} />
            <skoash.Image className="animated fire" src={`${CMWN.MEDIA.IMAGE}img-3-5.png`} />
            <skoash.Image className="animated words" src={`${CMWN.MEDIA.IMAGE}img-3-6.png`} />
        </skoash.Screen>
    );
}
