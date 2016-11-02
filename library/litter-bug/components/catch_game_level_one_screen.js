import classNames from 'classnames';

import CatchGameScreenComponent from './catch_game_screen_component';

export default function (props, ref, key) {
  return CatchGameScreenComponent(props, ref, key, {
    id: 'catch-game-level-one',
    level: 1,
    timeout: 60000,
    prepTimeout: 1000,
    openOnStart: 'instructions',
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
      <skoash.Component ref="instructions" className="instructions" type="li">
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
        <div>
          <skoash.Image
            className="instructions"
            src={'media/_assets/SpritesAnimations/sprite.minion.png'}
          />
          <skoash.Image
            className="words"
            src={'media/_assets/SpritesAnimations/sprite.minion.png'}
          />
          <button
            onClick={function () {
              skoash.trigger('updateState', {
                path: 'reveal',
                data: {
                  close: true,
                }
              });
            }}
          />
        </div>
      </skoash.Component>,
      <skoash.Component
        ref="level-up"
        className="level-up"
        type="li"
      >
        <skoash.Image
          className="hidden"
          src={'media/_assets/SpritesAnimations/sprite.minion.png'}
        />
      </skoash.Component>,
      <skoash.Component
        ref="try-again"
        className="try-again"
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
      </skoash.Component>,
    ]
  });
}
