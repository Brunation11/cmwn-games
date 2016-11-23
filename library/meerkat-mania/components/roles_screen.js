import MediaCollection from 'shared/components/media_collection/0.1';
import RevealPrompt from 'shared/components/reveal_prompt/0.1';
import SelectableCanvas from 'shared/components/selectable_canvas/0.1';

export default function (props, ref, key) {
    var closeReveal = function () {
        skoash.trigger('updateState', {
            path: 'reveal',
            data: {
                open: ''
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="roles"
        >
            <skoash.Audio ref="intro" type="voiceOver" src="media/S_3/VO_3.1.mp3" />

            <MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={function () {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: null
                        }
                    });
                }}
            >
                <skoash.Audio ref="sentry" type="voiceOver" src="media/S_3/VO_3.2.mp3" />
                <skoash.Audio ref="pup" type="voiceOver" src="media/S_3/VO_3.3.mp3" />
                <skoash.Audio ref="babysitter" type="voiceOver" src="media/S_3/VO_3.4.mp3" />
                <skoash.Audio ref="gatherer" type="voiceOver" src="media/S_3/VO_3.5.mp3" />
                <skoash.Audio ref="alpha-male" type="voiceOver" src="media/S_3/VO_3.6.mp3" />
                <skoash.Audio ref="alpha-female" type="voiceOver" src="media/S_3/VO_3.7.mp3" />
            </MediaCollection>

            <RevealPrompt
                ref="reveal"
                openOnStart="intro"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component data-ref="intro">
                    <skoash.Component>
                        <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
                          <span>
                              Every Meerkat has a job.<br/>
                              Click on each to discover.
                          </span>
                        <button className="close-reveal" onClick={closeReveal} />
                    </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="sentry">
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_2.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.2.png" />
                            <span>
                                I stand watch!<br/>
                                I look out for predators<br/>
                                while the others forage for food.
                            </span>
                            <button className="close-reveal" onClick={closeReveal} />
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="pup">
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_3.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.4.png" />
                            <span>
                                I'm a pup so I'm under 6 months old.<br/>
                                I lived in the burrow for the first three weeks.<br/>
                                Then I learn how to forage in the deserts and<br/>
                                grasslands of Africa.
                            </span>
                            <button className="close-reveal" onClick={closeReveal} />
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="babysitter">
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_4.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.6.png" />
                            <span>
                                I help babysit the pups!<br/>
                                I teach them everything from how to<br/>
                                safely eat a scorpion (yum!)<br/>
                                to how to react to threats.
                            </span>
                            <button className="close-reveal" onClick={closeReveal} />
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="gatherer">
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_5.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.8.png" />
                            <span>
                                As a meerkat, I’m omnivorous so<br/>
                                I eat both plants and animals.<br/>
                                I enjoy anything from fruit<br/>
                                to insects and small mammals.<br/>
                                We foragers bring back<br/>
                                food for the pups.
                            </span>
                            <button className="close-reveal" onClick={closeReveal} />
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="alpha-male">
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_6.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.10.png" />
                            <span>
                                Alpha males usually come<br/>
                                from different mobs.<br/>
                                I work with the alpha female to<br/>
                                lead the group and care for the pups.
                            </span>
                            <button className="close-reveal" onClick={closeReveal} />
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component data-ref="alpha-female">
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_7.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.12.png" />
                            <span>
                                As an alpha female, I lead the group<br/>
                                and mother the pups along with<br/>
                                the alpha male.<br/>
                                Female Meerkats are dominant.
                            </span>
                            <button className="close-reveal" onClick={closeReveal} />
                        </skoash.Component>
                    </skoash.Component>
                ]}
            />

            <SelectableCanvas
                selectClass="HIGHLIGHTED"
                selectRespond={function (message) {
                    this.updateGameState({
                        path: 'reveal',
                        data: {
                            open: message
                        }
                    });
                }}
                list={[
                    <skoash.Component ref="sentry" data-ref="sentry" message="sentry">
                        <skoash.Image
                            ref="img"
                            data-ref="sentry"
                            message="sentry" src="media/S_3/img_3.1.png"
                        />
                    </skoash.Component>,
                    <skoash.Component ref="pup" data-ref="pup" message="pup">
                        <skoash.Image
                            ref="img"
                            data-ref="pup"
                            message="pup" src="media/S_3/img_3.3.png"
                        />
                    </skoash.Component>,
                    <skoash.Component ref="babysitter" data-ref="babysitter" message="babysitter">
                        <skoash.Image
                            ref="img"
                            data-ref="babysitter"
                            message="babysitter" src="media/S_3/img_3.5.png"
                        />
                    </skoash.Component>,
                    <skoash.Component ref="gatherer" data-ref="gatherer" message="gatherer">
                        <skoash.Image
                            ref="img"
                            data-ref="gatherer"
                            message="gatherer" src="media/S_3/img_3.7.png"
                        />
                    </skoash.Component>,
                    <skoash.Component ref="alpha-male" data-ref="alpha-male" message="alpha-male">
                        <skoash.Image
                            ref="img"
                            data-ref="alpha-male"
                            message="alpha-male" src="media/S_3/img_3.9.png"
                        />
                    </skoash.Component>,
                    <skoash.Component ref="alpha-female" data-ref="alpha-female" message="alpha-female">
                        <skoash.Image
                            ref="img"
                            data-ref="alpha-female"
                            message="alpha-female" src="media/S_3/img_3.11.png"
                        />
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
