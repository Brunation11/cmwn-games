import LabyrinthScreenComponent from './labyrinth_screen_component';

export default LabyrinthScreenComponent({
  id: 'labyrinth-level-one-screen',
  levelNumber: 1,
  maxScore: 40,
  itemsCount: 4,
  enemiesCount: 3,
  openOnStart: '0',
  vos: [
    <skoash.Audio type="voiceOver" src="media/_sounds/_vos/Instructions.mp3" />,
    <skoash.Audio type="voiceOver" src="media/_sounds/_vos/LevelUp1.mp3" />,
    <skoash.Audio type="voiceOver" src="media/_sounds/_vos/TryAgain.mp3" complete />,
  ],
  revealList: [
    <skoash.Component className="labyrinth-frame">
      <skoash.Image className="eco" src="media/_images/mr.eco.png" />
      <div className="copy">
        <p>
          Move Mr. Eco<br/>
          by using the arrow keys<br/>
          and help him<br/>
          turn off the lights!
        </p>
        <div className="reveal-arrows">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </skoash.Component>,
    <skoash.Component className="labyrinth-frame level-up">
      <skoash.Image className="eco" src="media/_images/mr.eco.png" />
      <div className="copy">
        <p>
          <h2>Level up!</h2>
          <h2>Level up!</h2>
          <span>ECO-TIP:</span> Save energy by walking through your own house<br/>
          before you leave and making sure all the lights are out.
        </p>
      </div>
    </skoash.Component>,
    <skoash.Component className="labyrinth-frame try-again">
      <skoash.Image className="eco" src="media/_images/mr.eco.png" />
      <div className="copy">
        <p>
          Sorry,<br/>
          Try Again!
        </p>
        <button
          onClick={function () {
            skoash.trigger('updateState', {
              path: 'closeReveal',
              data: true,
            });
          }}
        />
      </div>
    </skoash.Component>
  ],
});
