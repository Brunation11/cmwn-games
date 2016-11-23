import DropzoneReveal from 'shared/components/dropzone_reveal/0.2';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="dnd-sloth"
        >
            <DropzoneReveal
              ref="dropzone-reveal"
              dropzoneAssets={[
                  <skoash.Audio ref="drag" type="sfx" src="media/audio/drag.mp3" />,
                  <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                  <skoash.Audio ref="incorrect" type="sfx" src="media/audio/drag-incorrect.mp3" complete />
              ]}
              dropzones={[
                  <skoash.ListItem ref="sloth" answers={['sloth']} className="sloth animated" />
              ]}
              dropzoneList={[
                  <skoash.ListItem ref="pig" className="pig animated" message="pig" return />,
                  <skoash.ListItem ref="mole" className="mole animated" message="mole" return />,
                  <skoash.ListItem ref="sloth" className="sloth animated" message="sloth" return />
              ]}
              revealList={[
                  <skoash.ListItem ref="sloth">
                      <h3>
                          Say Cheese!<br />
                          The way the three toed sloth's<br />
                          mouth is shaped makes it<br />
                          look like it's always smiling!
                      </h3>
                  </skoash.ListItem>
              ]}
              revealAssets={[
                  <skoash.Audio ref="sloth" type="voiceOver" src="media/audio/VO_18-1.mp3" />
              ]}
            />
        </skoash.Screen>
    );
}
