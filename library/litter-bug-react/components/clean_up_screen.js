var CleanUpScreen = (
  <skoash.Screen
    id="title"
  >
    <div pl-component="frame" pl-require="vo">
      <audio ref="vo" class="voice-over" src="media/S_3/VO_3.1.mp3" preload="none" pl-required></audio>
      <div class="center">
        <div class="frame">
          <img class="background" src="media/_Frames/FR_1.png" />
          <div class="content-group center">
            <div>
              <h2>Let’s clean up the mess left by Litterbugs!</h2>
              <p>
                Click or touch each item<br/>
                and remove it from the park.
              </p>
            </div>
          </div>
        </div>
        <button class="next-screen" pl-action="next()"></button>
      </div>
    </div>
    <div ref="trash" class="trash" pl-component="selectable-remove" pl-select-state="highlight">
      <audio ref="correct" class="sfx" src="media/S_3/S_3.1.mp3" preload="none"></audio>
      <div class="center">
        <ul class="items" pl-action="select()">
          <li class="bottle"></li>
          <li class="card-board-first"></li>
          <li class="card-board-second"></li>
          <li class="bag"></li>
          <li class="paper-first"></li>
          <li class="paper-second"></li>
          <li class="paper-third"></li>
          <li class="paper-fourth"></li>
          <li class="batteries"></li>
          <li class="banana"></li>
          <li class="glass"></li>
          <li class="tuna"></li>
          <li class="glass-bottle"></li>
          <li class="newspaper"></li>
          <li class="soda-first"></li>
          <li class="soda-second"></li>
          <li class="can"></li>
          <li class="tires"></li>
        </ul>
      </div>
    </div>
  </skoash.Screen>
);

export default CleanUpScreen;
