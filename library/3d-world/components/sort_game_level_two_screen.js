import SortGameScreenComponent from './sort_game_screen_component';

export default function (props, ref, key) {
    return SortGameScreenComponent(props, ref, key, {
        id: 'sort-game-level-one',
        timeout: 60000,
        prepTimeout: 750,
        vos: [
            <skoash.MediaSequence
        ref="level-up"
        silentOnStart
      >
        <skoash.Audio
          type="voiceOver"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/level_up.mp3'}
        />
        <skoash.Audio
          type="voiceOver"
          src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_did_you2.mp3'}
        />
      </skoash.MediaSequence>,
            <skoash.Audio
        type="voiceOver"
        ref="try-again"
        complete
        src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_try_again.mp3'}
      />,
        ],
        sfx: [
            <skoash.Audio
        type="voiceOver"
        completeTarget="sfx"
        ref="print"
        src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/print_item.mp3'}
        sprite={[0, 500]}
      />
        ],
        revealList: [
            <skoash.Component
        ref="level-up"
        type="li"
      >
        <skoash.Image
          className="hidden"
          src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
        />
        <h3>
          LEVEL UP
        </h3>
        <h4>
          Did You Know?
        </h4>
        <div>
          MakerBot Factory in<br/>
          Brooklyn, New York uses 3D printers<br/>
          to print even more 3D printers!
        </div>
      </skoash.Component>,
            <skoash.Component
        ref="try-again"
        type="li"
      >
        <skoash.Image
          className="minion"
          src={ENVIRONMENT.MEDIA + 'ImageAssets/try.again.minion.png'}
        />
        <skoash.Image
          className="hidden"
          src={ENVIRONMENT.MEDIA + 'Frames/try.again.frame.png'}
        />
        <skoash.Image
          className="hidden"
          src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.nav.png'}
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
