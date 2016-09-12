export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="imagine"
    >
      <skoash.Component>
        <div className="words">
          <div>
            Imagine a magical item
          </div>
          <div>
            that can make anything
          </div>
          <div>
            you can think of!
          </div>
        </div>
      </skoash.Component>
    </skoash.Screen>
  );
}
