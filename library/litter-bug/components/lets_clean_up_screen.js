export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="lets-clean-up"
        >
            <skoash.MediaSequence ref="media-sequence">
                <skoash.Audio
                    ref="vo-1"
                    type="voiceOver"
                    src="media/_assets/_sounds/_vos/LitterIsTrash.mp3"
                />
                <skoash.Audio
                    ref="vo-2"
                    type="voiceOver"
                    src="media/_assets/_sounds/_vos/PaperCansBottles.mp3"
                />
                <skoash.Audio
                    ref="vo-3"
                    type="voiceOver"
                    src="media/_assets/_sounds/_vos/LetsCleanUp.mp3"
                />
            </skoash.MediaSequence>
            <div className="copy animated">
                Litter is trash<br/>
                Paper, cans, and bottles on the ground<br/>
                make a mess and can hurt wildlife<br/>
                and the environment.
            </div>
            <skoash.Image
                ref="image"
                className="banner animated"
                src="media/_assets/_images/lets.clean.up.png"
            />
        </skoash.Screen>
    );
}
