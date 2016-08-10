var InfoQuestionScreen = (
  <skoash.Screen
    id="info-question"
    silentComplete
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_3/VO_3.1.mp3" />
    <skoash.Audio ref="button" type="sfx" src="media/S_6/S_6.2.mp3" complete />
    <skoash.Image ref="toilet" className="toilet" src="media/S_3/img_3.1.png" />
    <div className="message center inline" pl-bg="media/images/frame.png">
        <h3>
            Did you ever wonder<br />
            what happens when<br />
            you flush?
        </h3>
    </div>
  </skoash.Screen>
);

export default InfoQuestionScreen;
