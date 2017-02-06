import classNames from 'classnames';

class ChooseScreenComponent extends skoash.Screen {
    prev() {
        if (this.props.slideToggle) {
            this.updateScreenData({
                key: 'slide',
                data: {
                    toggle: false
                }
            });
            return;
        }
        super.prev();
    }
}

export default function (props, ref, key) {

    var nextSlide = function (gender) {
        this.updateGameData({
            key: 'character',
            data: {
                gender,
            }
        });

        this.updateScreenData({
            key: 'slide',
            data: {
                toggle: true
            }
        });
    };

    var nextScreen = function (skin) {
        this.updateGameData({
            key: 'character',
            data: {
                skin,
            }
        });

        skoash.trigger('goto', {
            index: props.index + 1,
        });
    };

    var getClassNames = function () {
        var slideToggle = _.get(props, 'data.slide.toggle', false);
        var gender = _.get(props, 'gameState.data.character.gender', null);

        return classNames({
            GENDER: !slideToggle,
            SKIN: slideToggle,
            [gender]: gender,
        });
    }

    return (
        <ChooseScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="choose"
            className={getClassNames()}
            hideNext
            silentComplete
            slideToggle={_.get(props, 'data.slide.toggle', false)}
        >
            <skoash.Audio type="voiceOver" src="media/S_11/vo_ChooseYourFirefighter.mp3" />
            <skoash.Image className="animated" src="media/S_11/img_11.1.png" />
            <skoash.Component className="center female-male">
                <skoash.Component className="group">
                    <skoash.Selectable
                        onSelect={nextSlide}
                        list={[
                            <skoash.ListItem data-ref="female" id="gender-female" className="animated" />,
                            <skoash.ListItem data-ref="male" id="gender-male" className="animated" />
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
            <skoash.Component className="center skin-color">
                <skoash.Component className="group">
                    <skoash.Selectable
                        onSelect={nextScreen}
                        list={[
                            <skoash.ListItem data-ref="light" id="skin-light" className="animated" />,
                            <skoash.ListItem data-ref="medium" id="skin-medium" className="animated" />,
                            <skoash.ListItem data-ref="dark" id="skin-dark" className="animated" />
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </ChooseScreenComponent>
    );
}

