let binComponents = _.map([
    'recycle',
    'landfill',
    'liquids',
    'compost',
    'food-share',
], bin =>
    <skoash.Component className={bin} message={bin} />
);

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="lights"
        >
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.IMAGE}lights.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprite.bins.png`}
            />
            <skoash.Image
                className="hidden"
                src={`${CMWN.MEDIA.SPRITE}sprite.btn.png`}
            />
            <skoash.Selectable
                list={binComponents}
            />
        </skoash.Screen>
    );
}
