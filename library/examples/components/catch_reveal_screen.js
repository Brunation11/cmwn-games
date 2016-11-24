import CatchableReveal from 'shared/components/catchable_reveal/0.1';
import Catchable from 'shared/components/catchable/0.1';

var willReveal = function () {
    return (this.state.caughtCount / 3 - 1 < this.props.revealList.length &&
        (this.state.caughtCount + 1) % 3 === 0);
};

var getMessage = function () {
    return '' + (this.state.caughtCount / 3 - 1);
};


export default function (props, ref, key) {
    return (
        <skoash.Screen
                {...props}
                ref={ref}
                key={key}
            id="catchable-reveal"
        >
            <CatchableReveal
                ref="catchable-reveal"
                bucket={
                    <div className="bucket"></div>
                }
                catchables={[
                    <Catchable/>,
                    <Catchable/>,
                    <Catchable/>,
                    <Catchable/>,
                    <Catchable/>,
                    <Catchable/>,
                    <Catchable/>,
                    <Catchable/>
                ]}
                specificReveals={false}
                getMessage={getMessage}
                willReveal={willReveal}
                revealList={[
                    <li>
                        <p>
                            In Mexico they roost in trees<br/>
                            in HUGE groups that may have<br/>
                            MILLIONS of butterflies!
                        </p>
                    </li>,
                    <li>
                        <p>
                            Monarch smell with their antennae<br/>
                            and taste with their feet!<br/>
                            <br/>
                            The feet have receptors called tarsi<br/>
                            that taste the sweet nectar.
                        </p>
                    </li>,
                    <li>
                        <p>
                            Monarch use updrafts<br/>
                            of warm air (called thermals)<br/>
                            to allow them to glide<br/>
                            so they can conserve energy.
                        </p>
                    </li>,
                    <li>
                        <p>
                            Caterpillar poop is called frass.<br/>
                            <i>They make a lot of frass!</i>
                        </p>
                    </li>,
                    <li>
                        <p>
                            A large Monarch caterpillar<br/>
                            can devour an entire milkweed plant<br/>
                            in less than four minutes.
                        </p>
                    </li>
                ]}

                revealAssets={[
                    <skoash.Audio type="voiceOver" src="media/S_5/VO_5.2.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_5/VO_5.3.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_5/VO_5.4.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_5/VO_5.5.mp3" delay={2000} />,
                    <skoash.Audio type="voiceOver" src="media/S_5/VO_5.6.mp3" delay={2000} />,
                    <skoash.Audio ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />
                ]}

            />
        </skoash.Screen>
    );
}

