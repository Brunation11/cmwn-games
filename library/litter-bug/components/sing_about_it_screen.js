export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="sing-about-it"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/_assets/_sounds/_vos/LetsSing.mp3" />
            <div className="mr-eco animated" />
            <div className="banner animated" />
            <div className="dancers animated" />
        </skoash.Screen>
    );
}
