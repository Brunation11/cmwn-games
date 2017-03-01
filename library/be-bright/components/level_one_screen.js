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
        itemsCount: 4,
        enemiesCount: 3,
        disableChance: .75,
        disableInterval: 4000,
        openOnStart: 'instructions',
        vos: [
            <skoash.Audio ref="instructions" type="voiceOver" src={`${CMWN.MEDIA.VO}instructions.mp3`} />,
            <skoash.Audio ref="level-up" type="voiceOver" src={`${CMWN.MEDIA.VO}level-up1.mp3`} />,
            <skoash.Audio ref="try-again" type="voiceOver" src={`${CMWN.MEDIA.VO}try-again.mp3`} complete />,
        ],
        revealList: [
            <skoash.Component ref="instructions" className="labyrinth-frame instructions">
                <skoash.Image className="eco" src={`${CMWN.MEDIA.IMAGE}mr-eco.png`} />
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
            </skoash.Component>,
            <skoash.Component ref="count-down" className="labyrinth-frame count-down">
                <skoash.Image className="eco" src={`${CMWN.MEDIA.IMAGE}mr-eco.png`} />
                <div className="count">
                    <div>READY</div>
                    <div className="number one">1</div>
                    <div className="number two">2</div>
                    <div className="number three">3</div>
                </div>
            </skoash.Component>,
            <skoash.Component ref="level-up" className="labyrinth-frame level-up">
                <skoash.Image className="eco" src={`${CMWN.MEDIA.IMAGE}mr-eco.png`} />
                <div className="copy">
                    <p>
                        <h2>Level up!</h2>
                        <h2>Level up!</h2>
                        <span>ECO-TIP:</span> Save energy by walking through your own house<br/>
                        before you leave and making sure all the lights are out.
                    </p>
                </div>
            </skoash.Component>,
            <skoash.Component ref="try-again" className="labyrinth-frame try-again">
                <skoash.Image className="eco" src={`${CMWN.MEDIA.IMAGE}mr-eco.png`} />
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
