import './App.css';
import React, { Component } from 'react';

class App extends Component{

  constructor(){
    super();

    this.state = {
      monster: [
        {
          name : 'M1'
        },
        {
          name : 'M2'
        },
        {
          name : 'M3'
        }
      ]
    }
  }



  render(){
    return(
      <div className="App">
        {this.state.monster.map(monster => <h1> {monster.name} </h1>)}
      </div>
    );
  }
}

export default App;
