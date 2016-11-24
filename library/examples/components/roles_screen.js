import SelectableCanvasReveal from 'shared/components/selectable_canvas_reveal/0.1';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="roles"
        >
            <SelectableCanvasReveal
                ref="selectable-canvas-reveal"
                selectableList={[
                    <skoash.Component>
                      <skoash.Image ref="img" src="media/S_3/img_3.1.png" />
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Image ref="img" src="media/S_3/img_3.3.png" />
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Image ref="img" src="media/S_3/img_3.5.png" />
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Image ref="img" src="media/S_3/img_3.7.png" />
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Image ref="img" src="media/S_3/img_3.9.png" />
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Image ref="img" src="media/S_3/img_3.11.png" />
                    </skoash.Component>,
                ]}
                revealAssets={[
                    <skoash.Audio ref="vo-1" type="voiceOver" src="media/S_3/VO_3.2.mp3" />,
                    <skoash.Audio ref="vo-2" type="voiceOver" src="media/S_3/VO_3.3.mp3" />,
                    <skoash.Audio ref="vo-3" type="voiceOver" src="media/S_3/VO_3.4.mp3" />,
                    <skoash.Audio ref="vo-4" type="voiceOver" src="media/S_3/VO_3.5.mp3" />,
                    <skoash.Audio ref="vo-5" type="voiceOver" src="media/S_3/VO_3.6.mp3" />,
                    <skoash.Audio ref="vo-6" type="voiceOver" src="media/S_3/VO_3.7.mp3" />,
                    <skoash.Audio ref="vo-7" type="voiceOver" src="media/S_3/VO_3.1.mp3" />,
                ]}
                revealList={[
                    <skoash.Component>
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_2.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.2.png" />
                            <span>
                                I stand watch!<br/>
                                I look out for predators<br/>
                                while the others forage for food.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_3.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.4.png" />
                            <span>
                                I'm a pup so I'm under 6 months old.<br/>
                                I lived in the burrow for the first three weeks.
                                Then I learn how to forage in the deserts and grasslands of Africa.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_4.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.6.png" />
                            <span>
                                I help babysit the pups!<br/>
                                I teach them everything from how to<br/>
                                safely eat a scorpion (yum!)<br/>
                                to how to react to threats.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component>
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
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_6.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.10.png" />
                            <span>
                                Alpha males usually come<br/>
                                from different mobs.<br/>
                                I work with the alpha female to<br/>
                                lead the group and care for the pups.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_7.png" />
                            <skoash.Image ref="img" src="media/S_3/img_3.12.png" />
                            <span>
                                As an alpha female, I lead the group<br/>
                                and mother the pups along with<br/>
                                the alpha male.<br/>
                                Female Meerkats are dominant.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                    <skoash.Component>
                        <skoash.Component>
                            <skoash.Image ref="bkg" className="background" src="media/_Frames/FR_1.png" />
                            <span>
                                Every Meerkat has a job.<br/>
                                Click on each to discover.
                            </span>
                        </skoash.Component>
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
