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
                            src="media/audio/answer-correct.mp3"
                        />,
                        <skoash.Audio
                            ref="incorrect"
                            type="sfx"
                            src="media/audio/answer-incorrect.mp3"
                            complete
                        />
                    ]}
                    selectableList={[
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="greenland"
                                className="greenland animated"
                                src="media/images/map/img_9.3.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="alaska"
                                className="alaska animated"
                                src="media/images/map/img_9.4.png"
                            />
                       </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="canada"
                                className="canada animated"
                                src="media/images/map/img_9.5.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="norway"
                                className="norway animated"
                                src="media/images/map/img_9.8.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="north-
                                ole" className="north
                                pole animated" src="media/images/map/img_9.10.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="russia"
                                className="russia animated"
                                src="media/images/map/img_9.11.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="finland"
                                className="finland animated"
                                src="media/images/map/img_9.6.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="sweedan"
                                className="sweden animated"
                                src="media/images/map/img_9.7.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="denmark"
                                className="denmark animated"
                                src="media/images/map/img_9.9.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                ref="img"
                                data-ref="iceland"
                                className="iceland animated"
                                src="media/images/map/img_9.12.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                className="border animated"
                                src="media/images/map/img_9.13.png"
                            />
                        </skoash.Component>,
                        <skoash.Component>
                            <skoash.Image
                                className="labels animated"
                                src="media/images/map/img_9.2.png"
                            />
                        </skoash.Component>,
                    ]}
                    revealAssets={[
                        <skoash.Audio
                            type="voiceOver"
                            src="media/audio/map/VO_9.2.mp3"
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src="media/audio/map/VO_9.6.mp3"
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src="media/audio/map/VO_9.3.mp3"
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src="media/audio/map/VO_9.5.mp3"
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src="media/audio/map/VO_9.1.mp3"
                            delay={500}
                        />,
                        <skoash.Audio
                            type="voiceOver"
                            src="media/audio/map/VO_9.4.mp3"
                            delay={500}
                        />
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
