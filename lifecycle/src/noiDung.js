import React, { Component } from 'react';

class NoiDung extends Component {
    componentWillReceiveProps(nextProps) {
        console.log("component Will Receive Props Noidungjs đã chạy" + nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("Shout component update Noidungjs đã chạy");
        return true; //this is the missing piece
        
      }
      componentWillUpdate(nextProps, nextState) {
        console.log("componetn will update Noidungjs đã chạy");
      }
      componentDidUpdate(prevProps, prevState) {
        console.log("componetn did update Noidungjs đã chạy");
      }
    componentWillUnmount() {
        
    }
    
    
    
    render() {
        return (
            <div>
                <h4>Xin chào {this.props.ten}</h4>
            </div>
        );
    }
}

export default NoiDung;