export default function (props, ref, key) {
    const ANIMATE = [
        'WOOD',
        'PLUS',
        'O2',
        'EQUAL',
        'FIRE',
    ];

    var animate  = function () {
        var index = _.get(props, 'data.screen-3.index', 0);
        var open = _.get(props, 'data.screen-3.open', '');
        open += ` ${ANIMATE[index]}`;

        this.updateScreenData({
            key: 'screen-3',
            data: {
                index: index + 1,
                open,
            },
        });
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-fuel-oxygen"
            className={_.get(props, 'data.screen-3.open', null)}
        >
            <skoash.MediaSequence ref="audio-sequence">
                    <skoash.Audio
                        type="voiceOver"
                        src="media/S_3/vo_FuelOxygenMakeItBurn.mp3"
                        onComplete={animate}
                    />
                    <skoash.Audio
                        ref="wood"
                        type="sfx"
                        src="media/S_3/S_3.2.mp3"
                        onComplete={animate}
                    />
                    <skoash.Audio
                        ref="plus"
                        type="sfx"
                        src="media/S_3/S_3.4.mp3"
                        onComplete={animate}
                    />
                    <skoash.Audio
                        ref="o2"
                        type="sfx"
                        src="media/S_3/S_3.2.mp3"
                        onComplete={animate}
                    />
                    <skoash.Audio
                        ref="equal"
                        type="sfx"
                        src="media/S_3/S_3.4.mp3"
                        onComplete={animate}
                    />
                    <skoash.Audio
                        ref="fire"
                        type="sfx"
                        src="media/S_3/S_3.3.mp3"
                    />
            </skoash.MediaSequence>
            <skoash.Image className="animated wood" src="media/S_3/img_3.1.png" />
            <skoash.Image className="animated plus" src="media/S_3/img_3.2.png" />
            <skoash.Image className="animated o2" src="media/S_3/img_3.3.png" />
            <skoash.Image className="animated equal" src="media/S_3/img_3.4.png" />
            <skoash.Image className="animated fire" src="media/S_3/img_3.5.png" />
            <skoash.Image className="animated words" src="media/S_3/img_3.6.png" />
        </skoash.Screen>
    );
}
