import SelectableCanvasMove from 'shared/components/selectable_canvas_move/0.1';

export default function (props, ref, key) {
  var BalloonsScreen = (
    <skoash.Screen
      id="balloons"
      {...props}
      ref={ref}
      key={key}
    >
      <skoash.Audio ref="yellow" type="sfx" src="media/S_7/S_7.1.mp3" />
      <skoash.Audio ref="green" type="sfx" src="media/S_7/S_7.2.mp3" />
      <skoash.Audio ref="red" type="sfx" src="media/S_7/S_7.3.mp3" />
      <skoash.Audio ref="bathing" type="voiceOver" src="media/S_7/VO_7.1.mp3" silentOnStart />
      <skoash.Audio ref="drinking" type="voiceOver" src="media/S_7/VO_7.2.mp3" />
      <skoash.Audio ref="washingDishes" type="voiceOver" src="media/S_7/VO_7.3.mp3" />
      <skoash.Audio ref="swimming" type="voiceOver" src="media/S_7/VO_7.4.mp3" />
      <skoash.Audio ref="canoeing" type="voiceOver" src="media/S_7/VO_7.5.mp3" />
      <skoash.Audio ref="factories" type="voiceOver" src="media/S_7/VO_7.6.mp3" />
      <skoash.Audio ref="brushingTeeth" type="voiceOver" src="media/S_7/VO_7.7.mp3" />
      <skoash.Audio ref="electricity" type="voiceOver" src="media/S_7/VO_7.8.mp3" />
      <skoash.Audio ref="growingFood" type="voiceOver" src="media/S_7/VO_7.9.mp3" />
      <skoash.Audio ref="waterSlides" type="voiceOver" src="media/S_7/VO_7.10.mp3" />
      <skoash.Audio ref="rafting" type="voiceOver" src="media/S_7/VO_7.11.mp3" />
      <skoash.Audio ref="lawns" type="voiceOver" src="media/S_7/VO_7.12.mp3" />
      <skoash.Audio ref="cooking" type="voiceOver" src="media/S_7/VO_7.13.mp3" />
      <skoash.Audio ref="flowers" type="voiceOver" src="media/S_7/VO_7.14.mp3" />
      <skoash.Audio ref="animalFeed" type="voiceOver" src="media/S_7/VO_7.15.mp3" />
      <skoash.Image src="media/S_7/img_7.16.png" />
      <SelectableCanvasMove
        ref="selectable-canvas-move"
        selectClass="HIGHLIGHTED"
        items={[
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="b"
            ref="bathing"
            backgroundTop={0}
            x={120} y={540}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="d"
            ref="drinking"
            backgroundTop={1}
            x={240} y={790}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="wd"
            ref="washingDishes"
            backgroundTop={4}
            x={360} y={1040}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="s"
            ref="swimming"
            backgroundTop={5}
            x={480} y={1290}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="c"
            ref="canoeing"
            backgroundTop={2}
            x={600} y={1540}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="f"
            ref="factories"
            backgroundTop={3}
            x={200} y={710}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="bt"
            ref="brushingTeeth"
            backgroundTop={6}
            x={320} y={960}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="e"
            ref="electricity"
            backgroundTop={7}
            x={440} y={1210}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="g"
            ref="growingFood"
            backgroundTop={11}
            x={560} y={1460}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="ws"
            ref="waterSlides"
            backgroundTop={10}
            x={160} y={630}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="r"
            ref="rafting"
            backgroundTop={9}
            x={280} y={880}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="l"
            ref="lawns"
            backgroundTop={12}
            x={400} y={1130}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="k"
            ref="cooking"
            backgroundTop={8}
            x={520} y={1380}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="fl"
            ref="flowers"
            backgroundTop={13}
            x={120} y={550}
          />,
          <skoash.Image
            src="media/S_7/sprite_7.2.png"
            className="a"
            ref="animalFeed"
            backgroundTop={14}
            x={240} y={800}
          />,
        ]}
      />
    </skoash.Screen>
  );

  return BalloonsScreen;
}
