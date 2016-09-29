import _ from 'lodash';

import collectData from './collect_data.js';
import loadData from './load_data.js';

import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
  function dragRespond(draggable) {
    _.forIn(this.refs.dropzone.refs, (ref, key) => {
      if (key.indexOf('dropzone-') === -1) return;
      if (ref && ref.state && ref.state.content === draggable) ref.setState({content: null});
    });
    this.incomplete();
  }

  function correctRespond(draggable, dropzoneKey) {
    var dropzone, endX, endY, complete = true;
    dropzone = this.refs.dropzone.refs[`dropzone-${dropzoneKey}`];

    endX = (draggable.state.endX - draggable.state.corners[0].x + dropzone.corners[0].x) + ((draggable.state.corners[1].x - draggable.state.corners[0].x) / 2);
    endY = (draggable.state.endY - draggable.state.corners[0].y + dropzone.corners[0].y) + ((draggable.state.corners[3].y - draggable.state.corners[0].y) / 2);

    draggable.setEnd(endX, endY);

    if (dropzone.state.content && draggable !== dropzone.state.content) {
      dropzone.state.content.returnToStart();
      dropzone.state.content.markIncorrect();
    }

    dropzone.setState({content: draggable});

    _.forIn(this.refs.dropzone.refs, (ref, key) => {
      if (key.indexOf('dropzone-') === -1) return;
      if (!ref.state.content) return complete = false;
    });

    if (complete) this.complete();
  }

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      collectData={collectData}
      loadData={loadData}
      id="drag-n-drop-issues"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldIssues.mp3" />
      <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_4/img_s4_penguin-01.png" />
      <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_4/text-worldissues-01.png" />
      <div ref="frame" className="frame animated"></div>

      <DropzoneReveal
        ref="dropzone-reveal"
        dragRespond={dragRespond}
        correctRespond={correctRespond}
        dropzoneAssets={[
          <skoash.Audio ref="drag" type="sfx" src="media/assets/_audio/_Buttons/S_BU_2.mp3" />,
          <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/_Buttons/S_BU_3.mp3" />
        ]}
        dropzones={[
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />
        ]}
        dropzoneList={[
          <skoash.ListItem ref="cyberbulling" className="draggable-list-item cyberbullying animated" message="cyberbullying" returnOnIncorrect />,
          <skoash.ListItem ref="endangered-animals" className="draggable-list-item endangered-animals animated" message="endangered-animals" returnOnIncorrect />,
          <skoash.ListItem ref="literacy" className="draggable-list-item literacy animated" message="literacy" returnOnIncorrect />,
          <skoash.ListItem ref="climate-change" className="draggable-list-item climate-change animated" message="climate-change" returnOnIncorrect />,
          <skoash.ListItem ref="poverty" className="draggable-list-item poverty animated" message="poverty" returnOnIncorrect />,
          <skoash.ListItem ref="health-problems" className="draggable-list-item health-problems animated" message="health-problems" returnOnIncorrect />,
          <skoash.ListItem ref="homelessness" className="draggable-list-item homelessness animated" message="homelessness" returnOnIncorrect />,
          <skoash.ListItem ref="safety" className="draggable-list-item safety animated" message="safety" returnOnIncorrect />
        ]}
        revealAssets={[
          <skoash.Audio ref="cyberbullying" type="voiceOver" src="media/assets/_audio/VOs/VO_Cyberbullying.mp3" />,
          <skoash.Audio ref="endangered-animals" type="voiceOver" src="media/assets/_audio/VOs/VO_Endangered.mp3" />,
          <skoash.Audio ref="literacy" type="voiceOver" src="media/assets/_audio/VOs/VO_Literacy.mp3" />,
          <skoash.Audio ref="climate-change" type="voiceOver" src="media/assets/_audio/VOs/VO_Climate.mp3" />,
          <skoash.Audio ref="poverty" type="voiceOver" src="media/assets/_audio/VOs/VO_Poverty.mp3" />,
          <skoash.Audio ref="health-problems" type="voiceOver" src="media/assets/_audio/VOs/VO_Health.mp3" />,
          <skoash.Audio ref="homelessness" type="voiceOver" src="media/assets/_audio/VOs/VO_Homelessness.mp3" />,
          <skoash.Audio ref="safety" type="voiceOver" src="media/assets/_audio/VOs/VO_Safety.mp3" />
        ]}
      />
      <div ref="meter" className="meter animated"></div>
    </skoash.Screen>
  );
}
