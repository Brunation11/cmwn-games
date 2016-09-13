import Dropzone from 'shared/components/dropzone/0.1';

export default function (props, ref, key) {
  return (
    <skoash.Screen
      {...props}
      ref={ref}
      key={key}
      id="list"
    >
      <Dropzone

      />
      <div>
        <span>Drag and Drop</span><br/>
        the items to the list above.<br/>
        Choose as many as you like.
      </div>
    </skoash.Screen>
  );
}
