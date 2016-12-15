export default function (props, ref, key) {
    const jobs = [
        'designer',
        'architect',
        'surgeon',
        'engineer',
        'dentist',
        'artist',
    ];

    var nextPhoto = function () {
        skoash.trigger('updateState', {
            path: 'selectable',
            data: {
                select: jobs[
                    (jobs.indexOf(_.get(props, 'data.selectable.target.props.data-ref')) + 1) % jobs.length
                ]
            }
        });
    };

    var onClose = function () {
        skoash.trigger('updateState', {
            path: 'selectable',
            data: {
                target: null
            }
        });
        skoash.trigger('updateState', {
            path: 'reveal',
            data: {
                open: null
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="help-the-world"
        >
            <skoash.Image
                className="hidden"
                src={MEDIA.GAME + 'SpritesAnimations/sprite.minion.png'}
            />
            <skoash.Image
                className="hidden"
                src={MEDIA.GAME + 'SpritesAnimations/sprite.realworldgallery.png'}
            />
            <skoash.Audio
                type="voiceOver"
                src={MEDIA.GAME + 'SoundAssets/vos/VO_and_many.mp3'}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[0]}
                  src={MEDIA.GAME + 'SoundAssets/vos/VO_Product_Designers.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[1]}
                  src={MEDIA.GAME + 'SoundAssets/vos/VO_Architects.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[2]}
                  src={MEDIA.GAME + 'SoundAssets/vos/VO_Surgeons.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[3]}
                  src={MEDIA.GAME + 'SoundAssets/vos/VO_Engineers.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[4]}
                  src={MEDIA.GAME + 'SoundAssets/vos/VO_Dentists.mp3'}
              />
              <skoash.Audio
                  type="voiceOver"
                  ref={jobs[5]}
                  src={MEDIA.GAME + 'SoundAssets/vos/VO_Artists.mp3'}
              />
            </skoash.MediaCollection>
            <div className="header">
                …and many ways to help the world<br/>
                with the wonderful things you create!<br/>
                Click on the image to expand.
            </div>
            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                select={_.get(props, 'data.selectable.select')}
                list={[
                    <skoash.Component
                        type="li"
                        data-ref={jobs[0]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[1]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[2]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[3]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[4]}
                    />,
                    <skoash.Component
                        type="li"
                        data-ref={jobs[5]}
                    />,
                ]}
            />
            <skoash.Reveal
                openTarget="reveal"
                openReveal={_.get(props, 'data.selectable.target.props.data-ref')}
                onClose={onClose}
                list={[
                    <skoash.Component
                      type="li"
                      data-ref={jobs[0]}
                    >
                        <h3>
                          Product designers
                        </h3>
                        <div>
                          design and print useful objects for others!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                      type="li"
                      data-ref={jobs[1]}
                    >
                        <h3>
                          Architects
                        </h3>
                        <div>
                          create plans for housing that will<br/>
                          be 3D printed!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                      type="li"
                      data-ref={jobs[2]}
                    >
                        <h3>
                          Surgeon
                        </h3>
                        <div>
                          turn x-rays into 3D models<br/>
                          and repair injured body parts!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                      type="li"
                      data-ref={jobs[3]}
                    >
                        <h3>
                          Engineers
                        </h3>
                        <div>
                          make 3D models of your creations,<br/>
                          and then print the real thing!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                      type="li"
                      data-ref={jobs[4]}
                    >
                        <h3>
                          Dentists
                        </h3>
                        <div>
                          print replacement teeth for your patients!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                    <skoash.Component
                      type="li"
                      data-ref={jobs[5]}
                    >
                        <h3>
                          Artists
                        </h3>
                        <div>
                          express themselves through the magic<br/>
                          of 3D printing!
                        </div>
                        <button className="next-photo" onClick={nextPhoto} />
                    </skoash.Component>,
                ]}
            />
        </skoash.Screen>
    );
}
