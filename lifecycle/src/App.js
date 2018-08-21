import React, { Component } from 'react';
import './App.css';
import noiDung from './noiDung.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: 'khoitao'
    }
  }
  
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("Did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Shout componetn update đã chạy");
    return true; //this is the missing piece
    
  }
  componentWillUpdate(nextProps, nextState) {
    console.log("componetn will update đã chạy");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componetn did update đã chạy");
  }
  
  
  capNhatState = () =>{
    this.setState({
      trangthai: "trang thai duoc update"
    });
  }
  
  render() {
    console.log("render cxc");
    console.log(this.state.trangthai);
    
    return (
      <div className="App">
        
        <button className="btn btn-ranger" onClick={() => this.capNhatState()}>
                Update 
                <noiDung></noiDung>
        </button>
      </div>
    );
  }
}

export default App;
