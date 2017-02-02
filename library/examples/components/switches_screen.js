import SelectableReveal from 'shared/components/selectable_reveal/0.1';

var SwitchesScreen = (
    <skoash.Screen
        id="switches"
    >
        <skoash.Audio ref="vo" type="voiceOver" src="media/S_5/VO_5.1.mp3" />
        <skoash.Image ref="title" className="title animated" src="media/S_5/img_5.1.png" />
        <SelectableReveal
            ref="selectable-reveal"
            selectableList={[
                <li className="animated" correct={true}></li>,
                <li className="animated" correct={true}></li>,
                <li className="animated" correct={true}></li>,
                <li className="animated" correct={true}></li>,
                <li className="animated" correct={true}></li>
            ]}
            selectableSelectClass="HIGHLIGHTED"
            revealList={[
                <li>
                    <p>They turn out the lights<br/>
                    EVERY time they leave a room.</p>
                </li>,
                <li>
                    <p>They help out by doing a walk through<br/>
                    of their house before they leave<br/>
                    to be sure the lights are out.</p>
                </li>,
                <li>
                    <p>They even turn out lights that<br/>
                    other people leave on!</p>
                </li>,
                <li>
                    <p>They use notes to create reminders<br/>
                    to help their families remember<br/>
                    to flip that switch.</p>
                </li>,
                <li>
                    <p>They inspire their friends and siblings<br/>
                    to become Light Savers too!</p>
                </li>
            ]}
            revealAssets={[
                <skoash.Audio type="voiceOver" src="media/S_5/VO_5.2.mp3" delay={2000} />,
                <skoash.Audio type="voiceOver" src="media/S_5/VO_5.3.mp3" delay={2000} />,
                <skoash.Audio type="voiceOver" src="media/S_5/VO_5.4.mp3" delay={2000} />,
                <skoash.Audio type="voiceOver" src="media/S_5/VO_5.5.mp3" delay={2000} />,
                <skoash.Audio type="voiceOver" src="media/S_5/VO_5.6.mp3" delay={2000} />,
                <skoash.Audio ref="open-sound" type="sfx" src="media/_Buttons/S_BU_3.mp3" />,
            ]}
        />
    </skoash.Screen>
);

export default SwitchesScreen;

