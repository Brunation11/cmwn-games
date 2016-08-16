import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import DropzoneComponent from 'shared/components/dropzone_component/0.1';

export default function (props, ref, key) {
  return (
    <DragNDropScreen
      {...props}
      ref={ref}
      key={key}
      id="qualities-buckets"
      allCorrect
      multipleAnswers
      checkComplete={true}
      dropzoneAssets={[
        <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/S_DropBuckets/S_6.1.mp3" />
      ]}
      dropzones={[
        <DropzoneComponent className="dropzone-list-item animated" />,
        <DropzoneComponent className="dropzone-list-item animated" />
      ]}
      dropzoneList={[
        <skoash.ListItem ref="sharing" className="draggable-list-item sharing animated" message="sharing" returnOnIncorrect />,
        <skoash.ListItem ref="kindness" className="draggable-list-item kindness animated" message="kindness" returnOnIncorrect />,
        <skoash.ListItem ref="rudeness" className="draggable-list-item rudeness animated" message="rudeness" returnOnIncorrect />,
        <skoash.ListItem ref="being-a-bully" className="draggable-list-item being-a-bully animated" message="being-a-bully" returnOnIncorrect />,
        <skoash.ListItem ref="compassion" className="draggable-list-item compassion animated" message="compassion" returnOnIncorrect />,
        <skoash.ListItem ref="greediness" className="draggable-list-item greediness animated" message="greediness" returnOnIncorrect />,
        <skoash.ListItem ref="being-angry" className="draggable-list-item being-angry animated" message="being-angry" returnOnIncorrect />,
        <skoash.ListItem ref="friendliness" className="draggable-list-item friendliness animated" message="friendliness" returnOnIncorrect />
      ]}
      revealAssets={[
        <skoash.Audio ref="sharing" type="voiceOver" src="media/assets/_audio/VOs/VO_Sharing.mp3" />,
        <skoash.Audio ref="kindness" type="voiceOver" src="media/assets/_audio/VOs/VO_Kindness.mp3" />,
        <skoash.Audio ref="rudeness" type="voiceOver" src="media/assets/_audio/VOs/VO_Rudeness.mp3" />,
        <skoash.Audio ref="being-a-bully" type="voiceOver" src="media/assets/_audio/VOs/VO_BeingBully.mp3" />,
        <skoash.Audio ref="compassion" type="voiceOver" src="media/assets/_audio/VOs/VO_Compassion.mp3" />,
        <skoash.Audio ref="greediness" type="voiceOver" src="media/assets/_audio/VOs/VO_Greediness.mp3" />,
        <skoash.Audio ref="being-angry" type="voiceOver" src="media/assets/_audio/VOs/VO_Angry.mp3" />,
        <skoash.Audio ref="friendliness" type="voiceOver" src="media/assets/_audio/VOs/VO_Friendliness.mp3" />
      ]}
      afterDropzoneList={[
        <div ref="meter" className="meter animated"></div>
      ]}
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_DropBuckets.mp3" />
      <div ref="frame" className="frame animated"></div>
      <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_6/img_06_penguin-01.png" />
    </DragNDropScreen>
  );
}
