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
          <skoash.Image src="media/S_7/sprite_7.2.png" className="b" ref="bathing" top="0" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="d" ref="drinking" top="1" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="wd" ref="washingDishes" top="4" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="s" ref="swimming" top="5" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="c" ref="canoeing" top="2" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="f" ref="factories" top="3" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="bt" ref="brushingTeeth" top="6" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="e" ref="electricity" top="7" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="g" ref="growingFood" top="11" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="ws" ref="waterSlides" top="10" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="r" ref="rafting" top="9" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="l" ref="lawns" top="12" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="k" ref="cooking" top="8" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="fl" ref="flowers" top="13" />,
          <skoash.Image src="media/S_7/sprite_7.2.png" className="a" ref="animalFeed" top="14" />,
        ]}
      />
    </skoash.Screen>
  );

  return BalloonsScreen;
}
