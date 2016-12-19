import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 4,
        introVO: 'And_The_World',
        fact1VO: 'BothSides',
        fact2VO: 'Container',
        fact3VO: 'Electronics',
        introContent: (
            <p>
                By collecting the <span className="truck" /><br/>
                and disposing of waste<br/>
                properly, you can help<br/>
                both your community<br/>
                and the world!
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
                    Use Both Sides of a<br/>
                    Piece of Paper
                </h4>
                Tip: Whether doing your homework<br/>
                or making a shopping list,<br/>
                writing on both sides of<br/>
                notepaper is the<br/>
                right thing to do!
            </p>
        ),
        fact2Content: (
            <p>
                <h4>
                    Put Your Lunch in<br/>
                    a Reusable Container
                </h4>
                Tip: Instead of carrying your<br/>
                lunch in a paper or<br/>
                plastic bag, why not use<br/>
                a reusable container?
            </p>
        ),
        fact3Content: (
            <p>
                <h4>
                    Recycle Your Electronics
                </h4>
                Tip: Electronic waste contains<br/>
                hazardous materials and<br/>
                toxins and should always be<br/>
                recycled appropriately.
            </p>
        ),
    });
}
