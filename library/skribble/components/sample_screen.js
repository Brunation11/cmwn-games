import Dropzone from '../../shared/components/dropzone/0.1.js';

class SampleScreen extends play.Screen {
  constructor() {
    super();

    this.state = {
      id: 'sample'
    };

  }

  renderPrevButton() {
    return null;
  }

  renderNextButton() {
    return (
      <button className={'next-screen'} onClick={this.goto.bind(this, 'canvas')}>{'>'}</button>
    );
  }

  renderContent() {
    return (
      <div>
        <Dropzone ref={'dropzone'} message={'drag'} />
      </div>
    );
  }
}

export default SampleScreen;
