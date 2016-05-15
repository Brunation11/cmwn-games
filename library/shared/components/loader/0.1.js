class Loader extends play.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div id="loader" className="center">
        <div className="group">
          <h2>Loading!</h2>
          <div className="spinner animated">
            <div className="spinner animated">
              <div className="spinner animated"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
