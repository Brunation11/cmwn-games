export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="time-to-collect"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'ItsTimeToCollect.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'game1.intro.trees.png'}
            />
            <div className="frame square">
                <div className="content">
                    <h3>
                        It's Time To Collect!
                    </h3>
                    <p>
                        Navigate the neighborhood<br/>
                        and collect all of the waste bags.<br/>
                        Look for Waste Trucks<br/>
                        to dump your basket.
                    </p>
                    <div className="truck" />
                    <div className="trash" />
                </div>
            </div>
            <div className="tree-1" />
            <div className="tree-2" />
            <div className="turtle" />
        </skoash.Screen>
    );
}
