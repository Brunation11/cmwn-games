import LabyrinthScreenComponent from './labyrinth_screen_component';

export default function (props, ref, key) {
    var onCloseInstructions = function () {
        skoash.trigger('updateState', {
            path: 'openReveal',
            data: 'count-down',
        });

        setTimeout(() => {
            skoash.trigger('updateState', {
                path: 'closeReveal',
                data: true,
            });
        }, 3000);
    };

    return LabyrinthScreenComponent(props, ref, key, {
        id: 'labyrinth-level-one-screen',
        levelNumber: 1,
        itemsCount: 1,
        enemiesCount: 0,
        disableChance: .75,
        disableInterval: 4000,
        // openOnStart: 'instructions',
        vos: [
            <skoash.MediaSequence
                ref="instructions"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-1"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/UseTheArrowKeys.mp3`}
                />
                <skoash.Audio
                    ref="vo-2"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/ClickScreen.mp3`}
                />
            </skoash.MediaSequence>,
            <skoash.MediaSequence
                ref="level-up"
                silentOnStart={true}
            >
                <skoash.Audio
                    ref="vo-3"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/HomeIntro.mp3`}
                />
                <skoash.Audio
                    ref="vo-4"
                    type="voiceOver"
                    src={`${ENVIRONMENT.MEDIA}SoundAssets/vos/ClickScreen.mp3`}
                />
            </skoash.MediaSequence>
        ],
        revealList: [
            <skoash.Component ref="instructions" className="labyrinth-frame instructions">
                <skoash.Image className="wolf" src={`${ENVIRONMENT.MEDIA}ImageAssets/wolf.fullbody.png`} />
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
                    <button
                        onClick={onCloseInstructions}
                    />
                </div>
            </skoash.Component>
        ],
    });
}
