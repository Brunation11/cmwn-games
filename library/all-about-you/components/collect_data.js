export default function () {
  var data = {};
  if (!this.refs) return data;
  if (this.refs['selectable-reveal']) {
    data = [];
    if (this.refs['selectable-reveal'].refs && this.refs['selectable-reveal'].refs.selectable) {
      _.forIn(this.refs['selectable-reveal'].refs.selectable.refs, (ref) => {
        if (_.includes(ref.props.className, 'SELECTED') || _.includes(ref.props.className, 'HIGHLIGHTED')) data.push(ref.props['data-ref']);
      });
    }
  } else if (this.refs['dropzone-reveal']) {
    if (this.refs['dropzone-reveal'].refs && this.refs['dropzone-reveal'].refs.dropzone) {
      _.forIn(this.refs['dropzone-reveal'].refs.dropzone.refs, (ref, key) => {
        if (key.indexOf('dropzone-') === -1 || !ref.state.content) return;
        if (this.props.multipleAnswers) {
          data[key] = [];
          _.forIn(ref.state.content, (ref2) => {
            data[key].push(ref2.props.message);
          });
        } else {
          data[key] = {
            ref: ref.state.content.props.message,
            state: ref.state.content.state
          };
        }
      });
    }
  }
  return data;
}
