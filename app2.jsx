{/* Classes in react must be defined using ES2015 syntax */}

class MyComponent extends React.Component {
    render() {
      return (
        <div>
          <h2>React component embedded in placeholder</h2>
        </div>
      );
    }
  }
  
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Placeholder</h1>
          {/* Note that jsx must have closing tags, <MyComponent> will not work */}
          <MyComponent />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('customComponent'));