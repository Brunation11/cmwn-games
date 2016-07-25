import DropzoneReveal from 'shared/components/dropzone_reveal/0.1';

var QualitiesBucketsScreen = (
  <skoash.Screen
    id="qualities-buckets"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_DropBuckets.mp3" />
    <div ref="frame" className="frame animated"></div>
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_6/img_06_penguin-01.png" />

    <DropzoneReveal
      ref="dropzone"
      dropzoneMessage="friends"
      dropzoneList={[
        <skoash.ListItem className="draggable-list-item sharing animated" data-ref="sharing" return correct />,
        <skoash.ListItem className="draggable-list-item kindness animated" data-ref="kindness" return correct />,
        <skoash.ListItem className="draggable-list-item rudeness animated" data-ref="rudeness" return correct />,
        <skoash.ListItem className="draggable-list-item being-a-bully animated" data-ref="being-a-bully" return correct />,
        <skoash.ListItem className="draggable-list-item compassion animated" data-ref="compassion" return correct />,
        <skoash.ListItem className="draggable-list-item greediness animated" data-ref="greediness" return correct />,
        <skoash.ListItem className="draggable-list-item being-angry animated" data-ref="being-angry" return correct />,
        <skoash.ListItem className="draggable-list-item friendliness animated" data-ref="friendliness" return correct />
      ]}
      revealAssets={[
        <skoash.Audio ref="drag" type="sfx" src="media/assets/_audio/_Buttons/S_BU_2.mp3" />,
        <skoash.Audio ref="sharing" type="voiceOver" src="media/assets/_audio/VOs/VO_Friends.mp3" pl-delay={1000} />,
        <skoash.Audio ref="kindness" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldP.mp3" pl-delay={1000} />,
        <skoash.Audio ref="rudeness" type="voiceOver" src="media/assets/_audio/VOs/VO_Sports.mp3" pl-delay={1000} />,
        <skoash.Audio ref="being-a-bully" type="voiceOver" src="media/assets/_audio/VOs/VO_Playing.mp3" pl-delay={1000} />,
        <skoash.Audio ref="compassion" type="voiceOver" src="media/assets/_audio/VOs/VO_Looking.mp3" pl-delay={1000} />,
        <skoash.Audio ref="greediness" type="voiceOver" src="media/assets/_audio/VOs/VO_School.mp3" pl-delay={1000} />,
        <skoash.Audio ref="being-angry" type="voiceOver" src="media/assets/_audio/VOs/VO_Celebrities.mp3" pl-delay={1000} />,
        <skoash.Audio ref="friendliness" type="voiceOver" src="media/assets/_audio/VOs/VO_Environment.mp3" pl-delay={1000} />
      ]}
    />

    <div ref="meter" className="meter animated"></div>
  </skoash.Screen>
);

export default QualitiesBucketsScreen;

// (consider dropzone reveal in order to play vo's)
// add drop zones
// add hover state to drop zones on drop
// add drag/drop sounds
// update the component to play the audio when list item is selected/dropped
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// update frame image