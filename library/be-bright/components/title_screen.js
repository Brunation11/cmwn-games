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
                src={`${CMWN.MEDIA.IMAGE}bkg01.png`}
            />
            <skoash.Audio
                ref="buzz"
                type="sfx"
                src={`${CMWN.MEDIA.EFFECT}s-1-2.mp3`}
                delay={3000}
            />
            <skoash.Image
                ref="bulb"
                className="bulb animated glow"
                src={`${CMWN.MEDIA.IMAGE}lightbulb-title-glow.png`}
            />
            <skoash.Image
                ref="bulb"
                className="bulb animated"
                src={`${CMWN.MEDIA.IMAGE}lightbulb-title.png`}
            />
            <skoash.Image
                ref="eco"
                className="eco"
                src={`${CMWN.MEDIA.IMAGE}mr-eco.png`}
            />
            <skoash.Image
                ref="hog"
                className="hog"
                src={`${CMWN.MEDIA.IMAGE}energyhog.png`}
            />
            <skoash.Image
                ref="presents"
                className="presents animated glow"
                src={`${CMWN.MEDIA.IMAGE}mreco-presents-glow.png`}
            />
            <skoash.Image
                ref="presents"
                className="presents animated"
                src={`${CMWN.MEDIA.IMAGE}mreco-presents.png`}
            />
            <skoash.Image
                ref="title"
                className="title animated glow"
                src={`${CMWN.MEDIA.IMAGE}bebright-title-glow.png`}
            />
            <skoash.Image
                ref="title"
                className="title animated"
                src={`${CMWN.MEDIA.IMAGE}bebright-title.png`}
            />
        </skoash.Screen>
    );
}
