import _ from 'lodash';

import Reveal from 'shared/components/reveal/0.1';
import SelectableAll from 'shared/components/selectable_all/0.1';
import Randomizer from 'shared/components/randomizer/0.1';

export default function (props, ref, key) {
    function openReveal() {
        var i = _.get(props, 'data.reveal.i', 0);

        skoash.trigger('updateState', {
            path: 'reveal',
            data: {
                'i': i + 1,
                'open': i,
            }
        });
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="jellyfish"
        >
            <SelectableAll
                ref="selectable-all"
                completeOnStart
                selectClass="HIGHLIGHTED"
                selectRespond={openReveal}
                bin={<Randomizer
                    ref="randomizer"
                    bin={[
                        <li className="a">
                            <div />
                            <div />
                        </li>,
                        <li className="b">
                            <div />
                            <div />
                        </li>,
                        <li className="c">
                            <div />
                            <div />
                        </li>,
                        <li className="d">
                            <div />
                            <div />
                        </li>,
                        <li className="e">
                            <div />
                            <div />
                        </li>,
                    ]}
                />}
            />
            <Reveal
                ref="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                assets={[
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-1.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-2.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-3.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-4.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-5.mp3`} />,
                    <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-6.mp3`} />,
                ]}
                list={[
                    <li>
                        <div>
                            Entanglement in Fishing Gear
                            <button class="close"></button>
                        </div>
                    </li>,
                    <li>
                        <div>
                            Poaching and Illegal Trade of Eggs, Meat and Shells
                            <button class="close"></button>
                        </div>
                    </li>,
                    <li>
                        <div>
                            Coastal Development
                            <button class="close"></button>
                        </div>
                    </li>,
                    <li>
                        <div>
                            Plastic and Other Marine Debris
                            <button class="close"></button>
                        </div>
                    </li>,
                    <li>
                        <div>
                            Global Warming
                            <button class="close"></button>
                        </div>
                    </li>,
                    <li>
                        <div>
                            Ocean Pollution
                            <button class="close"></button>
                        </div>
                    </li>,
                ]}
            />
        </skoash.Screen>
    );
}
