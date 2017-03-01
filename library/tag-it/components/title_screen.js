export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeDelay={5000}
            completeOnStart
        >
            <skoash.Audio ref="button" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-bu-1.mp3`} complete />

            <div className="group">
                <div className="drop" />
                <div className="title animated" />
                <div className="left" />
                <div className="right" />
            </div>
        </skoash.Screen>
    );
}

