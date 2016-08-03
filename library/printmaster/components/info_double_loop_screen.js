var InfoDoubleLoopScreen = (
  <skoash.Screen
    id="info-double-loop"
    className="types"
  >
    <skoash.Audio ref="vo" type="voiceOver" src="media/S_7/VO_7.1.mp3" />
    <skoash.Image ref="img" className="animated" src="media/S_7/img_7.1.gif" />
    <skoash.Image ref="frame-img" className="hidden" src="media/_Frame/Fr_2.png" />
    <div className="frame">
      <div>
        <div>
          <span className="animated">
            <h2 className="typing">
              DOUBLE LOOP
            </h2>
          </span>
          <p className="animated">
            Double Loops show loops<br/>
            going in two directions.
          </p>
        </div>
      </div>
    </div>
  </skoash.Screen>
);

export default InfoDoubleLoopScreen;
