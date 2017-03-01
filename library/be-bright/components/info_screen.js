export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-lets-learn"
        >
            <skoash.Audio ref="vo" type="voiceOver" src={`${CMWN.MEDIA.VO}vo-6-1.mp3`} />
            <skoash.Component className="info animated">
                <div>
                    Let's learn Mr. Eco's Super Special<br />
                    <skoash.Image
                        src={`${CMWN.MEDIA.SPRITE}animation-lightsoff-loop.gif`}
                        className="turn-off"
                    />
                    <br />
                    <span>Saver Move</span>
                </div>
                <div>
                    Let's learn Mr. Eco's Super Special<br />
                    <skoash.Image
                        src={`${CMWN.MEDIA.SPRITE}animation-lightsoff-loop.gif`}
                        className="turn-off"
                    />
                    <br />
                    <span>Saver Move</span>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
