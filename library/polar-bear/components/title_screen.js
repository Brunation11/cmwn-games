export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeOnStart
            silentComlete
        >
            <skoash.Image ref="title" className="title animated" src="media/images/title.png" />
        </skoash.Screen>
    );
}

// add silent complete to framework to prevent screen complete audio
