export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="lets-play"
        >
            <skoash.Audio
                type="voiceOver"
                src={CMWN.MEDIA.VO + 'Lets_Play.mp3'}
            />
            <skoash.Image
                className="hidden"
                src={CMWN.MEDIA.SPRITE + 'game1.intro.trees.png'}
            />
            <div className="frame square">
                <div className="content">
                    <h3>
                        Let's Play a Game!
                    </h3>
                    <p>
                        Watch Out!<br/>
                        If you miss a waste bag it affects<br/>
                        the health of the environment!<br/>
                        <br/>
                        Here is a hint! Be sure to unload<br/>
                        your basket to access<br/>
                        hidden waste bags!<br/>
                        Let's clean up!
                    </p>
                </div>
            </div>
            <div className="tree-1" />
            <div className="tree-2" />
            <div className="truck" />
        </skoash.Screen>
    );
}
