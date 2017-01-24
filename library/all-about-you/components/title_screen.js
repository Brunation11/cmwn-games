export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeDelay={3000}
            completeOnStart
        >
            <skoash.Image
                ref="ice-cube"
                className="ice-cube animated"
                src="media/assets/_images/_BKG/BKG_02-title-01.png"
            />
            <skoash.Image
                ref="magnifying-glass"
                className="magnifying-glass animated"
                src="media/assets/_images/_title_page/magnifying+glass.png"
            />
            <skoash.Image
                ref="penguine-1"
                className="penguine-1 animated"
                src="media/assets/_images/_title_page/img-penguin-bottom-01.png"
            />
            <skoash.Image
                ref="penguine-2"
                className="penguine-2 animated"
                src="media/assets/_images/_title_page/img-penguin-upperright.png"
            />
            <skoash.Image
                ref="title"
                className="title animated"
                src="media/assets/_images/_title_page/text-all-about-you.png"
            />
        </skoash.Screen>
    );
}
