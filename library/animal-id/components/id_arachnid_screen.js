import SelectableReveal from 'shared/components/selectable_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="id-arachnid"
        >
            <skoash.Audio ref="vo" type="voiceOver" src="media/audio/VO_6-1.mp3" />
            <skoash.Image ref="title" className="title animated" src="media/images/img_6.1.png" />
            <SelectableReveal
              ref="selectable-reveal"
              answers={['spider']}
              assets={[
                  <skoash.Audio ref="correct" type="sfx" src="media/audio/drag-correct.mp3" />,
                  <skoash.Audio ref="incorrect" type="sfx" src="media/audio/id-incorrect.mp3" complete />
              ]}
              selectableList={[
                  <skoash.ListItem className="grasshoper animated" />,
                  <skoash.ListItem data-ref="spider" className="spider animated" />,
                  <skoash.ListItem className="ladybug animated" />,
                  <skoash.ListItem className="roach animated" />
              ]}
              revealList={[
                  <skoash.ListItem data-ref="spider">
                  <h3>
                      An arachnid has 4 pairs<br/>
                      of segmented legs and a body<br/>
                      that is divided into two parts.
                  </h3>
                </skoash.ListItem>
              ]}
              revealAssets={[
                  <skoash.Audio ref="spider" type="voiceOver" src="media/audio/VO_6-2.mp3" />
              ]}
            />
        </skoash.Screen>
    );
}
