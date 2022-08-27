{/* Classes in react must be defined using ES2015 syntax */}

class MyComponent extends React.Component {
    render() {
      return (
        <div>
          <h2>Here's a component!</h2>
        </div>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Here's my second React App!</h1>
          {/* Note that jsx must have closing tags, <MyComponent> will not work */}
          <MyComponent />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('customComponent'));