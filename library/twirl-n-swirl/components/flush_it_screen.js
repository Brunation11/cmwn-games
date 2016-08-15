function openReveal () {
    
}

function correctRespond(draggable, dropzoneKey) {
    console.log("This is the custom correctRespond");
}
    /*
    if (!this.refs || !this.refs.dropzone || !this.refs.dropzone.refs || !this.refs.dropzone.refs.dropzone) return;
    var dropzone, endX, endY, width, centeredX, height, centeredY, complete = true, content;
    console.log(this);
    console.log(draggable);
    console.log(dropzoneKey);
    dropzone = this.refs.dropzone.refs.dropzone.refs[`dropzone-${dropzoneKey}`];

    if (this.props.centerOnCorrect) {
      endX = (draggable.state.endX - draggable.state.corners[0].x + dropzone.corners[0].x) + ((draggable.state.corners[1].x - draggable.state.corners[0].x) / 2);
      endY = (draggable.state.endY - draggable.state.corners[0].y + dropzone.corners[0].y) + ((draggable.state.corners[3].y - draggable.state.corners[0].y) / 2);    
      width = (dropzone.corners[1].x - dropzone.corners[0].x) / 2;
      centeredX = endX + width;
      height = (dropzone.corners[2].y - dropzone.corners[1].y) / 2;
      centeredY = endY + height;
      draggable.setEnd(centeredX, centeredY);
    }

    if (this.props.multipleAnswers) {
      content = dropzone.state.content || [];
      if (content.indexOf(draggable) === -1) {
        content.push(draggable);
      }
      dropzone.setState({content});
    } else {
      if (dropzone.state.content && draggable !== dropzone.state.content) {
        dropzone.state.content.returnToStart();
        dropzone.state.content.markIncorrect();
      }
      dropzone.setState({
        content: draggable
      });
    }
    
    if (typeof this.refs.reveal.open === 'function') {
      this.open(draggable.props.message);
    }

    _.forIn(this.refs['dropzone-reveal'].refs.dropzone.refs, (ref, key) => {
      if (key.indexOf('dropzone-')) return;
      if (!ref.state.content) complete = false;
    });

    if (complete) this.complete();
}*/

import DragNDropScreen from 'shared/components/drag_n_drop_screen/0.1';
import Draggable from 'shared/components/draggable/0.2';

var FlushItScreen = (
  <skoash.Screen
    id="flush-it"
    silentComplete
  >
    <DragNDropScreen
      ref="drag-n-drop"
      centerOnCorrect
      checkComplete
      //tnsCenterOnCorrect
      correctRespond={correctRespond}
      multipleAnswers
    
      dropzones={[
        <skoash.Component ref="toilet" />
      ]}
    
      dropzoneList={[
        <Draggable ref="wipes" className="wipes left" message="wipes" returnOnIncorrect={true} />,
        <skoash.ListItem ref="diapers" className="diapers left" message="diapers" />,
        <skoash.ListItem ref="paper" className="paper left" message="paper" />,
        <skoash.ListItem ref="sheets" className="sheets left" message="sheets" />,
        <skoash.ListItem ref="fats" className="fats left" message="fats" />,
        <skoash.ListItem ref="cosmetics" className="cosmetics left" message="cosmetics" />,
        <skoash.ListItem ref="bandages" className="bandages left" message="bandages" />,
      ]}
    
      secondDropzoneList={[
        <skoash.ListItem ref="litter" className="litter right" message="litter" />,
        <skoash.ListItem ref="cotton" className="cotton right" message="cotton" />,
        <skoash.ListItem ref="gum" className="gum right" message="gum" />,
        <skoash.ListItem ref="floss" className="floss right" message="floss" />,
        <skoash.ListItem ref="hair" className="hair right" message="hair" />,
        <skoash.ListItem ref="meds" className="meds right" message="meds" />,
        <skoash.ListItem ref="chemicals" className="chemicals right" message="chemicals" />,
      ]}
    
      revealList={[
        <skoash.ListItem data-ref="wipes">
            <h3>
              Baby wipes are thicker and sturdier<br/ >
              than toilet paper and<br />
              do not break down easily.<br />
              They are a clog waiting to happen!
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="diapers">
            <h3>
              Diapers contain plastic that has<br />
              chemicals which expand when wet.<br />
              They create BIG clogs.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="paper">
            <h3>
              Paper towels are not designed<br />
              to break down in water<br />
              like toilet paper.<br />
              Flushing can cause problems.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="sheets">
            <h3>
              Dryer Sheets contain synthetic<br />
              chemicals that are not<br />
              biodegradable!
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="fats">
            <h3>
              They may seem like a liquid but<br />
              when they cool they coat the pipe like<br />
              wax making the pipe opening<br />
              smaller and smaller.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="cosmetics">
            <h3>
              Many of the ingredients in<br />
              cosmetics are toxic and shouldn’t<br />
              be in the water supply.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="bandages">
            <h3>
              The plastic in band-aids<br />
              is not biodegradable.<br />
              They are bad for the environment.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="litter">
            <h3>
              Cat litter can harbor parasites<br />
              and even toxins.<br />
              Litter is made from clay and<br />
              sand which should<br />
              NEVER be put in a toilet.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="cotton">
            <h3>
              They clump together and<br />
              bend in the pipes<br />
              and create blockages.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="gum">
            <h3>
              It’s gooey and sticky and definitely<br />
              can cause problems.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="floss">
            <h3>
              Dental Floss is not biodegradable.<br />
              In the pipeline it can wrap<br />
              around other objects and create<br />
              monster clogs.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="hair">
            <h3>
              Hair catches things and tangles<br />
              almost like dental floss.<br />
              It’s a big clogger!
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="meds">
            <h3>
              This is a BIG NO!<br />
              Medications are not removed in<br />
              treatment plants and contaminate<br />
              water supplies. They are very<br />
              bad for animals and people.
            </h3>
        </skoash.ListItem>,
        <skoash.ListItem data-ref="chemicals">
            <h3>
              Sounds surprising!<br />
              The chemicals are toxic and can<br />
              damage animals, humans,<br />
              and the environment.
            </h3>
        </skoash.ListItem>,  
      ]}
    
      revealAssets={[
        <skoash.Audio ref="wipes" type="voiceOver" src="media/S_6/VO_6.3.mp3" />,
        <skoash.Audio ref="diapers" type="voiceOver" src="media/S_6/VO_6.4.mp3" />,
        <skoash.Audio ref="paper" type="voiceOver" src="media/S_6/VO_6.5.mp3" />,
        <skoash.Audio type="sheets" type="voiceOver" src="media/S_6/VO_6.6.mp3" />,
        <skoash.Audio ref="fats" type="voiceOver" src="media/S_6/VO_6.7.mp3" />,
        <skoash.Audio ref="cosmetics" type="voiceOver" src="media/S_6/VO_6.8.mp3" />,
        <skoash.Audio ref="bandanges" type="voiceOver" src="media/S_6/VO_6.9.mp3" />,
        <skoash.Audio type="litter" type="voiceOver" src="media/S_6/VO_6.10.mp3" />,
        <skoash.Audio ref="cotton" type="voiceOver" src="media/S_6/VO_6.11.mp3" />,
        <skoash.Audio ref="gum" type="voiceOver" src="media/S_6/VO_6.12.mp3" />,
        <skoash.Audio ref="floss" type="voiceOver" src="media/S_6/VO_6.13.mp3" />,
        <skoash.Audio ref="hair" type="voiceOver" src="media/S_6/VO_6.14.mp3" />,
        <skoash.Audio ref="meds" type="voiceOver" src="media/S_6/VO_6.15.mp3" />,
        <skoash.Audio type="chemicals" type="voiceOver" src="media/S_6/VO_6.16.mp3" />,
      ]}
    />
    <button className="flush"></button>
    
  </skoash.Screen>
);

export default FlushItScreen;
