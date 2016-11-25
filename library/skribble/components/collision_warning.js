import classNames from 'classnames';

class CollisionWarning extends skoash.Screen {
    constructor() {
        super();

        this.cancel = this.cancel.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    cancel() {
        this.close();
        skoash.trigger('menuClose', {
            id: this.props.id,
        });
    }

    toggle() {
        this.updateGameState({
            path: ['collisionWarning'],
            data: {
                show: !_.get(this.props.gameState, 'data.collisionWarning.show')
            }
        });
    }

    getToggleClassNames() {
        return classNames('toggle-collision-warning', {
            active: !_.get(this.props.gameState, 'data.collisionWarning.show')
        });
    }

    render() {
        return (
            <div id={this.props.id} className={this.getClassNames()}>
                <div className="center">
                    <div className="frame">
                        <skoash.Image
                            className="copy"
                            src="media/_CollisionWarning/text-youmustnotoverlapimgs.png"
                        />
                        <button className={this.getToggleClassNames()} onClick={this.toggle}></button>
                        <button className="close-collision-warning" onClick={this.cancel}></button>
                        <skoash.Image
                            className="otter"
                            src="media/_CollisionWarning/Peeking-through-Otter.gif"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default (
    <CollisionWarning
        id="collisionWarning"
        load
    />
);
