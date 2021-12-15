import './App.css';
import React, { Component } from 'react';

class App extends Component{

  constructor(){
    super();

    this.state = {
      string : 'Hello'
    }
  }


  
  render(){
    return(
      <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.state.string}
        </a>


      <button onClick={() => this.setState({string : 'test'})}>click me</button>
      </header>

    </div>
    )
  }
}

export default App;
