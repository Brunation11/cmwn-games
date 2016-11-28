export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="special-announcement-screen"
        >
            <skoash.Image className="hidden" src="media/_images/frame.specialannouncement.png" />
            <skoash.Audio type="voiceOver" src="media/_sounds/_vos/SpecialAnn.mp3" />
            <skoash.Component className="labyrinth-frame">
                <skoash.Image className="eco" src="media/_images/mr.eco.png" />
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
