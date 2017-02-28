export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-step-three"
        >
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-18-1.png`}
                />
                <h3>Cover Hands With Plastic Bags</h3>
                <p>
                    Cover your right hand with a plastic bag.
                    Then place the covered hand inside the plastic bag with the fat and seal it.
                    Move the fat around until it covers your hand.
                    Cover the left hand with the remaining two plastic bags (without fat) and seal.
                </p>
            </skoash.Component>
        </skoash.Screen>
    );
}
