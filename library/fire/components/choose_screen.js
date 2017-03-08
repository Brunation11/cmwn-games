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
    var clearCharacter = function () {
        this.updateGameData({
            key: 'character',
            data: {
                gender: null,
                skin: null,
            }
        });
    };

    var addGender = function (gender) {
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

    var addSkin = function (skin) {
        this.updateGameData({
            key: 'character',
            data: {
                skin,
            }
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
    };

    var nextScreen = function (nextProps) {
        if (nextProps.next && this.props.next !== nextProps.next) {
            this.next();
        }
    };

    return (
        <ChooseScreenComponent
            {...props}
            ref={ref}
            key={key}
            id="choose"
            className={getClassNames()}
            onOpen={clearCharacter}
            slideToggle={_.get(props, 'data.slide.toggle', false)}
            hideNext
            next={_.get(props, 'gameState.data.character.skin', null) != null}
            onComponentWillReceiveProps={nextScreen}
            silentComplete
        >
            <skoash.Audio type="voiceOver" src={`${CMWN.MEDIA.VO}vo-choose-your-firefighter.mp3`} />
            <skoash.Image className="animated" src={`${CMWN.MEDIA.IMAGE}img-11-1.png`} />
            <skoash.Component className="center female-male">
                <skoash.Component className="group">
                    <skoash.Selectable
                        onSelect={addGender}
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
                        onSelect={addSkin}
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

