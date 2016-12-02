import Reveal from 'shared/components/reveal/0.1.js';

class DroughtReveal extends Reveal {
    constructor() {
        super();

        this.state = {
            open: true,
            openReveal: ''
        };

    }

    renderReveal() {
        return (
            <div className="reveal">
                <ul>
                    {super.renderList()}
                </ul>
            </div>
        );
    }
}

export default DroughtReveal;
