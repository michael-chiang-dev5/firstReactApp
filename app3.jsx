class App extends React.Component {
    render() {
      return (
        <div>
            {/* Note that any code within curly brace gets evaulated as javascript */}
          <h1>Hello {this.props.name}!</h1>
            {/* Note that we use className because class is a reserved keyword */}
          <p className="primary-text">This should be large blue text</p>          
        </div>
      );
    }
  }
  
  ReactDOM.render(<App name="student" />, document.getElementById('props'));