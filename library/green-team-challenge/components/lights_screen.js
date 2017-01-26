let binNames = [
    'recycle',
    'landfill',
    'liquids',
    'compost',
    'food-share',
];

let revealContent = {
    recycle: (
        <p>
            RECYCLING items are those<br/>
            that can be reprocessed and<br/>
            made into new products.<br/>
            Paper, metal, and plastic are<br/>
            common recyclable materials.
        </p>
    ),
    landfill: (
        <p>
            LANDFILL items are things that<br/>
            just can't be reused in any way.<br/>
            Put your thinking cap on!<br/>
            Look for ways to make<br/>
            different choices that<br/>
            reduce landfill waste.
        </p>
    ),
    liquids: (
        <p>
            LIQUIDS must be separated<br/>
            from their containers!<br/>
            This allows for the containers<br/>
            to be properly processed.<br/>
            Get pouring!
        </p>
    ),
    compost: (
        <p>
            COMPOSTING is<br/>
            fertilizer in the making!<br/>
            It's made from food scraps<br/>
            and organic materials<br/>
            that decay and become<br/>
            food for plants!
        </p>
    ),
    'food-share': (
        <p>
            FOOD SHARING is<br/>
            a great way to keep<br/>
            from wasting food!<br/>
            Leave items that others<br/>
            can make into a snack!
        </p>
    ),
};

let revealVOs = {
    recycle: 'RecyclingMaterials',
    landfill: 'ThinkingCap',
    liquids: 'GetPouring',
    compost: 'GetPouring', // needs to be replaced
    'food-share': 'GetPouring', // needs to be replaced
};

let binComponents = _.map(binNames, bin =>
    <skoash.Component className={bin} message={bin} />
);

let revealList = _.map(revealContent, (content, ref) =>
    <skoash.Component ref={ref}>
        {content}
    </skoash.Component>
);

let mediaCollectionList = _.map(revealVOs, (content, ref) =>
    <skoash.Audio type="voiceOver" ref={ref} src={`${CMWN.MEDIA.VO + content}.mp3`} />
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
                },
                RevealProps: {
                    list: revealList,
                },
                MediaCollectionProps: {
                    children: mediaCollectionList,
                },
            })}
        </skoash.Screen>
    );
}
