export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="types-of-waste"
        >
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.1.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.2.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.SPRITE + 'cards.3.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.IMAGE + 'card.png'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.selectable.target.props.message')}
            >
              <skoash.Audio
                  type="voiceOver"
                  ref="compost"
                  src={MEDIA.VO + 'compost.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref="recycle"
                  src={MEDIA.VO + 'Recycles.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref="landfill"
                  src={MEDIA.VO + 'Landfill_Desc.mp3'}
              />
            </skoash.MediaCollection>
            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                list={[
                    <skoash.Component type="li" correct={true} message="compost">
                        <div className="side b"><div/></div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                    <skoash.Component type="li" correct={true} message="recycle">
                        <div className="side b"><div/></div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                    <skoash.Component type="li" correct={true} message="landfill">
                        <div className="side b"><div/></div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
