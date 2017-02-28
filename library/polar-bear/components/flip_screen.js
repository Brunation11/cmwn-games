export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
            emitOnComplete={{
                name: 'flip',
            }}
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-25-1.mp3`} />
            <skoash.Component className="frame">
                <skoash.Image
                    ref="banner"
                    className="banner animated"
                    src={`${CMWN.MEDIA.IMAGE}img-25-1.png`}
                />
                <h3 class="thank-you">
                    Thank you for taking<br />
                    time to learn more<br />
                    about Polar Bears.
                </h3>
                <skoash.Image ref="flip" className="flip animated" src={`${CMWN.MEDIA.IMAGE}flip.png`} />
            </skoash.Component>
        </skoash.Screen>
    );
}
