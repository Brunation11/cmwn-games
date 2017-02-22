export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="special-announcement-screen"
        >
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}frame-specialannouncement.png`} />
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}special-ann.mp3`} />
            <skoash.Component className="labyrinth-frame">
                <skoash.Image className="eco" src={`${CMWN.MEDIA.IMAGE}mr-eco.png`} />
                <div className="copy">
                    <div>Special</div>
                    <div>Special</div>
                    <div>Announcement!</div>
                    <div>Announcement!</div>
                    <div>Calling all</div>
                    <div>Calling all</div>
                    <div>Eco-Heroes!!</div>
                    <div>Eco-Heroes!!</div>
                </div>
            </skoash.Component>
        </skoash.Screen>
    );
}
