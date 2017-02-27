import classNames from 'classnames';
import CatchGameScreenComponent from './catch_game_screen_component';

export default function (props, ref, key) {
    return CatchGameScreenComponent(props, ref, key, {
        id: 'catch-game-level-three',
        level: 3,
        rows: 5,
        timeout: 120000,
        prepTimeout: 400,
        bin: [
            {
                className: 'mushroom',
                message: ''
            },
            {
                className: 'banana',
                message: 'trash'
            },
            {
                className: 'paper',
                message: 'trash'
            },
            {
                className: 'dog',
                message: ''
            },
            {
                className: 'battery',
                message: 'trash'
            },
            {
                className: 'duck',
                message: ''
            },
            {
                className: 'squirrel',
                message: ''
            },
            {
                className: 'tire',
                message: 'trash'
            },
            {
                className: 'blue-flower',
                message: ''
            },
            {
                className: 'yellow-flower',
                message: ''
            },
            {
                className: 'red-flower',
                message: ''
            },
            {
                className: 'purple-flower',
                message: ''
            },
            {
                className: 'glass',
                message: 'trash'
            },
            {
                className: 'plastic',
                message: 'trash'
            },
        ],
        vos: [
            <skoash.MediaSequence
                ref="level-up"
                silentOnStart
            >
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.EFFECT}win-the-game-1.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}youve-won.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}youve-picked-up.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    playTarget="fall"
                    src={`${CMWN.MEDIA.EFFECT}litterbugfall.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="try-again"
                silentOnStart
            >
                <skoash.Audio
                    type="voiceOver"
                    complete
                    src={`${CMWN.MEDIA.EFFECT}try-again.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    complete
                    src={`${CMWN.MEDIA.VO}try-again.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    complete
                    src={`${CMWN.MEDIA.VO}you-didnt-win.mp3`}
                />
            </skoash.MediaSequence>,
        ],
        sfx: [
            <skoash.Audio
                type="sfx"
                ref="miss"
                src={`${CMWN.MEDIA.EFFECT}lose-points.mp3`}
                complete
            />,
        ],
        revealList: [
            <skoash.Component
                ref="level-up"
                className={classNames('level-up', 'youve-won', {
                    fall: _.get(props, 'data.fall.playing')
                })}
                type="li"
            >
                <skoash.Image
                    className="hidden"
                    src={`${CMWN.MEDIA.IMAGE}litterbug.png`}
                />
                <div>
                    <div className="congratulations" />
                    <div className="level-up" />
                </div>
            </skoash.Component>,
            <skoash.Component
                ref="try-again"
                className="try-again"
                type="li"
            >
                <div>
                    <div className="try-again" />
                    <div className="words" />
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
        ]
    });
}
