export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="bunch-of-problems"
    >
      <div className="words">
        <div>
          Coming up are a
        </div>
        <div>
          bunch of problems
        </div>
        <div>
          that need a 3D printer
        </div>
        <div>
          to solve!
        </div>
      </div>
    </skoash.Screen>
  );
}
