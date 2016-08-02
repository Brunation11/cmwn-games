import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import DropzoneComponent from 'shared/components/dropzone_component/0.1';

var DragNDropIssuesScreen = (
  <DragNDropScreen
    id="drag-n-drop-issues"
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
      <skoash.ListItem className="draggable-list-item cyberbullying animated" message="cyberbullying" />,
      <skoash.ListItem className="draggable-list-item endangered-animals animated" message="endangered-animals" />,
      <skoash.ListItem className="draggable-list-item literacy animated" message="literacy" />,
      <skoash.ListItem className="draggable-list-item climate-change animated" message="climate-change" />,
      <skoash.ListItem className="draggable-list-item poverty animated" message="poverty" />,
      <skoash.ListItem className="draggable-list-item health-problems animated" message="health-problems" />,
      <skoash.ListItem className="draggable-list-item homelessness animated" message="homelessness" />,
      <skoash.ListItem className="draggable-list-item war-and-terrorism animated" message="war-and-terrorism" />
    ]}
    revealAssets={[
      <skoash.Audio ref="cyberbullying" type="voiceOver" src="media/assets/_audio/VOs/VO_Cyberbullying.mp3" />,
      <skoash.Audio ref="endangered-animals" type="voiceOver" src="media/assets/_audio/VOs/VO_Endangered.mp3" />,
      <skoash.Audio ref="literacy" type="voiceOver" src="media/assets/_audio/VOs/VO_Literacy.mp3" />,
      <skoash.Audio ref="climate-change" type="voiceOver" src="media/assets/_audio/VOs/VO_Climate.mp3" />,
      <skoash.Audio ref="poverty" type="voiceOver" src="media/assets/_audio/VOs/VO_Poverty.mp3" />,
      <skoash.Audio ref="health-problems" type="voiceOver" src="media/assets/_audio/VOs/VO_Health.mp3" />,
      <skoash.Audio ref="homelessness" type="voiceOver" src="media/assets/_audio/VOs/VO_Homelessness.mp3" />,
      <skoash.Audio ref="war-and-terrorism" type="voiceOver" src="media/assets/_audio/VOs/VO_War.mp3" />
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

// screen should only complete once all items are in a dropzones
// collect the data from dropzone
