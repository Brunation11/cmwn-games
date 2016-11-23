import Selectable from 'shared/components/selectable/0.1';

import classNames from 'classnames';

class ChooseScreenComponent extends skoash.Screen {

    constructor() {
        super();

        this.state = {
            slideToggle: true,
        };
    }

    getRefs(currentRef) {
        if (!currentRef.refs) {
            return;
        }
        _.each(currentRef.refs, (ref, key) => {
            this.refs[key] = ref;
            if (key.includes('center') || key.includes('group')) {
                this.getRefs(ref);
            }
        });
    }

    bootstrap() {
        var ref;
        var self = this;
        super.bootstrap();

        ['center-1', 'center-2'].forEach(val => {
            ref = self.refs[val];
            if (ref) {
                self.getRefs(ref);
            }
        });
    }

    updateGender(gender) {
        this.updateGameState({
            path: ['character'],
            data: {
                gender
            }
        });
    }

    updateSkin(skin) {
        this.updateGameState({
            path: ['character'],
            data: {
                skin
            }
        });
    }

    prevSlide() {
        this.setState({
            slideToggle: true,
        });
    }

    prev() {
        if (!this.state.slideToggle) {
            this.prevSlide();
            return;
        }

        super.prev();
    }

    nextSlide(gender) {
        this.updateGender(gender);

        this.setState({
            slideToggle: false,
        });
    }

    next(skin) {
        this.updateSkin(skin);

        super.next();
    }

    renderFemaleMale() {
        return (
            <skoash.Component ref="center-1" className="center female-male">
                <skoash.Component className="group">
                    <Selectable
                        ref="selectable"
                        list={[
                            <skoash.ListItem id="gender-female" className="animated"
                                onClick={this.nextSlide.bind(this, 'female')} />,
                            <skoash.ListItem id="gender-male" className="animated"
                                onClick={this.nextSlide.bind(this, 'male')} />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        );
    }

    renderSkinColor() {
        return (
            <skoash.Component ref="center-2" className="center skin-color">
                <skoash.Component className="group">
                    <Selectable
                        ref="selectable-2"
                        list={[
                            <skoash.ListItem id="skin-light" className="animated"
                            onClick={this.next.bind(this, 'light')} />,
                            <skoash.ListItem id="skin-medium" className="animated"
                            onClick={this.next.bind(this, 'medium')} />,
                            <skoash.ListItem id="skin-dark" className="animated"
                            onClick={this.next.bind(this, 'dark')} />,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        );
    }

    getClassNames() {
        var data = skoash.trigger('getState').data;
        var gender;
        if (data.character) {
            gender = data.character.gender;
        }
        return classNames({
            GENDER: this.state.slideToggle,
            SKIN: !this.state.slideToggle,
            [gender]: gender,
        }, super.getClassNames());
    }

    renderContent() {
        return (
            <div>
                {this.renderContentList()}
                {this.renderFemaleMale()}
                {this.renderSkinColor()}
            </div>
        );
    }
}

export default function (props, ref, key) {
    return (
        <ChooseScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="choose"
            hideNext
            silentComplete
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/S_11/vo_ChooseYourFirefighter.mp3" />
            <skoash.Image className="animated" src="media/S_11/img_11.1.png" />
        </ChooseScreenComponent>
    );
}

