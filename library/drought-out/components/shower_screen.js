import Selectable from 'shared/components/selectable/0.1';
import Reveal from 'shared/components/reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="shower"
        >
            <skoash.Audio type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/IfYouDecrease.mp3`}/>
            <skoash.Image src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/img_14.1.png`}/>
            <p>Turn each card.</p>
            <skoash.Component className="flip-card-component bt">
                <skoash.Selectable
                    ref="selectable-card"
                    className="flip-card-component"
                    list={[
                        <skoash.Component type="li" correct={true} data-ref="day">
                            <div className="side b center inline"></div>
                            <div className="side a center inline"></div>
                        </skoash.Component>,
                        <skoash.Component type="li" correct={true} data-ref="week">
                            <div className="side b center inline"></div>
                            <div className="side a center inline"></div>
                        </skoash.Component>,
                        <skoash.Component type="li" correct={true} data-ref="year">
                            <div className="side b center inline"></div>
                            <div className="side a center inline"></div>
                        </skoash.Component>
                    ]}
                    selectClass="HIGHLIGHTED"
                    dataTarget="selectable"
                />
            </skoash.Component>
            <skoash.MediaCollection
                ref="media-collection"
                play={_.get(props, 'data.selectable.target.props.data-ref')}
            >
                <skoash.Audio data-ref="day" type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/5Gallons.mp3`} />
                <skoash.Audio data-ref="week" type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/35Gallons.mp3`} />
                <skoash.Audio data-ref="year" type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/1680Gallons.mp3`} />
            <skoash.MediaCollection/>
        </skoash.Screen>
    );
}
