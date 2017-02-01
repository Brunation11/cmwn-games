import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="think"
            className="large-frame"
        >
            <skoash.Audio type="voiceOver" src="media/S_2/VO_2.1.mp3"/>
            <skoash.Image className="hidden" ref="hidden" src="media/_Frames/FR_1.png"/>
            <skoash.Component className="frame animated">
                <p>
                    What do you think of when you hear<br />
                    the word <span className="inline drought-word"/>
                </p>
                <SelectableReveal
                    ref="selectable-reveal"
                    answers={[
                        'dry',
                        'parched',
                        'dusty',
                        'hot',
                        'noWater',
                        'thirsty',
                        'arid'
                    ]}
                    selectableSelectClass="HIGHLIGHTED"
                    selectableList={[
                        <li className="dry" data-ref="dry" correct></li>,
                        <li className="green" data-ref="green"></li>,
                        <li className="parched" data-ref="parched" correct></li>,
                        <li className="monsoon" data-ref="monsoon"></li>,
                        <li className="damp" data-ref="damp"></li>,
                        <li className="dusty" data-ref="dusty" correct></li>,
                        <li className="hot" data-ref="hot" correct></li>,
                        <li className="no-water" data-ref="noWater" correct></li>,
                        <li className="thirsty" data-ref="thirsty" correct></li>,
                        <li className="wet" data-ref="wet"></li>,
                        <li className="tropical" data-ref="tropical"></li>,
                        <li className="arid" data-ref="arid" correct></li>,
                        <li className="steamy" data-ref="steamy"></li>,
                        <li className="balmy" data-ref="balmy"></li>,
                        <li className="swampy" data-ref="swampy"></li>,
                    ]}
                    revealAssets={[
                        <skoash.Audio type="voiceOver" data-ref="dry" src="media/S_2/VO_2.2.mp3" />,
                        <skoash.Audio type="voiceOver" data-ref="parched" src="media/S_2/VO_2.3.mp3" />,
                        <skoash.Audio type="voiceOver" data-ref="dusty" src="media/S_2/VO_2.4.mp3" />,
                        <skoash.Audio type="voiceOver" data-ref="hot" src="media/S_2/VO_2.5.mp3" />,
                        <skoash.Audio type="voiceOver" data-ref="noWater" src="media/S_2/VO_2.6.mp3" />,
                        <skoash.Audio type="voiceOver" data-ref="thirsty" src="media/S_2/VO_2.7.mp3" />,
                        <skoash.Audio type="voiceOver" data-ref="arid" src="media/S_2/VO_2.8.mp3" />
                    ]}
                    assets={[
                        <skoash.Audio
                            type="sfx"
                            ref="incorrect"
                            src="media/S_2/S_2.1.mp3"
                            complete={true}
                            checkComplete={false}
                        />
                    ]}
                    hideReveal={true}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
