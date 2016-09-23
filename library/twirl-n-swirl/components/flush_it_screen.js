import _ from 'lodash';
import classNames from 'classnames';

import Dropzone from 'shared/components/dropzone/0.2';
import Reveal from 'shared/components/reveal/0.1';
import MediaCollection from 'shared/components/media_collection/0.1';

export default function (props, ref, key) {
  function correctRespond(draggable, dropzoneKey) {
    var dropzone, dropzoneRect, endX, endY;
    dropzone = this.refs[`dropzone-${dropzoneKey}`];
    dropzoneRect = ReactDOM.findDOMNode(dropzone).getBoundingClientRect();

    // position draggable 0 0 at dropzone 0 0
    endX = dropzoneRect.left / draggable.state.zoom;
    endY = dropzoneRect.top / draggable.state.zoom;
    // shift draggable 0 0 to dropzone 50% 50%
    endX += ((dropzone.corners[1].x - dropzone.corners[0].x) / 2);
    endY += ((dropzone.corners[3].y - dropzone.corners[0].y) / 2);
    // center draggable in center dropzone;
    endX -= ((draggable.state.corners[1].x - draggable.state.corners[0].x) / 2);
    endY -= ((draggable.state.corners[3].y - draggable.state.corners[0].y) / 2);
    // reset draggable end position
    draggable.setEnd(endX, endY);

    this.updateGameState({
      path: 'dropzone',
      data: {
        correct: draggable.props.message,
      }
    });
  }

  function flush() {
    skoash.trigger('updateState', {
      path: 'reveal',
      data: {
        open: 'flush'
      }
    });

    skoash.trigger('updateState', {
      path: 'flushed',
      data: {
        [_.get(props, 'data.dropzone.correct')]: true
      }
    });
  }

  function openReveal() {
    this.updateGameState({
      path: 'openReveal',
      data: _.get(props, 'data.dropzone.correct')
    });
  }

  function onClose() {
    this.updateGameState({
      path: 'dropzone',
      data: {
        correct: false
      }
    });
  }

  function onStart() {
    if (this.state.complete) {
      _.forEach(this.refs.dropzone.refs, (r, k) => {
        if (k.indexOf('draggable-') !== -1) {
          r.markIncorrect();
        }
      });
    }
  }

  function getClassNames() {
    return classNames(_.get(props, 'data.flushed', false));
  }

  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="flush-it"
      onStart={onStart}
    >
      <skoash.Component className="frame left" />
      <skoash.Component className="frame right" />
      <Dropzone
        ref="dropzone"
        className={getClassNames()}
        complete
        checkComplete={false}
        assets={[
          <skoash.Audio data-ref="correct" type="sfx" src="media/S_6/S_6.1.mp3" />,
        ]}
        correctRespond={correctRespond}
        dropzones={[
          <skoash.Component className={`${_.get(props, 'data.reveal.message')} animated`} />
        ]}
        answers={['wipes', 'diapers', 'paper', 'sheets', 'fats', 'cosmetics', 'bandages', 'litter', 'cotton', 'gum', 'floss', 'hair', 'meds', 'chemicals']}
        draggables={[
          <skoash.ListItem ref="wipes" className="wipes animated" message="wipes" returnOnIncorrect />,
          <skoash.ListItem ref="diapers" className="diapers animated" message="diapers" returnOnIncorrect />,
          <skoash.ListItem ref="paper" className="paper animated" message="paper" returnOnIncorrect />,
          <skoash.ListItem ref="sheets" className="sheets animated" message="sheets" returnOnIncorrect />,
          <skoash.ListItem ref="fats" className="fats animated" message="fats" returnOnIncorrect />,
          <skoash.ListItem ref="cosmetics" className="cosmetics animated" message="cosmetics" returnOnIncorrect />,
          <skoash.ListItem ref="bandages" className="bandages animated" message="bandages" returnOnIncorrect />,
          <skoash.ListItem ref="litter" className="litter animated" message="litter" returnOnIncorrect />,
          <skoash.ListItem ref="cotton" className="cotton animated" message="cotton" returnOnIncorrect />,
          <skoash.ListItem ref="gum" className="gum animated" message="gum" returnOnIncorrect />,
          <skoash.ListItem ref="floss" className="floss animated" message="floss" returnOnIncorrect />,
          <skoash.ListItem ref="hair" className="hair animated" message="hair" returnOnIncorrect />,
          <skoash.ListItem ref="meds" className="meds animated" message="meds" returnOnIncorrect />,
          <skoash.ListItem ref="chemicals" className="chemicals animated" message="chemicals" returnOnIncorrect />
        ]}
      />
      <Reveal
        openOnStart="intro"
        openTarget="reveal"
        openReveal={_.get(props, 'data.openReveal')}
        onClose={onClose}
        list={[
          <skoash.ListItem data-ref="intro" className="animated intro reveal">
            <h3>Drag and drop items into the toilet<br /> and flush to find out what<br />happens when you send<br />the wrong things down the drain.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="wipes" className="animated wipes reveal">
              <h3>Baby wipes are thicker and sturdier<br />than toilet paper and<br />do not break down easily.<br />They are a clog waiting to happen!</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="diapers" className="animated diapers reveal">
              <h3>Diapers contain plastic that has<br />chemicals which expand when wet.<br />They create BIG clogs.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="paper" className="animated paper reveal">
              <h3>Paper towels are not designed<br />to break down in water<br />like toilet paper.<br />Flushing can cause problems.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="sheets" className="animated sheets reveal">
              <h3>Dryer Sheets contain synthetic<br />chemicals that are not<br />biodegradable!</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="fats" className="animated fats reveal">
              <h3>They may seem like a liquid but<br />when they cool they coat the pipe like<br />wax making the pipe opening<br />smaller and smaller.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="cosmetics" className="animated cosmetics reveal">
              <h3>Many of the ingredients in<br />cosmetics are toxic and shouldn’t<br />be in the water supply.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="bandages" className="animated bandages reveal">
              <h3>The plastic in band-aids<br />is not biodegradable.<br />They are bad for the environment.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="litter" className="animated litter reveal">
              <h3>Cat litter can harbor parasites<br />and even toxins.<br />
                Litter is made from clay and<br />sand which should<br />NEVER be put in a toilet.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="cotton" className="animated cotton reveal">
              <h3>They clump together and<br />bend in the pipes<br />and create blockages.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="gum" className="animated gum reveal">
              <h3>It’s gooey and sticky and definitely<br />can cause problems.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="floss" className="animated floss reveal">
              <h3>Dental Floss is not biodegradable.<br />In the pipeline it can wrap<br />around other objects and create<br />monster clogs.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="hair" className="animated hair reveal">
              <h3>Hair catches things and tangles<br />almost like dental floss.<br />It’s a big clogger!</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="meds" className="animated meds reveal">
              <h3>This is a BIG NO!<br />Medications are not removed in<br />treatment plants and contaminate<br />water supplies. They are very<br />bad for animals and people.</h3>
          </skoash.ListItem>,
          <skoash.ListItem data-ref="chemicals" className="animated chemicals reveal">
              <h3>Sounds surprising!<br />The chemicals are toxic and can<br />damage animals, humans,<br />and the environment.</h3>
          </skoash.ListItem>
        ]}
      />
      <MediaCollection
        play={_.get(props, 'data.reveal.open')}
      >
        <skoash.Audio
          ref="flush"
          type="sfx"
          src="media/S_6/S_6.2.mp3"
          onComplete={openReveal}
          playTarget="flush"
          completeTarget="flush"
        />
        <skoash.Audio ref="intro" type="voiceOver" src="media/S_6/VO_6.1.mp3" />
        <skoash.Audio ref="wipes" type="voiceOver" src="media/S_6/VO_6.3.mp3" />
        <skoash.Audio ref="diapers" type="voiceOver" src="media/S_6/VO_6.4.mp3" />
        <skoash.Audio ref="paper" type="voiceOver" src="media/S_6/VO_6.5.mp3" />
        <skoash.Audio ref="sheets" type="voiceOver" src="media/S_6/VO_6.6.mp3" />
        <skoash.Audio ref="fats" type="voiceOver" src="media/S_6/VO_6.7.mp3" />
        <skoash.Audio ref="cosmetics" type="voiceOver" src="media/S_6/VO_6.8.mp3" />
        <skoash.Audio ref="bandages" type="voiceOver" src="media/S_6/VO_6.9.mp3" />
        <skoash.Audio ref="litter" type="voiceOver" src="media/S_6/VO_6.10.mp3" />
        <skoash.Audio ref="cotton" type="voiceOver" src="media/S_6/VO_6.11.mp3" />
        <skoash.Audio ref="gum" type="voiceOver" src="media/S_6/VO_6.12.mp3" />
        <skoash.Audio ref="floss" type="voiceOver" src="media/S_6/VO_6.13.mp3" />
        <skoash.Audio ref="hair" type="voiceOver" src="media/S_6/VO_6.14.mp3" />
        <skoash.Audio ref="meds" type="voiceOver" src="media/S_6/VO_6.15.mp3" />
        <skoash.Audio ref="chemicals" type="voiceOver" src="media/S_6/VO_6.16.mp3" />
      </MediaCollection>
      <button
        ref="reveal-button"
        className="flush"
        onClick={flush}
      />
    </skoash.Screen>
  );
}
