var CarouselScreen = (
  <skoash.Screen
    id="carousel"
  >
    <skoash.Audio ref="correct" type="sfx" src="media/S_10/S_10.3.mp3" />
    <skoash.Audio ref="incorrect" type="sfx" src="media/S_10/S_10.4.mp3" />
    <div className="group">
      <div className="viewport" pl-bg="media/S_10/img_10.3.png">
        <ul className="slide" pl-component="carousel" delay={400}>
          <li ref="loops" pl-bg="media/S_10/img_10.4.png"></li>
          <li ref="whorl" pl-bg="media/S_10/img_10.5.png"></li>
          <li ref="arch" pl-bg="media/S_10/img_10.6.png"></li>
          <li ref="doubleloops" pl-bg="media/S_10/img_10.7.png"></li>
          <li ref="loops" pl-bg="media/S_10/img_10.4.png"></li>
          <li ref="whorl" pl-bg="media/S_10/img_10.5.png"></li>
          <li ref="arch" pl-bg="media/S_10/img_10.6.png"></li>
          <li ref="doubleloops" pl-bg="media/S_10/img_10.7.png"></li>
        </ul>
      </div>
      <skoash.Image className="hidden" src="media/S_10/img_10.8.png" />
      <div className="target">
        <skoash.Image ref="loops" amount={2} className="animated" src="media/S_10/img_10.11.png" />
        <skoash.Image ref="whorl" amount={3} className="animated" src="media/S_10/img_10.15.png" />
        <skoash.Image ref="arch" amount={3} className="animated" src="media/S_10/img_10.18.png" />
        <skoash.Image ref="doubleloops" amount={2} className="animated" src="media/S_10/img_10.20.png" />
        <skoash.Image ref="whorl" amount={2} className="animated" src="media/S_10/img_10.14.png" />
        <skoash.Image ref="doubleloops" amount={3} className="animated" src="media/S_10/img_10.21.png" />
        <skoash.Image ref="arch" amount={2} className="animated" src="media/S_10/img_10.17.png" />
        <skoash.Image ref="loops" amount={3} className="animated" src="media/S_10/img_10.12.png" />
      </div>
      <div pl-component="score" pl-bg="media/S_10/img_10.9.png" pl-transclude="images" pl-complete-delay="1s">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div pl-component="cannon" pl-bg="media/S_10/img_10.2.png" pl-message-path="screen.target">
        <div ref="ball" pl-action="fire()"></div>
      </div>
    </div>
    <div pl-component="modal">
      <div pl-bg="media/_Frame/Fr_3.png">
        <div pl-component="reveal" className="center">
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.3.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.5.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.4.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.6.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.7.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.8.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.9.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.10.mp3" />
          <skoash.Audio className="voiceOver" src="media/S_10/VO_10.1.mp3" />
          <ul>
            <li>
              No two fingerprints<br/>
              are the same!
            </li>
            <li>
              The chance of having the same<br/>
              fingerprint as someone else<br/>
              is 1 in 64 billion.
            </li>
            <li>
              Fingerprints are more<br/>
              unique than DNA.
            </li>
            <li>
              Fingerprinting is part of the<br/>
              science of biometrics which uses<br/>
              physical characteristics<br/>
              as identifiers.
            </li>
            <li>
              The ridges that make up<br/>
              fingerprints are called<br/>
              friction ridges.
            </li>
            <li>
              Your fingerprints never change.
            </li>
            <li>
              Your fingertips contain pores<br/>
              that attach to sweat glands.<br/>
              The sweat is what causes you<br/>
              to leave prints on the<br/>
              things you touch.
            </li>
            <li>
              Fingerprinting is a technique<br/>
              know as dactyloscopy.
            </li>
            <li>
              <p className="typing">CLICK WHEN THE PRINT</p>
              <p className="typing">MATCHES THE DESCRIPTION</p>
              <p className="typing">AND GET A COOL FACT!</p>
            </li>
          </ul>
        </div>
        <button className="reveal-close" pl-action="close()"></button>
      </div>
    </div>

  </skoash.Screen>
);

export default CarouselScreen;
