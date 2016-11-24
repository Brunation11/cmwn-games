export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="take-pledge"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_assets/_sounds/_vos/AntiLitterPledge.mp3" />
            <skoash.Audio ref="button" complete type="sfx" src="media/_assets/_sounds/_effects/S_BU_1.mp3" />
            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
            <div className="mr-eco"></div>
            <div className="banner"></div>
        </skoash.Screen>
    );
}
