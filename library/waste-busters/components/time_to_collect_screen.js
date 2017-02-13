const IMAGE_SRCS = [
    `${CMWN.MEDIA.SPRITE}Mom.leaving.hole.png`,
    `${CMWN.MEDIA.SPRITE}mom.going.to.hole.png?v=3`,
    `${CMWN.MEDIA.SPRITE}Sister.leave.hole.png`,
    `${CMWN.MEDIA.SPRITE}sister.down.hole.png?v=3`,
    `${CMWN.MEDIA.SPRITE}brother.leave.hole.png`,
    `${CMWN.MEDIA.SPRITE}brother.down.hole.png?v=3`,
];

const JSON_SRCS = [
    `${CMWN.MEDIA.SPRITE}Mom.leaving.hole.json`,
    `${CMWN.MEDIA.SPRITE}mom.going.to.hole.json`,
    `${CMWN.MEDIA.SPRITE}Sister.leave.hole.json`,
    `${CMWN.MEDIA.SPRITE}sister.down.hole.json`,
    `${CMWN.MEDIA.SPRITE}brother.leave.hole.json`,
    `${CMWN.MEDIA.SPRITE}brother.down.hole.json`,
];

const IMAGES = _.map(IMAGE_SRCS, src =>
    <skoash.Image className="hidden" src={src} />
);

const JSONS = _.map(JSON_SRCS, src =>
    <skoash.JSON src={src} />
);

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="time-to-collect"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'ItsTimeToCollect.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'game1.intro.trees.png'}
            />
            <div className="frame square">
                <div className="content">
                    <h3>
                        It's Time To Collect!
                    </h3>
                    <p>
                        Navigate the neighborhood<br/>
                        and collect all of the waste bags.<br/>
                        Look for Waste Trucks<br/>
                        to dump your basket.
                    </p>
                    <div className="truck" />
                    <div className="trash" />
                </div>
            </div>
            <div className="tree-1" />
            <div className="tree-2" />
            <div className="turtle" />
            <div className="hidden">
                {IMAGES}
                {JSONS}
            </div>
        </skoash.Screen>
    );
}
