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
            <skoash.Audio type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/WhatCanWe.mp3`}/>
            <skoash.Image src={`${ENVIRONMENT.MEDIA_GAME}ImageAssets/img_11.1.png`}/>
            <skoash.Component className="flip-card-component bt">
                <Selectable
                    ref="selectable-card"
                    className="flip-card-component"
                    list={[
                        <skoash.Component type="li" correct={true} data-ref="flip conservation">
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
                play={_.get(props, 'data.selectable.target.props.data-ref', null)}
            >
                    <skoash.Audio data-ref="conservation" type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/vos/FirstLine.mp3`} />
                    <skoash.Audio data-ref="flip" type="voiceOver" src={`${ENVIRONMENT.MEDIA_GAME}SoundAssets/effects/CardFlip.mp3`} />
            </skoash.MediaCollection>
        </skoash.Screen>
    );
}
