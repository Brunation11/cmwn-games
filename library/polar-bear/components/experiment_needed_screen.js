export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-needed"
        >
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-15-1.png`}
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
                <skoash.Image
                    ref="oil"
                    className="item oil animated"
                    src={`${CMWN.MEDIA.IMAGE}img-15-5.png`}
                />
                <p className="oil">
                    <strong>
                        4 cups of solid vegetable<br />
                        shortening (like Crisco)
                    </strong>
                </p>
                <skoash.Image
                    ref="bag"
                    className="item bag animated"
                    src={`${CMWN.MEDIA.IMAGE}img-15-6.png`}
                />
                <p className="bag"><strong>4 medium-size sealable<br />plastic bags</strong></p>
            </skoash.Component>
            <a className="print" href="./media/PDFInstructions.pdf" target="_blank"></a>
        </skoash.Screen>
    );
}
