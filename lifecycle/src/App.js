import React, { Component } from 'react';
import './App.css';
import NoiDung from './NoiDung';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: 'khoitao',
      trangthai2: 'khoitao2',
    }
  }
  
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    console.log("Did mount");
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Shout component update đã chạy");
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
      trangthai: "trang thai duoc update",
      trangthai2: "trang thai duoc update22",
    });
  }
  
  render() {
    console.log("render cxc");
    console.log(this.state.trangthai);
    
    return (
      <div className="App">
        <NoiDung ten={this.state.trangthai2}/>
        <button className="btn btn-ranger" onClick={() => this.capNhatState()}>
                Update 
        </button>
        
      </div>
    );
  }
}

export default App;
