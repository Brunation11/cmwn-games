export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            playOnStart="buzz"
            completeOnStart
            completeDelay={3000}
        >
            <skoash.Image
                ref="background"
                className="hidden"
                src="media/_BKG/BKG_1.png"
            />
            <skoash.Audio
                ref="buzz"
                type="sfx" src="media/S_1/S_1.2.mp3"
                delay={3000}
            />
            <skoash.Image
                ref="bulb"
                className="bulb animated glow"
                src="media/S_1/lightbulb-title-glow.png"
            />
            <skoash.Image
                ref="bulb"
                className="bulb animated"
                src="media/S_1/lightbulb-title.png"
            />
            <skoash.Image
                ref="eco"
                className="eco"
                src="media/_images/mr.eco.png"
            />
            <skoash.Image
                ref="hog"
                className="hog"
                src="media/S_1/energyhog.png"
            />
            <skoash.Image
                ref="presents"
                className="presents animated glow"
                src="media/S_1/mreco-presents-glow.png"
            />
            <skoash.Image
                ref="presents"
                className="presents animated"
                src="media/S_1/mreco-presents.png"
            />
            <skoash.Image
                ref="title"
                className="title animated glow"
                src="media/S_1/bebright.title-glow.png"
            />
            <skoash.Image
                ref="title"
                className="title animated"
                src="media/S_1/bebright.title.png"
            />
        </skoash.Screen>
    );
}
