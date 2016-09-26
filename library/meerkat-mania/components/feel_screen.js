import MediaCollection from 'shared/components/media_collection/0.1';
import Selectable from 'shared/components/selectable/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="feel"
    >
      <skoash.Audio type="voiceOver" src="media/S_6/VO_6.11.mp3" pl-delay="3s" pl-required />
      <skoash.Audio ref="start" type="sfx" src="media/S_6/S_6.1.mp3" />
      <MediaCollection
        play={_.get(props, 'data.selection.target', null)}
        onPlay={function () {
          this.media.correct.play();

          this.updateGameState({
            path: 'selection',
            data: {
              target: null
            }
          });
        }}
      >
        <skoash.Audio ref="correct" type="sfx" src="media/S_6/S_6.2.mp3" />
        <skoash.Audio ref="safe" type="voiceOver" src="media/S_6/VO_6.1.mp3" complete />
        <skoash.Audio ref="loved" type="voiceOver" src="media/S_6/VO_6.2.mp3" complete />
        <skoash.Audio ref="supported" type="voiceOver" src="media/S_6/VO_6.3.mp3" complete />
        <skoash.Audio ref="important" type="voiceOver" src="media/S_6/VO_6.4.mp3" complete />
        <skoash.Audio ref="included" type="voiceOver" src="media/S_6/VO_6.5.mp3" complete />
        <skoash.Audio ref="valued" type="voiceOver" src="media/S_6/VO_6.6.mp3" complete />
        <skoash.Audio ref="grateful" type="voiceOver" src="media/S_6/VO_6.7.mp3" complete />
        <skoash.Audio ref="happy" type="voiceOver" src="media/S_6/VO_6.8.mp3" complete />
        <skoash.Audio ref="secure" type="voiceOver" src="media/S_6/VO_6.9.mp3" complete />
        <skoash.Audio ref="worthwhile" type="voiceOver" src="media/S_6/VO_6.10.mp3" complete />
      </MediaCollection>
      <skoash.Component className="frame">
        <skoash.Image src="media/S_6/img_6.1.png" />
        <Selectable
          selectClass="HIGHLIGHTED"
          selectRespond={function (target) {
            this.updateGameState({
              path: 'selection',
              data: {
                target
              }
            });
          }}
          list={[
            <li ref="safe" />,
            <li ref="loved" />,
            <li ref="supported" />,
            <li ref="important" />,
            <li ref="included" />,
            <li ref="valued" />,
            <li ref="grateful" />,
            <li ref="happy" />,
            <li ref="secure" />,
            <li ref="worthwhile" />,
          ]}
        />
      </skoash.Component>
    </skoash.Screen>
  );
}
