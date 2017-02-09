export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="take-action"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'Home_and_School.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'banner.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'game2.4.png'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.IMAGE + 'frame.round.png'}
            />
            <div className="frame round">
                <div className="content">
                    Now that you've learned<br/>
                    how to dispose of waste<br/>
                    responsibly, take action in<br/>
                    your home and school!
                </div>
            </div>
        </skoash.Screen>
    );
}
