import _ from 'lodash';

import collectData from './collect_data.js';
import loadData from './load_data.js';

import MediaCollection from 'shared/components/media_collection/0.1';
import Dropzone from 'shared/components/dropzone/0.3';

export default function (props, ref, key) {
  function dragRespond(draggable) {
    _.forIn(this.refs, (ref2, key2) => {
      if (key2.indexOf('dropzone-') === -1) return;
      if (ref2 && ref2.state && ref2.state.content === draggable) ref2.setState({content: null});
    });
    this.incomplete();
  }

  function correctRespond(draggable, dropzoneKey) {
    var dropzone, message, complete = true;

    dropzone = this.refs[`dropzone-${dropzoneKey}`];
    message = draggable.props.message;

    if (dropzone.state.content && draggable !== dropzone.state.content) {
      dropzone.state.content.returnToStart();
      dropzone.state.content.markIncorrect();
    }

    dropzone.setState({content: draggable});

    this.updateGameState({
      path: 'reveal',
      data: {
        open: message
      }
    });

    _.forIn(this.refs, (ref3, key3) => {
      if (key3.indexOf('dropzone-') === -1) return;
      if (!ref3.state.content) return complete = false;
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
      id="drag-n-drop-passionate"
    >
      <skoash.Audio ref="vo" type="voiceOver" src="media/assets/_audio/VOs/VO_Passionate.mp3" />
      <skoash.Image ref="penguin" className="penguin animated" src="media/assets/_images/S_3/img_s3_penguin-01.png" />
      <skoash.Image ref="banner" className="banner animated" src="media/assets/_images/S_3/text_what_are_you_passionate_about%20copy.png" />
      <skoash.Component ref="frame" className="frame animated" />

      <MediaCollection
        ref="media-collection"
        complete={true}
        checkComplete={false}
        play={_.get(props, 'data.reveal.open', null)}
        onPlay={function () {
          this.updateGameState({
            path: 'reveal',
            data: {
              open: null
            }
          });
        }}
      >
        <skoash.Audio ref="friends" type="voiceOver" src="media/assets/_audio/VOs/VO_Friends.mp3" />
        <skoash.Audio ref="world-peace" type="voiceOver" src="media/assets/_audio/VOs/VO_WorldP.mp3" />
        <skoash.Audio ref="sports" type="voiceOver" src="media/assets/_audio/VOs/VO_Sports.mp3" />
        <skoash.Audio ref="playing-games" type="voiceOver" src="media/assets/_audio/VOs/VO_Playing.mp3" />
        <skoash.Audio ref="looking-cool" type="voiceOver" src="media/assets/_audio/VOs/VO_Looking.mp3" />
        <skoash.Audio ref="school" type="voiceOver" src="media/assets/_audio/VOs/VO_School.mp3" />
        <skoash.Audio ref="celebrities" type="voiceOver" src="media/assets/_audio/VOs/VO_Celebrities.mp3" />
        <skoash.Audio ref="environment" type="voiceOver" src="media/assets/_audio/VOs/VO_Environment.mp3" />
      </MediaCollection>

      <Dropzone
        ref="dropzone"
        centerOnCorrect
        dragRespond={dragRespond}
        correctRespond={correctRespond}
        assets={[
          <skoash.Audio ref="drag" type="sfx" src="media/assets/_audio/_Buttons/S_BU_2.mp3" complete />,
          <skoash.Audio ref="correct" type="sfx" src="media/assets/_audio/_Buttons/S_BU_3.mp3" complete />
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
        draggables={[
          <skoash.ListItem ref="friends" className="draggable-list-item friends animated" message="friends" returnOnIncorrect />,
          <skoash.ListItem ref="world-peace" className="draggable-list-item world-peace animated" message="world-peace" returnOnIncorrect />,
          <skoash.ListItem ref="sports" className="draggable-list-item sports animated" message="sports" returnOnIncorrect />,
          <skoash.ListItem ref="playing-games" className="draggable-list-item playing-games animated" message="playing-games" returnOnIncorrect />,
          <skoash.ListItem ref="looking-cool" className="draggable-list-item looking-cool animated" message="looking-cool" returnOnIncorrect />,
          <skoash.ListItem ref="school" className="draggable-list-item school animated" message="school" returnOnIncorrect />,
          <skoash.ListItem ref="celebrities" className="draggable-list-item celebrities animated" message="celebrities" returnOnIncorrect />,
          <skoash.ListItem ref="environment" className="draggable-list-item environment animated" message="environment" returnOnIncorrect />
        ]}
      />
      <skoash.Component ref="meter" className="meter animated" />
    </skoash.Screen>
  );
}
