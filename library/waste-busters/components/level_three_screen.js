import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 3,
        introVO: 'find_out_how',
        fact1VO: 'Less_Packaging',
        // this VO needs to be replaced
        fact2VO: 'Reusable_Bags',
        fact3VO: 'Friends',
        introContent: (
            <p>
                Learning ways to reduce,<br/>
                reuse and recycle is the<br/>
                goal—collect all<br/>
                the <span className="truck" /> to<br/>
                find out how!
            </p>
        ),
        completeContent: (
            <p>
                You're a Recycling Wizard!<br/>
                Being mindful of how you<br/>
                handle waste helps<br/>
                keep the environment<br/>
                in great shape.
            </p>
        ),
        fact1Content: (
            <p>
                <h4>
                    Buy Items with Less Packaging
                </h4>
                Tip: Some products have more<br/>
                eco-friendly packaging than<br/>
                others. Be smart!
            </p>
        ),
        fact2Content: (
            <p>
                <h4>
                    Buy Clothing at a Thrift Shop
                </h4>
                Tip: Save gently used clothing<br/>
                from the landfill by buying<br/>
                at thrift stores!
            </p>
        ),
        fact3Content: (
            <p>
                <h4>
                    Encourage Friends and<br/>
                    Family to Recycle
                </h4>
                Tip: Give those closest to you<br/>
                friendly reminders to<br/>
                properly recycle their waste.
            </p>
        ),
    });
}
