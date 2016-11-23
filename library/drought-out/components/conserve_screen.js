import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
    var closeReveal = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                close: true
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="conserve"
            className={_.get(props, 'data.selectable.target') ? 'SELECTING' : null}
        >
            <skoash.Image src="media/S_17/img_17.1.png" />
            <skoash.Image className="hidden" src="media/_Frames/FR_4.png" />
            <skoash.Image className="hidden" src="media/S_17/img_sp_17.1.png" />
            <skoash.Image className="hidden" src="media/S_17/img_sp_17.2.png" />
            <div
                id="door-sprite"
                className={
                    _.get(props, 'data.reveal.open') ? 'open' : ''
                }
            />
            <Selectable
                ref="selectable"
                list={[
                    <li
                        id="door"
                        className={
                            _.get(props, 'data.reveal.open') ? 'open' : ''
                        }
                    />
                ]}
                dataTarget="selectable"
                selectRespond={function () {
                    var index = _.get(props, 'data.reveal.index');
                    if (!_.isFinite(index) || index > 7) index = -1;
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            index: index + 1
                        }
                    });
                }}
            />
            <skoash.Component ref="frame" className="frame animated">
                <Reveal
                    ref="reveal"
                    openReveal={'' + _.get(props, 'data.reveal.index', '')}
                    closeReveal={_.get(props, 'data.reveal.close')}
                    onOpen={function () {
                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                open: true,
                                close: false,
                            }
                        });
                    }}
                    onClose={function () {
                        this.updateGameState({
                            path: 'reveal',
                            data: {
                                open: false,
                                close: false,
                            }
                        });
                    }}
                    list={[
                        <li>
                            Don't let the water<br />
                            run while<br />
                            washing dishes
                        </li>,
                        <li>
                            Don't let the water<br />
                            run continuously while<br />
                            brushing your teeth
                        </li>,
                        <li>
                            Use leftover water from<br />
                            the melted ice in your<br />
                            glass to water plants
                        </li>,
                        <li>
                            Only wash full loads<br />
                            of clothes
                        </li>,
                        <li>
                            Use lukewarm water<br /><br />
                            Don't let it<br />
                            run to warm up
                        </li>,
                        <li>
                            Collect rain water<br />
                            in a bucket for plants<br />
                            or cleaning or flushing
                        </li>,
                        <li>
                            Throw trash in<br />
                            a waste basket<br /><br />
                            Don't flush it
                        </li>,
                        <li>
                            Wash the car in the grass<br />
                            instead of the driveway
                        </li>,
                        <li>
                            Sweep sidewalks instead<br />
                            of hosing them
                        </li>
                    ]}
                    assets={[
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.2.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.3.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.4.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.5.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.6.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.7.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.9.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.10.mp3"
                        />,
                        <skoash.Audio
                            onComplete={closeReveal}
                            type="voiceOver"
                            src="media/S_17/VO_17.11.mp3"
                        />,
                        <skoash.Audio
                            data-ref="open-sound"
                            type="sfx"
                            src="media/_Reveals/S_RV_1.mp3"
                        />,
                        <skoash.Audio
                            data-ref="close-sound"
                            type="sfx"
                            src="media/_Reveals/S_RV_2.mp3"
                            delay={500}
                        />
                    ]}
                    onAudioComplete={function (asset) {
                        if (asset.props.type === 'voiceOver') this.playMedia('close-sound');
                    }}
                />
            </skoash.Component>
            <skoash.Audio type="voiceOver" src="media/S_17/VO_17.1.mp3" />
        </skoash.Screen>
    );
}
