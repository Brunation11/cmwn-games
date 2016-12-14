import Draggable from 'shared/components/draggable/0.4';
import Dropzone from 'shared/components/dropzone/0.4';

export default function (props, ref, key) {
    var onDrag;
    var testComplete;

    onDrag = function () {
        this.setState({
            correct: false,
            return: false,
        });
        this.updateGameState({
            path: 'sfx',
            data: {
                playing: 'drag',
            },
        });
    };

    testComplete = function () {
        if (this.refs['dropzone-0'].contains.length) this.complete();
        else this.incomplete();
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="list"
        >
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.minion.png'}
            />
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/img.notepad.png'}
            />
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'SpritesAnimations/sprite.game3.png'}
            />
            <skoash.Image
                className="hidden"
                src={ENVIRONMENT.MEDIA + 'ImageAssets/img.greenarrows.png'}
            />
            <skoash.Audio
                type="voiceOver"
                src={ENVIRONMENT.MEDIA + 'SoundAssets/vos/VO_drag_and.mp3'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.sfx.playing')}
            >
                <skoash.Audio
                    ref="drag"
                    type="sfx"
                    completeTarget="sfx"
                    src={ENVIRONMENT.MEDIA + 'SoundAssets/effects/Drag.mp3'}
                />
            </skoash.MediaCollection>
            <skoash.Repeater
                className="draggables"
                amount={13}
                item={<Draggable
                  return
                  returnOnIncorrect
                  onDrag={onDrag}
                />}
                props={[
                  {message: 'shoe'},
                  {message: 'lego'},
                  {message: 'dice'},
                  {message: 'ball'},
                  {message: 'crown'},
                  {message: 'bunny'},
                  {message: 'chess'},
                  {message: 'helmet'},
                  {message: 'bowling'},
                  {message: 'cup'},
                  {message: 'controller'},
                  {message: 'headphones'},
                  {message: 'guitar'},
                ]}
            />
            <div className="arrows">
                <div/>
                <div/>
                <div/>
            </div>
            <Dropzone
                checkComplete={false}
                onDrag={testComplete}
                onCorrect={testComplete}
                dropped={_.get(props, 'data.draggable.dropped')}
                dragging={_.get(props, 'data.draggable.dragging')}
                dropzones={[
                    <skoash.Component>
                    <span>LIST OF ITEMS</span>
                  </skoash.Component>
                ]}
            />
            <div className="words">
                <span>Drag and Drop</span><br/>
                the items to the list above.<br/>
                Choose as many as you like.
            </div>
        </skoash.Screen>
    );
}
