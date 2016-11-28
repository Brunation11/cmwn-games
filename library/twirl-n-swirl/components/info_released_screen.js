export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-released"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/WaterProcessed.mp3" />
            <skoash.Component>
                <h2>
                    The water is processed at the treatment plant<br />
                    to remove pollutants. Once treated, the water<br />
                    is then released into local waterways.
                </h2>
            </skoash.Component>
        </skoash.Screen>
    );
}
