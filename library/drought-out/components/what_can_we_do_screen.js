export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="what-can-we-do"
        >
            <skoash.Audio type="voiceOver" src={`${MEDIA.VO}WhatCanWe.mp3`}/>
            <skoash.Image src={`${MEDIA.IMAGE}img_11.1.png`}/>
            <skoash.Component className="flip-card-component bt">
                <skoash.Selectable
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
                    <skoash.Audio
                        data-ref="conservation"
                        type="voiceOver"
                        src={`${MEDIA.VO}FirstLine.mp3`}
                    />
                    <skoash.Audio
                        data-ref="flip"
                        type="voiceOver"
                        src={`${MEDIA.EFFECT}CardFlip.mp3`}
                    />
            </skoash.MediaCollection>
        </skoash.Screen>
    );
}
