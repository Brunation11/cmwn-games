import Draggable from 'shared/components/draggable/0.4';
import Dropzone from 'shared/components/dropzone/0.4';

class NeedScreenComponent extends skoash.Screen {
    open() {
		var componentParent;

		super.open();

		this.checkComplete = null;
		this.refs['media-vos'].incompleteRefs();
		componentParent = _.get(this.refs, 'children-3.refs.children-0', null);
        if (componentParent) {
			componentParent.refs['draggables-left'].incompleteRefs();
			componentParent.refs['draggables-right'].incompleteRefs();
		}
        this.incomplete();
        this.checkComplete = super.checkComplete;
    }
}

export default function (props, ref, key) {
    const ANSWERS = [
        'pants',
        'jacket',
        'hood',
        'boots',
        'mask',
        'gloves',
        'tank',
        'walkie',
        'axe',
        'light',
        'camera',
        'punch',
    ];

    const OBJECTS = [
        'bun',
        'tank',
        'body',
        'boots',
        'pants',
        'jacket',
        'gloves',
        'mask',
        'straps',
        'light',
        'axe',
        'walkie',
        'camera',
        'punch',
    ];

    var gender = _.get(props, 'gameState.data.character.gender', 'female');
    var skin = _.get(props, 'gameState.data.character.skin', 'medium');

    var openReveal = function (dropped) {
        var droppedList = _.get(props, 'data.dropzone.droppedList', '');
        var droppedMsg = 'dropped-' + dropped.props.message;
        this.updateScreenData({
            key: 'dropzone',
            data: {
                message: dropped.props.message,
                droppedList: droppedList + ' ' + droppedMsg
            }
        });
    };

    var mediaComplete = function () {
        this.updateScreenData({
            key: 'media',
            data: {
                complete: 'complete'
            }
        });
    };

    return (
        <NeedScreenComponent
            {...props}
            ref={ref}
            key={key}
            className={skin + ' ' + gender}
            id="need"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio type="voiceOver" src="media/S_12/vo_ImagineYoureAFirefighter.mp3" />
                <skoash.Audio type="voiceOver" src="media/S_12/vo_DragAndDropToOutfit.mp3" />
            </skoash.MediaSequence>
            <skoash.MediaCollection
				ref="media-vos"
                play={_.get(props, 'data.dropzone.message', null)}
                onComplete={mediaComplete}
            >
                <skoash.Audio
                    type="voiceOver"
                    data-ref="pants"
                    src="media/S_12/vo_TurnoutPants.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="jacket"
                    src="media/S_12/vo_TurnoutJacket.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="hood"
                    src="media/S_12/vo_CarbonFlashHood.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="boots"
                    src="media/S_12/vo_ChemicalProofBoots.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="mask"
                    src="media/S_12/vo_HelmetVisor.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="gloves"
                    src="media/S_12/vo_SafetyGloves.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="tank"
                    src="media/S_12/vo_TankOfOxygen.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="axe"
                    src="media/S_12/vo_Axe.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="walkie"
                    src="media/S_12/vo_HandHeldRadio.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="light"
                    src="media/S_12/vo_Flashlight.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="camera"
                    src="media/S_12/vo_ThermalImaging.mp3"
                />,
                <skoash.Audio
                    type="voiceOver"
                    data-ref="punch"
                    src="media/S_12/vo_WindowPunch.mp3"
                />,
            </skoash.MediaCollection>
            <skoash.MediaCollection
				ref="media-sfx"
                play={_.get(props, 'data.media.complete', null)}
            >
                <skoash.Audio data-ref="complete" type="sfx" src="media/S_12/S_12.3.mp3" />,
            </skoash.MediaCollection>
            <skoash.Component className="center">
                <skoash.Component className="frame">
                    <skoash.Image className="animated" src="media/S_12/img_12.1.png" />
                    <skoash.Repeater
                        className="draggables-left"
						ref="draggables-left"
                        amount={6}
                        item={<Draggable returnOnIncorrect />}
                        props={ANSWERS.slice(0, 6).map((value) => { return {message: value}; })}
                    />
                    <Dropzone
                        ref="dropzone"
                        dropped={_.get(props, 'data.draggable.dropped')}
                        dragging={_.get(props, 'data.draggable.dragging')}
                        onCorrect={openReveal}
                        dropzones={[
                            <skoash.Repeater
                                className={_.get(props, 'data.dropzone.droppedList', null)}
                                amount={16}
                                answers={ANSWERS}
                                props={OBJECTS.map((value) => { return {className: value}; })}
                            />
                        ]}
                        assets={[
                            <skoash.Audio type="sfx" data-ref="correct" src="media/S_12/S_12.2.mp3" />,
                            <skoash.Audio type="sfx" data-ref="drag" src="media/S_12/S_12.1.mp3" />,
                        ]}
                    />
                    <skoash.Repeater
                        className="draggables-right"
						ref="draggables-right"
                        amount={6}
                        item={<Draggable returnOnIncorrect />}
                        props={ANSWERS.slice(6).map((value) => { return {message: value}; })}
                    />
                    <skoash.Reveal
                        ref="reveal"
                        openMultiple
                        openReveal={_.get(props, 'data.dropzone.message', null)}
                        list={[
                            <skoash.ListItem data-ref="pants">
                                <p>
                                    Nobody wears shorts in a fire!<br /> You need these!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="jacket">
                                <p>
                                    If there is a fire, you<br /> need this special coat.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="hood">
                                <p>
                                    This keeps every bit of<br /> your head protected.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="boots">
                                <p>
                                    They keep dangerous<br /> chemicals off your feet.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="mask">
                                <p>
                                    This protects your head and face.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="gloves">
                                <p>
                                    Like boots do for your feet,<br /> these protect your hands.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="tank">
                                <p>
                                    This is a can of air<br /> so you can breathe!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="axe">
                                <p>
                                    This helps you get<br /> through closed doors.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="walkie">
                                <p>
                                    When shouting isn't enough<br /> you need this.
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="light">
                                <p>
                                    Could be too dark to see<br /> unless you have this!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="camera">
                                <p>
                                    Need to see through<br /> darkness and smoke?<br /> This is for you!
                                </p>
                            </skoash.ListItem>,
                            <skoash.ListItem data-ref="punch">
                                <p>
                                    This helps you break<br /> through a window.
                                </p>
                            </skoash.ListItem>,
                        ]}
                    />
                </skoash.Component>
            </skoash.Component>
        </NeedScreenComponent>
    );
}

