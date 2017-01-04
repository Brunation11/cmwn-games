export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="waste-sort-center"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'Help_Me.mp3'}
            />
            <skoash.Image
                className="title"
                src={CMWN.MEDIA.IMAGE + 'sort.title.png'}
            />
            <skoash.Image
                className="turtle"
                src={CMWN.MEDIA.IMAGE + 'main.turtle.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'frame.round.png'}
            />
            <div className="frame round">
                <div className="content">
                    Now that we've learned the<br/>
                    best ways to separate waste,<br/>
                    let's test your knowledge<br/>
                    by helping me at the<br/>
                    Waste Sorting Center.
                </div>
            </div>
        </skoash.Screen>
    );
}
