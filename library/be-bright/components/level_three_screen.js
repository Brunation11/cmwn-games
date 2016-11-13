import classNames from 'classnames';

import LabyrinthScreenComponent from './labyrinth_screen_component';

export default function (props, ref, key) {
  return LabyrinthScreenComponent(props, ref, key, {
    id: 'labyrinth-level-three-screen',
    levelNumber: 3,
    itemsCount: 7,
    enemiesCount: 6,
    disableChance: .75,
    disableInterval: 2000,
    vos: [
      <skoash.MediaSequence ref="level-up" silentOnStart>
        <skoash.Audio
          type="voiceOver"
          src="media/_sounds/_vos/YouWon.mp3"
          sprite={[0, 2000]}
        />
        <skoash.Audio
          type="voiceOver"
          playTarget="thanks"
          src="media/_sounds/_vos/YouWon.mp3"
          sprite={[2000, 2750]}
        />
        <skoash.Audio
          type="voiceOver"
          playTarget="caring"
          src="media/_sounds/_vos/YouWon.mp3"
          sprite={[4750, 2000]}
        />
      </skoash.MediaSequence>,
      <skoash.Audio ref="try-again" type="voiceOver" src="media/_sounds/_vos/TryAgain.mp3" complete />,
    ],
    revealList: [
      <skoash.Component ref="level-up" className="labyrinth-frame win">
        <skoash.Image className="eco" src="media/_images/mr.eco.png" />
        <skoash.Image className="trophy" src="media/_images/win.trophy.png" />
        <skoash.Image className="hidden" src="media/_images/energyhog.greyscale.png" />
        <div className={classNames('hog', {
          blur: _.get(props, 'data.thanks.playing'),
          hide: _.get(props, 'data.caring.playing'),
        })} />
        <div className="copy">
          <p>
            <skoash.Image src="media/_images/text.congrats.png" />
            <skoash.Image src="media/_images/text.youvewon.png" />
            <div className={classNames({display: _.get(props, 'data.thanks.playing')})}>Thanks for being an Eco-Hero</div>
            <div className={classNames({display: _.get(props, 'data.caring.playing')})}>and caring about the environment!</div>
          </p>
        </div>
      </skoash.Component>,
      <skoash.Component ref="try-again" className="labyrinth-frame try-again">
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
}
