export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="neighborhood-waste"
        >
            <div className="frame round">
                <div className="content">
                    Now that the<br/>
                    neighborhood waste<br/>
                    has been picked up, let's<br/>
                    identify the different<br/>
                    types of waste!
                </div>
            </div>
        </skoash.Screen>
    );
}
