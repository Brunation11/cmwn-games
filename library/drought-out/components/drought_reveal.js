import Reveal from 'shared/components/reveal/0.1.js';

class DroughtReveal extends Reveal {
    constructor() {
        super();

        this.state = _.defaults({
            open: true,
            openReveal: ''
        }, this.state);

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
