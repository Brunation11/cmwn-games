import CatchGameScreenComponent from './catch_game_screen_component';

export default function (props, ref, key) {
    return CatchGameScreenComponent(props, ref, key, {
        id: 'catch-game-lvl-4',
        level: 4,
        timeout: 60000,
        dropTimeout: 1000,
        dropSpeed: 'medium',
        points: {
            goal: 50,
            correct: 5,
            incorrect: -10
        },
        dropPoints: ['left', 'middle', 'right'],
        bin: [
            {
                className: 'fish',
                message: ''
            },
            {
                className: 'turtle',
                message: ''
            },
            {
                className: 'frog',
                message: ''
            },
            {
                className: 'plant',
                message: ''
            },
            {
                className: 'trash wipes',
                message: 'trash'
            },
            {
                className: 'trash litter',
                message: 'trash'
            },
            {
                className: 'trash paper-towels',
                message: 'trash'
            },
            {
                className: 'trash cue-tips',
                message: 'trash'
            },
            {
                className: 'trash oil',
                message: 'trash'
            },
            {
                className: 'trash floss',
                message: 'trash'
            },
            {
                className: 'trash bandaid',
                message: 'trash'
            },
            {
                className: 'trash medicine',
                message: 'trash'
            },
            {
                className: 'trash diaper',
                message: 'trash'
            },
            {
                className: 'trash gum',
                message: 'trash'
            },
            {
                className: 'trash tissue',
                message: 'trash'
            },
            {
                className: 'trash hair',
                message: 'trash'
            },
            {
                className: 'trash make-up',
                message: 'trash'
            },
            {
                className: 'trash chemicals',
                message: 'trash'
            }
        ],
        vos: [
            <skoash.MediaSequence
                ref="level-complete"
                silentOnStart
            >
                <skoash.Audio
                    type="sfx"
                    src="media/audio/LevelComplete.mp3"
                />
                <skoash.Audio
                    type="voiceOver"
                    src="media/audio/lvl-4-complete.mp3"
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="try-again"
                silentOnStart
            >
                <skoash.Audio
                    type="sfx"
                    src="media/audio/LevelFail.mp3"
                    complete
                />
                <skoash.Audio
                    type="voiceOver"
                    src="media/audio/try-again.mp3"
                    complete
                />
            </skoash.MediaSequence>
        ],
        revealPromptList: [
            <skoash.Component data-ref="level-complete" className="level-four-complete">
                <skoash.Component className="frame">
                    <skoash.Component className="banner" />
                    <span>
                        You're becoming an<br />
                        expert Fish Saver!
                    </span>
                </skoash.Component>
            </skoash.Component>,
            <skoash.Component data-ref="try-again">
                <skoash.Component className="frame">
                    <span>
                        The water is polluted<br />
                        and the fish are sad!<br />
                        But you have another chance<br />
                        to save the day and clean their water.
                    </span>
                </skoash.Component>
            </skoash.Component>
        ]
    });
}
