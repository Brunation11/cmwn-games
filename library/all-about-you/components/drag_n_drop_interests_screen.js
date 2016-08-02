import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import DropzoneComponent from 'shared/components/dropzone_component/0.1';

var DragNDropInterestsScreen = (
  <DragNDropScreen
    id="drag-n-drop-interests"
    dropzoneAssets={[
      <skoash.Audio ref="drag" type="sfx" src="media/assets/_audio/_Buttons/S_BU_2.mp3" />,
      <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/_Buttons/S_BU_3.mp3" />
    ]}
    centerOnCorrect={true}
    dropzones={[
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item lanimated" />,
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item animated" />,
      <DropzoneComponent className="dropzone-list-item animated" />
    ]}
    dropzoneList={[
      <skoash.ListItem className="draggable-list-item space animated" message="space" />,
      <skoash.ListItem className="draggable-list-item animals animated" message="animals" />,
      <skoash.ListItem className="draggable-list-item recycling animated" message="recycling" />,
      <skoash.ListItem className="draggable-list-item money animated" message="money" />,
      <skoash.ListItem className="draggable-list-item printing animated" message="printing" />,
      <skoash.ListItem className="draggable-list-item coding animated" message="coding" />,
      <skoash.ListItem className="draggable-list-item art animated" message="art" />,
      <skoash.ListItem className="draggable-list-item robotics animated" message="robotics" />
    ]}
    revealAssets={[
      <skoash.Audio ref="space" type="voiceOver" src="media/assets/_audio/VOs/VO_Space.mp3" />,
      <skoash.Audio ref="animals" type="voiceOver" src="media/assets/_audio/VOs/VO_Endangered.mp3" />,
      <skoash.Audio ref="recycling" type="voiceOver" src="media/assets/_audio/VOs/VO_Recycling.mp3" />,
      <skoash.Audio ref="money" type="voiceOver" src="media/assets/_audio/VOs/VO_Money.mp3" />,
      <skoash.Audio ref="printing" type="voiceOver" src="media/assets/_audio/VOs/VO_3DPrint.mp3" />,
      <skoash.Audio ref="coding" type="voiceOver" src="media/assets/_audio/VOs/VO_Coding.mp3" />,
      <skoash.Audio ref="art" type="voiceOver" src="media/assets/_audio/VOs/VO_Art.mp3" />,
      <skoash.Audio ref="robotics" type="voiceOver" src="media/assets/_audio/VOs/VO_Robotics.mp3" />
    ]}
    afterDropzoneList={[
      <div ref="meter" className="meter animated"></div>
    ]}
  >

    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_MostInterested.mp3" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_16/IMG_16_Penguins.png" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_16/Text_16_what%20are%20interested.png" />
    <div ref="frame" className="frame animated"></div>
  </DragNDropScreen>
);

export default DragNDropInterestsScreen;

// add drag/drop sounds
// list items need to reset if another item is put in same dropzone
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// resize draggables to easily drop in dropzones
