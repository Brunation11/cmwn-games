import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import DropzoneComponent from 'shared/components/dropzone_component/0.1';

var QualitiesBucketsScreen = (
  <DragNDropScreen
    id="qualities-buckets"
    dropzones={[
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item animated" />
    ]}
    dropzoneList={[
      <skoash.ListItem className="draggable-list-item sharing animated" message="sharing" return />,
      <skoash.ListItem className="draggable-list-item kindness animated" message="kindness" return />,
      <skoash.ListItem className="draggable-list-item rudeness animated" message="rudeness" return />,
      <skoash.ListItem className="draggable-list-item being-a-bully animated" message="being-a-bully" return />,
      <skoash.ListItem className="draggable-list-item compassion animated" message="compassion" return />,
      <skoash.ListItem className="draggable-list-item greediness animated" message="greediness" return />,
      <skoash.ListItem className="draggable-list-item being-angry animated" message="being-angry" return />,
      <skoash.ListItem className="draggable-list-item friendliness animated" message="friendliness" return />
    ]}
    revealAssets={[
      <skoash.Audio ref="sharing" type="voiceOver" src="media/assets/_audio/VOs/VO_Friends.mp3" />,
      <skoash.Audio ref="kindness" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldP.mp3" />,
      <skoash.Audio ref="rudeness" type="voiceOver" src="media/assets/_audio/VOs/VO_Sports.mp3" />,
      <skoash.Audio ref="being-a-bully" type="voiceOver" src="media/assets/_audio/VOs/VO_Playing.mp3" />,
      <skoash.Audio ref="compassion" type="voiceOver" src="media/assets/_audio/VOs/VO_Looking.mp3" />,
      <skoash.Audio ref="greediness" type="voiceOver" src="media/assets/_audio/VOs/VO_School.mp3" />,
      <skoash.Audio ref="being-angry" type="voiceOver" src="media/assets/_audio/VOs/VO_Celebrities.mp3" />,
      <skoash.Audio ref="friendliness" type="voiceOver" src="media/assets/_audio/VOs/VO_Environment.mp3" />
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

export default QualitiesBucketsScreen;

// add hover state to drop zones on drop
// edit hover state for drop zones
// add drop sound S_6.1 when item drops in bucket
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// update frame image