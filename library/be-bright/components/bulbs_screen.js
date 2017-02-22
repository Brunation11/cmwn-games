export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="bulbs"
            className="reveal-screen"
        >
            <skoash.Image src={`${CMWN.MEDIA.FRAME}frame3-lightning.png`} className="hidden" />
            <skoash.Image src={`${CMWN.MEDIA.SPRITE}sprites-why.png`} className="hidden" />
            <skoash.Image src={`${CMWN.MEDIA.FRAME}frame4-smoke.png`} className="hidden" />
            <skoash.Image src={`${CMWN.MEDIA.FRAME}frame5-smoke.png`} className="hidden" />
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-3-1.mp3`} />
            <div className="title animated">
                <div>
                    Why does Mr. Eco want you to turn off the lights?
                </div>
                <div>
                    Why does Mr. Eco want you to turn off the lights?
                </div>
            </div>
            {skoash.mixins.SelectableReveal(props, {
                media: [
                    <skoash.Audio type="voiceOver" ref="0" src={`${CMWN.MEDIA.VO}vo-3-2.mp3`} delay={2000} />,
                    <skoash.Audio type="voiceOver" ref="1" src={`${CMWN.MEDIA.VO}vo-3-3.mp3`} delay={2000} />,
                    <skoash.Audio type="voiceOver" ref="2" src={`${CMWN.MEDIA.VO}vo-3-4.mp3`} delay={2000} />,
                    <skoash.Audio type="voiceOver" ref="3" src={`${CMWN.MEDIA.VO}vo-3-5.mp3`} delay={2000} />,
                ],
                selectables: [
                    <skoash.ListItem className="animated" correct={true}/>,
                    <skoash.ListItem className="animated" correct={true}/>,
                    <skoash.ListItem className="animated" correct={true}/>,
                    <skoash.ListItem className="animated" correct={true}/>,
                ],
                reveals: [
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
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                        </div>
                        <div className="dollars">
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                        </div>
                        <div className="dollars">
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                        </div>
                        <div className="dollars">
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                        </div>
                        <div className="dollars">
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                            <skoash.Image src={`${CMWN.MEDIA.IMAGE}dollar-sign.png`} />
                        </div>
                    </li>
                ],
                SelectableProps: {
                    selectClass: 'HIGHLIGHTED',
                },
                RevealProps: {
                    assets: [
                        <skoash.Audio
                            data-ref="open-sound"
                            type="sfx"
                            src={`${CMWN.MEDIA.EFFECT}s-bu-3.mp3`}
                        />
                    ],
                },
            })}
        </skoash.Screen>
    );
}
