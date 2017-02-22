const IMAGE_SRCS = [
    `${CMWN.MEDIA.SPRITE}turtle.walk.0.png`,
    `${CMWN.MEDIA.SPRITE}turtle.walk.3.png`,
    `${CMWN.MEDIA.SPRITE}turtle.walk.5.png`,
    `${CMWN.MEDIA.SPRITE}game1.hearts.png`,
    `${CMWN.MEDIA.SPRITE}recycle-01.png`,
    `${CMWN.MEDIA.SPRITE}rainbow.recycle-01.png`,
    `${CMWN.MEDIA.SPRITE}truck.png`,
    `${CMWN.MEDIA.SPRITE}door.open.png`,
    `${CMWN.MEDIA.SPRITE}jet.pack.png`,
    `${CMWN.MEDIA.SPRITE}mother.slither-01.png`,
    `${CMWN.MEDIA.SPRITE}sister.slither-01.png`,
    `${CMWN.MEDIA.SPRITE}brother.slither-01.png`,
];

const IMAGES = _.map(IMAGE_SRCS, src =>
    <skoash.Image className="hidden" src={src} />
);

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="cards"
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
                src={CMWN.MEDIA.SPRITE + 'cards.4.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'card.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'cards.trash.png'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.selectable.target.props.message')}
            >
              <skoash.Audio
                  type="voiceOver"
                  ref="reduce"
                  src={CMWN.MEDIA.VO + 'ReduceStrong.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref="reuse"
                  src={CMWN.MEDIA.VO + 'ReuseStrong.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref="recycle"
                  src={CMWN.MEDIA.VO + 'RecycleStrong.mp3'}
              />
            </skoash.MediaCollection>
            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                list={[
                    <skoash.Component type="li" correct={true} message="reduce">
                        <div className="side b"><div/></div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                    <skoash.Component type="li" correct={true} message="reuse">
                        <div className="side b"><div/></div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                    <skoash.Component type="li" correct={true} message="recycle">
                        <div className="side b"><div/></div>
                        <div className="side a"><div/></div>
                    </skoash.Component>,
                ]}
            />
            <div className="hidden">
                {IMAGES}
            </div>
        </skoash.Screen>
    );
}
