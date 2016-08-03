import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import DropzoneComponent from 'shared/components/dropzone_component/0.1';

function collectData() {
  var data = {};
  if (!this.refs.dropzone || !this.refs.dropzone.refs.dropzone) return data;
  _.forIn(this.refs.dropzone.refs.dropzone.refs, (ref, key1) => {
    if (key1.indexOf('dropzone-') === -1) return;
    if (!ref.state.content) return;
    data[key1] = {};
    _.forIn(ref.state.content, (ref, key2) => {
      data[key1][key2] = ref.props.message;
    });
  });
  return data;
}

var QualitiesBucketsScreen = (
  <DragNDropScreen
    id="qualities-buckets"
    allCorrect
    multipleAnswers
    checkComplete={true}
    collectData={collectData}
    dropzoneAssets={[
      <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/S_DropBuckets/S_6.1.mp3" />
    ]}
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

export default QualitiesBucketsScreen;

// add hover state to drop zones on drop
// edit hover state for drop zones
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// update frame image
