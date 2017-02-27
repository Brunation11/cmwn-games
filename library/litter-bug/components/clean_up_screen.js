import Reveal from 'shared/components/reveal/0.1';
import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var toggleSun = function (sun) {
    skoash.trigger('passData', {sun});
};

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="clean-up"
            onComplete={toggleSun.bind(null, true)}
            onOpen={toggleSun.bind(null, false)}
        >
            <Reveal
                ref="reveal"
                openOnStart="0"
                assets={[
                    <skoash.Audio
                        type="voiceOver"
                        src={`${CMWN.MEDIA.VO}vo-3-1.mp3`}
                    />
                ]}
                list={[
                    <skoash.Component ref="center" className="center" type="li">
                        <skoash.Component ref="frame" className="frame">
                            <skoash.Image
                                ref="background"
                                className="background"
                                src={`${CMWN.MEDIA.FRAME}fr-1.png`}
                            />
                            <div className="content-group center">
                                <div>
                                    <h2>Let’s clean up the mess left by Litterbugs!</h2>
                                    <p>
                                        Click or touch each item<br/>
                                        and remove it from the park.
                                    </p>
                                </div>
                            </div>
                        </skoash.Component>
                    </skoash.Component>
                ]}
            />
            <SelectableReveal
                ref="trash"
                className="trash"
                selectableSelectClass="HIGHLIGHTED"
                allCorrect
                assets={[
                    <skoash.Audio ref="correct" type="sfx" src={`${CMWN.MEDIA.EFFECT}s-3-1-mp3`} />
                ]}
                selectableList={[
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="bottle"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="card-board-first"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="card-board-second"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="bag"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="paper-first"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="paper-second"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="paper-third"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="paper-fourth"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="batteries"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="banana"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="glass"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="tuna"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="glass-bottle"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="newspaper"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="soda-first"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="soda-second"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="can"
                    />,
                    <skoash.Component
                        type="li"
                        checkComplete={false}
                        className="tires"
                    />,
                ]}
            />
        </skoash.Screen>
    );
}
