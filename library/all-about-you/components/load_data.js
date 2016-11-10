export default function () {
  var loadData = {};
  if (!this.refs || !this.metaData) return;
  if (this.refs['selectable-reveal']) {
    if (this.refs['selectable-reveal'].refs && this.refs['selectable-reveal'].refs.selectable) {
      _.forEach(this.metaData, (ref) => {
        loadData[ref] = this.refs['selectable-reveal'].props.selectableSelectClass || this.refs['selectable-reveal'].refs.selectable.state.selectClass;
        this.refs['selectable-reveal'].refs.selectable.loadData = loadData;
      });
    }
  }

  if (this.refs['dropzone-reveal']) {
    if (this.refs['dropzone-reveal'].refs && this.refs['dropzone-reveal'].refs.dropzone) {
      this.refs['dropzone-reveal'].refs.dropzone.loadData = this.metaData;
    }
  }

  this.completeRefs();
}
