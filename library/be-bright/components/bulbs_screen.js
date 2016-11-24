import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="bulbs"
            className="reveal-screen"
        >
            <skoash.Image src="media/_images/frame3.lightning.png" className="hidden" />
            <skoash.Image src="media/_sprites/sprites.why.png" className="hidden" />
            <skoash.Image src="media/_images/frame4.smoke.png" className="hidden" />
            <skoash.Image src="media/_images/frame5.smoke.png" className="hidden" />
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_3/VO_3.1.mp3" />
            <div className="title animated">
                <div>
                    Why does Mr. Eco want you to turn off the lights?
                </div>
                <div>
                    Why does Mr. Eco want you to turn off the lights?
                </div>
            </div>
            <SelectableReveal
                ref="selectable-reveal"
                selectableList={[
                    <li className="animated" correct={true}></li>,
                    <li className="animated" correct={true}></li>,
                    <li className="animated" correct={true}></li>,
                    <li className="animated" correct={true}></li>
                ]}
                selectableSelectClass="HIGHLIGHTED"
                revealList={[
                    <li>
                        <p>Light bulbs burn electricity!</p>
                    </li>,
                    <li>
                        <p>Making electricity burns fossil fuels!</p>
                    </li>,
                    <li>
                        <p>Burning fossil fuels contributes<br/> to bad air quality and climate change!</p>
                    </li>,
                    <li>
                        <p>Leaving the lights on when<br/> you don’t need them costs money!</p>
                        <div className="dollars">
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                        </div>
                        <div className="dollars">
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                        </div>
                        <div className="dollars">
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                        </div>
                        <div className="dollars">
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                        </div>
                        <div className="dollars">
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                            <skoash.Image src="media/_images/dollar.sign.png" />
                        </div>
                    </li>
                ]}
                revealAssets={[
                    <skoash.Audio type="voiceOver" src="media/S_3/VO_3.2.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_3/VO_3.3.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_3/VO_3.4.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_3/VO_3.5.mp3" delay={2000} />,
                    <skoash.Audio data-ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
