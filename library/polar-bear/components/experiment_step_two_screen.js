export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-step-two"
        >
            <skoash.Component className="frame">
                <skoash.Image ref="banner" className="banner animated" src="media/images/Img_17.1.png" />
                <skoash.Image ref="oil" className="item oil animated" src="media/images/S_15/Img_15.5.png" />
                <p className="oil">
                    <strong>
                        4 cups of solid vegetable<br />
                        shortening (like Crisco)
                    </strong>
                </p>
                <skoash.Image ref="bag" className="item bag animated" src="media/images/S_15/Img_15.6.png" />
                <p className="bag">
                    <strong>
                        4 medium-size sealable<br />
                        plastic bags
                    </strong>
                </p>
                <h3>Put all shortening in ONE plastic bag.</h3>
                <p className="description">
                    Shortening is a kind of fat and fat is what<br />
                    Polar Bears have under their skin.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
