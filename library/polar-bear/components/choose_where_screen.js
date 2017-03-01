import SelectableCanvasReveal from 'shared/components/selectable_canvas_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="choose-where"
        >
            <skoash.Component className="map">
                <SelectableCanvasReveal
                    ref="selectable-canvas-reveal"
                    selectableSelectClass="HIGHLIGHTED"
                    answers={['0', '1', '2', '3', '4', '5']}
                    assets={[
                        <skoash.Audio
                            ref="correct"
                            type="sfx"
                            src={`${CMWN.MEDIA.EFFECT}answer-correct.mp3`}
                        />,
                        <skoash.Audio
                            ref="incorrect"
                            type="sfx"
                            src={`${CMWN.MEDIA.EFFECT}answer-incorrect.mp3`}
                            complete
                        />
                    ]}
                    selectableList={[
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="greenland"
                                className="greenland animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-3.png`}
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="alaska"
                                className="alaska animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-4.png`}
                            />
                       </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="canada"
                                className="canada animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-5.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="norway"
                                className="norway animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-8.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="north-pole"
                                className="north-pole animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-10.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="russia"
                                className="russia animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-11.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="finland"
                                className="finland animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-6.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="sweedan"
                                className="sweden animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-7.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="denmark"
                                className="denmark animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-9.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="iceland"
                                className="iceland animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-12.png`}
                                crossOrigin="Anonymous"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                className="border animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-13.png`}
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                className="labels animated"
                                src={`${CMWN.MEDIA.IMAGE}img-9-2.png`}
                            />
                        </skoash.Component>,
                    ]}
                    revealAssets={[
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-9-2.mp3`}
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-9-6.mp3`}
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-9-3.mp3`}
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-9-5.mp3`}
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-9-1.mp3`}
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src={`${CMWN.MEDIA.VO}vo-9-4.mp3`}
                            delay={500}
                        />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
