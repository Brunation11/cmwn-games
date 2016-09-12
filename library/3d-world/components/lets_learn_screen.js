export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="lets-learn"
    >
      <skoash.Component>
        <div className="words">
          <div>
            Let’s learn about the
          </div>
          <div>
            3D printing process
          </div>
          <div>
            with this video
          </div>
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
