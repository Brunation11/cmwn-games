export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="experiment-step-four"
        >
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-19-1.png`}
                />
                <h3>Put hands in water</h3>
                <p>Set a timer for 30 seconds and put both hands<br />in the bowl of ice water.</p>
            </skoash.Component>
        </skoash.Screen>
    );
}
