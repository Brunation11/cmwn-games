export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            playOnStart="buzz"
            completeDelay={3000}
        >
            <skoash.Image ref="background" className="hidden" src="media/_BKG/BKG_1.png" />
            <skoash.Audio ref="buzz" type="sfx" src="media/S_1/S_1.2.mp3" delay={3000} />
            <skoash.Image ref="bulb" className="bulb animated" src="media/S_1/img_1.2.png" />
            <skoash.Image ref="presenets" className="presents animated" src="media/S_1/img_1.1.png" />
            <skoash.Image ref="title" className="title animated" src="media/S_1/img_1.3.png" />
        </skoash.Screen>
    );
}
