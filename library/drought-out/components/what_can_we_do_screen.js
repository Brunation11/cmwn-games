import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="what-can-we-do"
        >
            <skoash.Audio type="voiceOver" src="media/S_13/VO_13.1.mp3"/>
            <skoash.Image src="media/S_13/img_13.1.png"/>
            <skoash.Component className="flip-card-component bt">
                <Selectable
                    ref="selectable-card"
                    className="flip-card-component"
                    list={[
                        <skoash.Component type="li" correct={true} message="conservation">
                            <div className="side b center inline"></div>
                            <div className="side a center inline"></div>
                        </skoash.Component>
                    ]}
                    selectClass="HIGHLIGHTED"
                    dataTarget="selectable"
                />
            </skoash.Component>
            <Reveal
                ref="reveal"
                hide={true}
                openReveal={_.get(props, 'data.selectable.target.props.message')}
                assets={[
                    <skoash.Audio ref="conservation" type="voiceOver" src="media/S_13/VO_13.2.mp3" />
                ]}
            />
        </skoash.Screen>
    );
}
