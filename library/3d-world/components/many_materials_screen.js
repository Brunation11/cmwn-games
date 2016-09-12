export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="many-materials"
    >
      <skoash.Component>
        <div className="words">
          <div>
            Wow, there are many materials you can use
          </div>
          <div>
            to make things with a 3D printer!
          </div>
          <div>
            The most common are plastic and metal,
          </div>
          <div>
            but other materials can be used.
          </div>
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
