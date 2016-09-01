import IntervalScreen from 'shared/components/interval_screen/0.1';
import AudioSequence from 'shared/components/audio_sequence/0.1';

export default function (props, ref, key) {
  return (
    <IntervalScreen
      {...props}
      ref={ref}
      key={key}
      id="break-triangle"
      states={{
        title: false,
        heat: false,
        air: false,
        fuel: false,
        theory: false,
      }}
    >
      <AudioSequence
        ref="audio-sequence"
      >
        <skoash.Audio type="voiceOver" data-ref="title" src="media/S_9/vo_FirefightersBreakTheTriangle.mp3" />
        <skoash.Audio type="voiceOver" data-ref="heat" src="media/S_8/vo_Heat.mp3" />
        <skoash.Audio type="voiceOver" data-ref="air" src="media/S_8/vo_Air.mp3" />
        <skoash.Audio type="voiceOver" data-ref="fuel" src="media/S_8/vo_Fuel.mp3" />
        <skoash.Audio type="voiceOver" data-ref="theory" src="media/S_9/vo_ThisIsBasicFirefighterTheory.mp3" />
      </AudioSequence>
      <p>
        Firefighters break the triangle by removing<br /> one of more these three sides.
      </p>
      <skoash.Component className="animated images">
        <skoash.Image className="animated fuel" src="media/S_8/img_8.10b.png" />
        <skoash.Image className="animated fuel side" data-ref="fuelSide" src="media/S_8/img_8.10g.png" />
        <skoash.Image className="animated heat" src="media/S_8/img_8.10c.png" />
        <skoash.Image className="animated heat side" data-ref="heatSide" src="media/S_8/img_8.10f.png" />
        <skoash.Image className="animated air" src="media/S_8/img_8.10d.png" />
        <skoash.Image className="animated air side" data-ref="airSide" src="media/S_8/img_8.10h.png" />
        <skoash.Image className="animated triangle" src="media/S_8/img_8.10e.png" />
      </skoash.Component>
      <h2>
        This is basic firefighter theory!
      </h2>
    </IntervalScreen>
  );
}

