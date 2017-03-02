export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-temperature"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-13-1.mp3`} delay={500} />
            <skoash.Component className="frame">
                <skoash.Image ref="bear" className="bear animated" src={`${CMWN.MEDIA.IMAGE}img-13-1.png`} />
                <h3>
                    In the Arctic regions<br />
                    where Polar Bears live,<br />
                    the temperature can be<br />
                    as low as 50 degrees<br />
                    below zero!
                </h3>
            </skoash.Component>
        </skoash.Screen>
    );
}
