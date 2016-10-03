import _ from 'lodash';

import collectData from './collect_data.js';
import loadData from './load_data.js';

import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
  function correctRespond(draggable, dropzoneKey) {
    var dropzone, complete = true, content, totalComplete = 0;
    dropzone = this.refs.dropzone.refs[`dropzone-${dropzoneKey}`];
    content = dropzone.state.content || [];

    if (content.indexOf(draggable) === -1) content.push(draggable);

    dropzone.setState({content});

    _.forIn(this.refs.dropzone.refs, (ref2, key2) => {
      if (key2.indexOf('dropzone-') === -1) return;
      if (!ref2.state.content) return complete = false;
      totalComplete += ref2.state.content.length;
      if (totalComplete !== this.refs.dropzone.draggables.length) complete = false;
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
      id="qualities-buckets"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_DropBuckets.mp3" />
      <div ref="frame" className="frame animated"></div>
      <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_6/img_06_penguin-01.png" />

      <DropzoneReveal
        ref="dropzone-reveal"
        correctRespond={correctRespond}
        dropzoneAssets={[
          <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/S_DropBuckets/S_6.1.mp3" />
        ]}
        dropzones={[
          <skoash.Component className="dropzone-list-item animated" />,
          <skoash.Component className="dropzone-list-item animated" />
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
          <skoash.Audio ref="being-angry" type="voiceOver" src="media/assets/_audio/VOs/VO_BeingAngry.mp3" />,
          <skoash.Audio ref="friendliness" type="voiceOver" src="media/assets/_audio/VOs/VO_Friendliness.mp3" />
        ]}
      />
      <div ref="meter" className="meter animated"></div>
    </skoash.Screen>
  );
}
