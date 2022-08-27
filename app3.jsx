class App extends React.Component {
    render() {
      return (
        <div>
            {/* Note that any code within curly brace gets evaulated as javascript */}
          <h1>Hello {this.props.name}! This is an example of reading component properties</h1>
            {/* Note that we use className because class is a reserved keyword */}
          <p className="primary-text">This is an example of using css using className (not class)</p>          
        </div>
      );
    }
  }
  
  ReactDOM.render(<App name="michael" />, document.getElementById('props'));