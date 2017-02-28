export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-step-one"
        >
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-16-1.png`}
                />
                <skoash.Image
                    ref="bowl"
                    className="item bowl animated"
                    src={`${CMWN.MEDIA.IMAGE}img-15-2.png`}
                />
                <p className="bowl"><strong>Large bowl</strong></p>
                <skoash.Image
                    ref="ice"
                    className="item ice animated"
                    src={`${CMWN.MEDIA.IMAGE}img-15-3.png`}
                />
                <p className="ice"><strong>4 cups of ice</strong></p>
                <skoash.Image
                    ref="water"
                    className="item water animated"
                    src={`${CMWN.MEDIA.IMAGE}img-15-4.png`}
                />
                <p className="water"><strong>Cold water</strong></p>
                <h3>Fill your bowl with water and ice.</h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
