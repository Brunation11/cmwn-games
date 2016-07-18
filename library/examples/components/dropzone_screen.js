import Dropzone from 'shared/components/dropzone/0.1';

var correctRespond = function (message, dropzoneRef) {
  console.log(message, dropzoneRef); // eslint-disable-line no-console
};

var AudioScreen = (
  <skoash.Screen
    id="dropzone"
  >
    <Dropzone
      ref="dropzone"
      checkComplete={false}
      correctRespond={correctRespond}
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
    />
  </skoash.Screen>
);

export default AudioScreen;
