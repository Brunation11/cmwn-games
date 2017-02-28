export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
            checkComplete={false}
            completeOnStart
            completeDelay={2000}
        >
            <skoash.Component className="center">
                <skoash.Component className="content-group">
                    <skoash.Image className="animated tada" src={`${CMWN.MEDIA.IMAGE}title.png`} />
                </skoash.Component>
                <skoash.Component className="bubbles">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
