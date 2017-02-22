const IMAGE_SRCS = [
    `${CMWN.MEDIA.IMAGE}game.1.bkg.sky.jpg`,
    `${CMWN.MEDIA.IMAGE}game.1.bkg.clouds.png`,
    `${CMWN.MEDIA.SPRITE}game1.ground.png`,
    `${CMWN.MEDIA.SPRITE}game1.platform.png`,
    `${CMWN.MEDIA.SPRITE}game1.5.png`,
    `${CMWN.MEDIA.SPRITE}game1.logs.png`,
    `${CMWN.MEDIA.SPRITE}game1.trees.png`,
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
            id="click-cards"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'ClickTheCards.mp3'}
            />
            <skoash.Image
                className="frame"
                src={CMWN.MEDIA.IMAGE + 'frame.square.png'}
            />
            <skoash.Image
                className="recycle"
                src={CMWN.MEDIA.IMAGE + 'recycle.transparency.png'}
            />
            <skoash.Image
                className="trash"
                src={CMWN.MEDIA.IMAGE + 'cards.trash.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'game1.4.png'}
            />
            <div className="turtle" />
            <p>
                Click the cards<br/>
                to find out how<br/>
                YOU can be a<br/>
                Waste Buster!
            </p>
            <div className="hidden">
                {IMAGES}
            </div>
        </skoash.Screen>
    );
}
