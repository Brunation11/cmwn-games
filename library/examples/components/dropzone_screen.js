import Dropzone from 'shared/components/dropzone/0.1';
import Draggable from 'shared/components/draggable/0.1';

var dragRespond = function (message) {
    var self = this;

    self.dropzones.map((dropzone, key) => {
        var dropzoneRef;
        var contains;
        var index;

        dropzoneRef = self.refs[`dropzone-${key}`];
        contains = self.contains[key] || [];
        index = contains.indexOf(message);
        if (~index) contains.splice(index, 1);
        self.contains[key] = contains;

        if (!contains.length) {
            dropzoneRef.incomplete();
            self.checkComplete();
        }
    });
};

var correctRespond = function (message, dropzoneKey) {
    var dropzoneRef;
    var contains;

    dropzoneRef = this.refs[`dropzone-${dropzoneKey}`];
    contains = this.contains[dropzoneKey] || [];

    contains.push(message);
    this.contains[dropzoneKey] = contains;

    if (contains.length) {
        dropzoneRef.complete();
    }
};

var AudioScreen = (
    <skoash.Screen
        id="dropzone"
    >
        <Dropzone
            ref="dropzone"
            correctRespond={correctRespond}
            dragRespond={dragRespond}
            dropzones={[
                <skoash.Component>
                    <span>A</span>
                </skoash.Component>,
                <skoash.Component>
                    <span>B</span>
                </skoash.Component>,
                <skoash.Component>
                    <span>C</span>
                </skoash.Component>,
            ]}
            draggables={[
                <Draggable message={1}>1</Draggable>,
                <Draggable message={2}>2</Draggable>,
                <Draggable message={3}>3</Draggable>,
            ]}
        />
    </skoash.Screen>
);

export default AudioScreen;
