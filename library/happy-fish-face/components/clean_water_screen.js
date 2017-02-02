export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="clean-water"
        >
            <skoash.Audio type="voiceOver" src="media/_audio/_S_CleanWater/HFF_VO_CleanWater.mp3" />
            <skoash.Component ref="center" className="center">
                <skoash.Component ref="group" className="group">
                    <skoash.Component ref="frame" className="frame" pl-bg>
                        <p>
                            And clean water is<br /> important for<br /> humans too!
                        </p>
                        <skoash.Image src="media/_images/_S_CleanWater/img_5.1.png" />
                    </skoash.Component>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}

