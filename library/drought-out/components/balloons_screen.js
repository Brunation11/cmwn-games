import MediaCollection from 'shared/components/media_collection/0.1';
import SelectableCanvasMove from 'shared/components/selectable_canvas_move/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            id="balloons"
            {...props}
            ref={ref}
            key={key}
        >
            <MediaCollection
                play={_.get(props, 'data.selection.target.props.data-ref', null)}
                onPlay={function (balloon) {
                    var sfx;

                    switch (balloon) {
                        case 'bathing':
                        case 'drinking':
                        case 'canoeing':
                        case 'factories':
                        case 'lawns':
                        case 'flowers':
                        case 'animalFeed':
                            sfx = 'yellow';
                            break;
                        case 'washingDishes':
                        case 'swimming':
                        case 'brushingTeeth':
                        case 'electricity':
                            sfx = 'green';
                            break;
                        case 'cooking':
                        case 'rafting':
                        case 'waterSlides':
                        case 'growingFood':
                            sfx = 'red';
                            break;
                    }

                    this.playMedia(sfx);

                    this.updateGameState({
                        path: 'selection',
                        data: {
                            target: null
                        }
                    });
                }}
            >
                <skoash.Audio
                    ref="yellow"
                    type="sfx"
                    src="media/S_7/S_7.1.mp3"
                    volume={.6}
                />
                <skoash.Audio
                    ref="green"
                    type="sfx"
                    src="media/S_7/S_7.2.mp3"
                    volume={.4}
                />
                <skoash.Audio
                    ref="red"
                    type="sfx"
                    src="media/S_7/S_7.3.mp3"
                    volume={.4}
                />
                <skoash.Audio
                    ref="bathing"
                    type="voiceOver"
                    src="media/S_7/VO_7.1.mp3"
                />
                <skoash.Audio
                    ref="drinking"
                    type="voiceOver"
                    src="media/S_7/VO_7.2.mp3"
                />
                <skoash.Audio
                    ref="washingDishes"
                    type="voiceOver"
                    src="media/S_7/VO_7.3.mp3"
                />
                <skoash.Audio
                    ref="swimming"
                    type="voiceOver"
                    src="media/S_7/VO_7.4.mp3"
                />
                <skoash.Audio
                    ref="canoeing"
                    type="voiceOver"
                    src="media/S_7/VO_7.5.mp3"
                />
                <skoash.Audio
                    ref="factories"
                    type="voiceOver"
                    src="media/S_7/VO_7.6.mp3"
                />
                <skoash.Audio
                    ref="brushingTeeth"
                    type="voiceOver"
                    src="media/S_7/VO_7.7.mp3"
                />
                <skoash.Audio
                    ref="electricity"
                    type="voiceOver"
                    src="media/S_7/VO_7.8.mp3"
                />
                <skoash.Audio
                    ref="growingFood"
                    type="voiceOver"
                    src="media/S_7/VO_7.9.mp3"
                />
                <skoash.Audio
                    ref="waterSlides"
                    type="voiceOver"
                    src="media/S_7/VO_7.10.mp3"
                />
                <skoash.Audio
                    ref="rafting"
                    type="voiceOver"
                    src="media/S_7/VO_7.11.mp3"
                />
                <skoash.Audio
                    ref="lawns"
                    type="voiceOver"
                    src="media/S_7/VO_7.12.mp3"
                />
                <skoash.Audio
                    ref="cooking"
                    type="voiceOver"
                    src="media/S_7/VO_7.13.mp3"
                />
                <skoash.Audio
                    ref="flowers"
                    type="voiceOver"
                    src="media/S_7/VO_7.14.mp3"
                />
                <skoash.Audio
                    ref="animalFeed"
                    type="voiceOver"
                    src="media/S_7/VO_7.15.mp3"
                />
            </MediaCollection>
            <skoash.Image src="media/S_7/img_7.16.png" />
            <SelectableCanvasMove
                ref="selectable-canvas-move"
                selectClass="HIGHLIGHTED"
                onSelect={function (target) {
                    this.updateGameState({
                        path: 'selection',
                        data: {
                            target
                        }
                    });
                }}
                items={[
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="b"
                        data-ref="bathing"
                        backgroundTop={0}
                        x={192} y={540}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="d"
                        data-ref="drinking"
                        backgroundTop={1}
                        x={384} y={790}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="wd"
                        data-ref="washingDishes"
                        backgroundTop={4}
                        x={576} y={1040}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="s"
                        data-ref="swimming"
                        backgroundTop={5}
                        x={768} y={1290}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="c"
                        data-ref="canoeing"
                        backgroundTop={2}
                        x={960} y={1540}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="f"
                        data-ref="factories"
                        backgroundTop={3}
                        x={320} y={710}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="bt"
                        data-ref="brushingTeeth"
                        backgroundTop={6}
                        x={512} y={960}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="e"
                        data-ref="electricity"
                        backgroundTop={7}
                        x={704} y={1210}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="g"
                        data-ref="growingFood"
                        backgroundTop={11}
                        x={896} y={1460}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="ws"
                        data-ref="waterSlides"
                        backgroundTop={10}
                        x={256} y={630}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="r"
                        data-ref="rafting"
                        backgroundTop={9}
                        x={448} y={880}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="l"
                        data-ref="lawns"
                        backgroundTop={12}
                        x={640} y={1130}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="k"
                        data-ref="cooking"
                        backgroundTop={8}
                        x={832} y={1380}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="fl"
                        data-ref="flowers"
                        backgroundTop={13}
                        x={192} y={550}
                    />,
                    <skoash.Image
                        src="media/S_7/sprite_7.2.png"
                        className="a"
                        data-ref="animalFeed"
                        backgroundTop={14}
                        x={384} y={800}
                    />,
                ]}
            />
        </skoash.Screen>
    );
}
