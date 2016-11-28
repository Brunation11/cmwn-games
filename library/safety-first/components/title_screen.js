export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="title"
      checkComplete={false}
      completeOnStart
      completeDelay={3000}
    />
  );
}
