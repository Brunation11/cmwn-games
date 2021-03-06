class MenuScreen extends skoash.Screen {
    renderContent() {
        return (
            <div>
                <skoash.Image className="hidden" src="media/_Background/SK_BKG_1.png" />
                <skoash.Image className="otter" src="media/_Otter/Waving_Otter2.gif" />
                <div className="bubble">
                    Hi there!<br/>
                    What would you<br/>
                    like to do today?
                </div>
                <div className="buttons">
                    <button className="make" onClick={this.goto.bind(this, {
                        index: 'friend',
                        goto: 'canvas',
                    })} />
                    <button className="read" onClick={this.goto.bind(this, 'inbox')} />
                </div>
            </div>
        );
    }
}

export default function (props, ref, key) {
    return (
        <MenuScreen
            {...props}
            ref={ref}
            key={key}
            id="menu"
            hidePrev
            hideNext
            load
        />
    );
}
