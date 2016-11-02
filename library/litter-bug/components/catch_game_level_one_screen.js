import classNames from 'classnames';

import CatchGameScreenComponent from './catch_game_screen_component';

export default function (props, ref, key) {
  return CatchGameScreenComponent(props, ref, key, {
    id: 'catch-game-level-one',
    timeout: 60000,
    prepTimeout: 1000,
    openOnStart: 'in-this',
    vos: [
      // <skoash.MediaSequence
      //   ref="in-this"
      //   silentOnStart
      // >
        // <skoash.Audio
        //   type="voiceOver"
        //   completeTarget="in-this"
        //   src={'media/_assets/SoundAssets/vos/VO_in_this.mp3'}
        // />
        // <skoash.Audio
        //   type="voiceOver"
        //   src={'media/_assets/SoundAssets/vos/VO_be_sure.mp3'}
        // />
      // </skoash.MediaSequence>,
      // <skoash.MediaSequence
      //   ref="level-up"
      //   silentOnStart
      // >
        // <skoash.Audio
        //   type="voiceOver"
        //   src={'media/_assets/SoundAssets/effects/level_up.mp3'}
        // />
        // <skoash.Audio
        //   type="voiceOver"
        //   src={'media/_assets/SoundAssets/vos/VO_did_you1.mp3'}
        // />
      // </skoash.MediaSequence>,
      // <skoash.Audio
      //   type="voiceOver"
      //   ref="try-again"
      //   complete
      //   src={'media/_assets/SoundAssets/vos/VO_try_again.mp3'}
      // />,
    ],
    sfx: [
      // <skoash.Audio
      //   type="voiceOver"
      //   completeTarget="sfx"
      //   ref="print"
      //   src={'media/_assets/SoundAssets/effects/print_item.mp3'}
      //   sprite={[0, 500]}
      // />
    ],
    revealList: [
      <skoash.Component ref="in-this" type="li">
        <skoash.Image
          className="frame"
          src={'media/_assets/Frames/ins.green.frame.png'}
        />
        <skoash.Image
          className="balloon"
          src={'media/_assets/ImageAssets/img.quit.png'}
        />
        <skoash.Image
          className="bins"
          src={'media/_assets/ImageAssets/ins.bins.png'}
        />
        <skoash.Image
          className="hidden"
          src={'media/_assets/SpritesAnimations/sprite.minion.png'}
        />
        <div
          className={classNames('words', 'in-this-game', {
            show: !_.get(props, 'data.in-this.complete', false)
          })}
        >
          <div>
            In this game, you will sort items
          </div>
          <div>
            dropped from the 3D printer
          </div>
          <div>
            by the material it is made from.
          </div>
          <div className="line" />
          <div>
            Slide the printer head to
          </div>
          <div>
            drop items into the correct bin.
          </div>
        </div>
        <div
          className={classNames('words', 'be-sure', {
            show: _.get(props, 'data.in-this.complete', false)
          })}
        >
          <div>
            Be sure to collect enough points
          </div>
          <div>
            before the timer runs out!
          </div>
          <button
            onClick={function () {
              skoash.trigger('updateState', {
                path: 'reveal',
                data: {
                  close: true,
                }
              });
            }}
          >
            Start Game
          </button>
        </div>
      </skoash.Component>,
      <skoash.Component
        ref="level-up"
        type="li"
      >
        <skoash.Image
          className="hidden"
          src={'media/_assets/SpritesAnimations/sprite.minion.png'}
        />
        <h3>
          LEVEL UP
        </h3>
        <h4>
          Did You Know?
        </h4>
        <div>
          Even food can be 3D printed!<br/>
          While still in the experimental stages,<br/>
          NASA hopes one day<br/>
          to print food in space!
        </div>
      </skoash.Component>,
      <skoash.Component
        ref="try-again"
        type="li"
      >
        <skoash.Image
          className="minion"
          src={'media/_assets/ImageAssets/try.again.minion.png'}
        />
        <skoash.Image
          className="hidden"
          src={'media/_assets/Frames/try.again.frame.png'}
        />
        <skoash.Image
          className="hidden"
          src={'media/_assets/SpritesAnimations/sprite.nav.png'}
        />
        <div>
          <h3>
            TRY AGAIN
          </h3>
          {'You didn\'t win this time —'}<br/>
          {'but don\'t worry, you have another chance!'}
        </div>
      </skoash.Component>,
    ]
  });
}
