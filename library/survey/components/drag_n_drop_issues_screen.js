import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import DropzoneComponent from 'shared/components/dropzone_component/0.1';

var DragNDropIssuesScreen = (
  <DragNDropScreen
    id="drag-n-drop-issues"
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
      <skoash.ListItem className="draggable-list-item cyberbullying animated" message="cyberbullying" return />,
      <skoash.ListItem className="draggable-list-item endangered-animals animated" message="endangered-animals" return />,
      <skoash.ListItem className="draggable-list-item literacy animated" message="literacy" return />,
      <skoash.ListItem className="draggable-list-item climate-change animated" message="climate-change" return />,
      <skoash.ListItem className="draggable-list-item poverty animated" message="poverty" return />,
      <skoash.ListItem className="draggable-list-item health-problems animated" message="health-problems" return />,
      <skoash.ListItem className="draggable-list-item homelessness animated" message="homelessness" return />,
      <skoash.ListItem className="draggable-list-item war-and-terrorism animated" message="war-on-terrorism" return />
    ]}
    revealAssets={[
      <skoash.Audio ref="cyberbullying" type="voiceOver" src="media/assets/_audio/VOs/VO_Cyberbullying.mp3" />,
      <skoash.Audio ref="endangered-animals" type="voiceOver" src="media/assets/_audio/VOs/VO_Endangered.mp3" />,
      <skoash.Audio ref="literacy" type="voiceOver" src="media/assets/_audio/VOs/VO_Literacy.mp3" />,
      <skoash.Audio ref="climate-change" type="voiceOver" src="media/assets/_audio/VOs/VO_Climate.mp3" />,
      <skoash.Audio ref="poverty" type="voiceOver" src="media/assets/_audio/VOs/VO_Poverty.mp3" />,
      <skoash.Audio ref="health-problems" type="voiceOver" src="media/assets/_audio/VOs/VO_Health.mp3" />,
      <skoash.Audio ref="homelessness" type="voiceOver" src="media/assets/_audio/VOs/VO_Homelessness.mp3" />,
      <skoash.Audio ref="war-on-terrorism" type="voiceOver" src="media/assets/_audio/VOs/VO_War.mp3" />
    ]}
    afterDropzoneList={[
      <div ref="meter" className="meter animated"></div>
    ]}
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldIssues.mp3" />
    <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_4/img_s4_penguin-01.png" />
    <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_4/text-worldissues-01.png" />
    <div ref="frame" className="frame animated"></div>
  </DragNDropScreen>
);

export default DragNDropIssuesScreen;

// (consider dropzone reveal in order to play vo's)
// add drop zones
// add drag/drop sounds
// update the component to play the audio when list item is selected/dropped
// list items need to reset if another item is put in same dropzone
// screen should only complete once all items are in a dropzones
// collect the data from dropzone
// resize icons to better fit frame