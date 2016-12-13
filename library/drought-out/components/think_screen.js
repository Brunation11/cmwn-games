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
                <skoash.MediaCollection
                    play={_.invoke(props, 'data.selectable.target.getAttribute', 'data-ref')}
                    onPlay={function () {
                        this.updateGameState({
                            path: 'selectable',
                            data: {
                                target: null
                            }
                        });
                    }}
                >
                    <skoash.Audio type="voiceOver" ref="dry" src="media/S_2/VO_2.2.mp3" />
                    <skoash.Audio type="voiceOver" ref="parched" src="media/S_2/VO_2.3.mp3" />
                    <skoash.Audio type="voiceOver" ref="dusty" src="media/S_2/VO_2.4.mp3" />
                    <skoash.Audio type="voiceOver" ref="hot" src="media/S_2/VO_2.5.mp3" />
                    <skoash.Audio type="voiceOver" ref="noWater" src="media/S_2/VO_2.6.mp3" />
                    <skoash.Audio type="voiceOver" ref="thirsty" src="media/S_2/VO_2.7.mp3" />
                    <skoash.Audio type="voiceOver" ref="arid" src="media/S_2/VO_2.8.mp3" />
                    <skoash.Audio
                        type="sfx"
                        ref="incorrect"
                        src="media/S_2/S_2.1.mp3"
                        complete={true}
                        checkComplete={false}
                    />
                </skoash.MediaCollection>
                <skoash.Selectable
                    dataTarget="selectable"
                    answers={[
                        'dry',
                        'parched',
                        'dusty',
                        'hot',
                        'noWater',
                        'thirsty',
                        'arid'
                    ]}
                    selectClass="HIGHLIGHTED"
                    list={[
                        <li className="dry" data-ref="dry" correct></li>,
                        <li className="green" data-ref="incorrect"></li>,
                        <li className="parched" data-ref="parched" correct></li>,
                        <li className="monsoon" data-ref="incorrect"></li>,
                        <li className="damp" data-ref="incorrect"></li>,
                        <li className="dusty" data-ref="dusty" correct></li>,
                        <li className="hot" data-ref="hot" correct></li>,
                        <li className="no-water" data-ref="noWater" correct></li>,
                        <li className="thirsty" data-ref="thirsty" correct></li>,
                        <li className="wet" data-ref="incorrect"></li>,
                        <li className="tropical" data-ref="incorrect"></li>,
                        <li className="arid" data-ref="arid" correct></li>,
                        <li className="steamy" data-ref="incorrect"></li>,
                        <li className="balmy" data-ref="incorrect"></li>,
                        <li className="swampy" data-ref="incorrect"></li>,
                    ]}
                />
            </skoash.Component>
        </skoash.Screen>
    );
}
