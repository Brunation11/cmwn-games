class QuitScreen extends skoash.Screen {
    okay() {
        skoash.trigger('quit');
    }

    cancel() {
        this.close();
        skoash.trigger('menuClose', {
            id: this.state.id,
        });
    }

    render() {
        return (
            <div id={this.props.id} className={this.getClassNames()}>
                <skoash.Audio ref="vo" type="voiceOver" src="media/S_Quit/VO_QuitScreen.mp3" />
                <div className="center">
                    <div className="frame">
                        <h2>Are you sure you<br/>want to quit?</h2>
                        <h3>Your game progress will be saved</h3>
                        <button className="quit-yes" onClick={this.okay.bind(this)}></button>
                        <button className="quit-no" onClick={this.cancel.bind(this)}></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default (
    <QuitScreen
        id="quit"
    />
);
