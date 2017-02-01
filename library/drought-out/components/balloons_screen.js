import SelectableCanvasMove from 'shared/components/selectable_canvas_move/0.1';

// TODO fix cursor scaling on SelectableCanvasMove AIM 2/1/17

export default function (props, ref, key) {
    const BALLOONS = [
        {
            x: 15,
            y: 432,
            text: 'bathing',
        },
        {
            x: 307,
            y: 632,
            text: 'drinking',
        },
        {
            x: 460,
            y: 832,
            text: 'canoeing',
        },
        {
            x: 614,
            y: 1032,
            text: 'factories',
        },
        {
            x: 768,
            y: 1232,
            text: 'washing',
        },
        {
            x: 256,
            y: 568,
            text: 'swimming',
        },
        {
            x: 409,
            y: 768,
            text: 'brushing',
        },
        {
            x: 409,
            y: 768,
            text: 'electricity',
        },
        {
            x: 563,
            y: 968,
            text: 'cooking',
        },
        {
            x: 716,
            y: 1168,
            text: 'rafting',
        },
        {
            x: 204,
            y: 504,
            text: 'water',
        },
        {
            x: 358,
            y: 704,
            text: 'growing',
        },
        {
            x: 512,
            y: 904,
            text: 'lawns',
        },
        {
            x: 665,
            y: 1104,
            text: 'flowers',
        },
        {
            x: 153,
            y: 440,
            text: 'animal',
        },
    ];

    var playSFX = function () {
        var sfx;
        var target = _.get(props, 'data.selection.target.props.data-ref', null);
        var index = _.findIndex(BALLOONS, (value) => {
            return value.text === target;
        });

        if (0 <= index && index < 7) sfx = 'yellow';
        else if (7 <= index && index < 11) sfx = 'green';
        else if (11 <= index && index < 14) sfx = 'red';

        return sfx;
    };

    return (
        <skoash.Screen
            id="balloons"
            {...props}
            ref={ref}
            key={key}
        >
            <skoash.MediaCollection
                play={playSFX()}
            >
                <skoash.Audio
                    ref="yellow"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Select1.mp3`}
                    volume={.6}
                />
                <skoash.Audio
                    ref="green"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Select2.mp3`}
                    volume={.4}
                />
                <skoash.Audio
                    ref="red"
                    type="sfx"
                    src={`${MEDIA.EFFECT}Select3.mp3`}
                    volume={.4}
                />
            </skoash.MediaCollection>
            <skoash.MediaCollection
                play={_.get(props, 'data.selection.target.props.data-ref', null)}
            >
                {BALLOONS.map((value, index) => {
                    return (
                        <skoash.Audio
                            ref={value.text}
                            type="voiceOver"
                            src={`${MEDIA.VO}Things${_.upperFirst(value.text)}.mp3`}
                            key={index}
                        />
                    );
                })}
            </skoash.MediaCollection>
            <skoash.Image src={`${MEDIA.IMAGE}img_7.1.png`} />
            <SelectableCanvasMove
                ref="selectable-canvas-move"
                selectClass="HIGHLIGHTED"
                onSelect={function (target) {
                    this.updateScreenData({
                        key: 'selection',
                        data: {
                            target
                        }
                    });
                }}
                items={BALLOONS.map((value, index) => {
                    return (
                        <skoash.Image
                            src={`${MEDIA.SPRITE}img_7.2.png`}
                            data-ref={value.text}
                            backgroundRow={index}
                            x={value.x} y={value.y}
                            crossOrigin="Anonymous"
                        />
                    );
                })}
            />
        </skoash.Screen>
    );
}
