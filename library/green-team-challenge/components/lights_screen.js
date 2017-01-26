let binComponents = _.map([
    'recycle',
    'landfill',
    'liquids',
    'compost',
    'food-share',
], bin =>
    <skoash.Component className={bin} ref={bin} />
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
            <skoash.Component
                className="lights"
                children={binComponents}
            />
            <skoash.Component
                className="bins"
                children={binComponents}
            />
            {skoash.mixins.SelectableReveal(props, {
                SelectableProps: {
                    list: binComponents,
                    onSelect: function () {
                        debugger;
                    }
                }
            })}
        </skoash.Screen>
    );
}
