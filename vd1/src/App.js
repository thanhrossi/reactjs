import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function One(){
  return (
    <div>
      <h1>One </h1>
      <h2>xcczx</h2>
    </div>
    
  )
}
var Two = function(){
  return (
    <div>
      <h3>Chào mình là thanh</h3>
    </div>
  );
}

var Three = (props) => (
  <div>
      <h3>Cxthanh {props.tieude}</h3>
    </div>
);

class Four extends Component {
  render() {
    return (
      <div>
        From {this.props.cool}
      </div>
    );
  }
}
const arr1 = [1,2,3,4,5];
const arr2 = arr1.map((x) => x*2+" ");
class Ngon extends Component {
  render() {
    return (
      <div>
        {arr2}
      </div>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">x, chào mừng to React</h1>
          <One/>
        </header>
        <p className="App-intro">
        <Two/>
        <Three tieude="HUxxx"/>
        <Three tieude="HUxxxxx"/>
        <Four cool="Thanh 0 Beo"/>
        <Ngon/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
