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
                src={CMWN.MEDIA.SPRITE + 'cards.1.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'cards.2.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'cards.3.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'card.png'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.selectable.target.props.message')}
            >
              <skoash.Audio
                  type="voiceOver"
                  ref="compost"
                  src={CMWN.MEDIA.VO + 'compost.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref="recycle"
                  src={CMWN.MEDIA.VO + 'Recycles.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref="landfill"
                  src={CMWN.MEDIA.VO + 'Landfill_Desc.mp3'}
              />
            </skoash.MediaCollection>
            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                list={[
                    <skoash.Component type="li" correct={true} message="compost">
                        <div className="side b">
                            <div>
                                Discarded organic matter<br/>
                                such as plant scraps and<br/>
                                egg shells can all be turned<br/>
                                into mineral-rich soil.
                            </div>
                        </div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                    <skoash.Component type="li" correct={true} message="recycle">
                        <div className="side b">
                            <div>
                                Metal, glass, and certain<br/>
                                types of paper and plastic<br/>
                                can be recycled.
                            </div>
                        </div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                    <skoash.Component type="li" correct={true} message="landfill">
                        <div className="side b">
                            <div>
                                Alas, not all waste can be<br/>
                                recycled or composted.<br/>
                                Soiled tissues, plastic<br/>
                                diapers, and more are just<br/>
                                some of the times that<br/>
                                might end up in the landfill!
                            </div>
                        </div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
