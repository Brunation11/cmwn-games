import LabyrinthScreenComponent from './labyrinth_screen_component';

export default function (props, ref, key) {
    return LabyrinthScreenComponent(props, ref, key, {
        id: 'labyrinth-level-two-screen',
        levelNumber: 2,
        itemsCount: 6,
        enemiesCount: 4,
        disableChance: .75,
        disableInterval: 4000,
        vos: [
            <skoash.Audio ref="level-up" type="voiceOver" src={`${CMWN.MEDIA.VO}level-up2.mp3`} />,
            <skoash.Audio ref="try-again" type="voiceOver" src={`${CMWN.MEDIA.VO}try-again.mp3`} complete />,
        ],
        revealList: [
            <skoash.Component ref="level-up" className="labyrinth-frame level-up">
                <skoash.Image className="eco" src={`${CMWN.MEDIA.IMAGE}mr-eco.png`} />
                <div className="copy">
                    <p>
                        <h2>Level up!</h2>
                        <h2>Level up!</h2>
                        <span>ECO-TIP:</span> Use notes to create reminders<br/>
                        to help your family remember to flip that switch.
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
