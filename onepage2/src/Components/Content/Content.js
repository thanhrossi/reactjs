import React, { Component } from 'react';

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            trangThai : 0
        }
    }
    thongbao = () => {
        alert("Đang bấm thông báo");
    }
    thongbao2 = (x) => {
        alert(x);
    }
    editClick = () => {
        this.setState({
            trangThai : 1
        });
        console.log(this.state.trangThai);
    }
    saveClick = () => {
        this.setState({
            trangThai : 0
        });
        console.log(this.state.trangThai);
    }
    displayCheck = () => {
        if(this.state.trangThai === 0) {
            return this.renderButton();
        }else {
            return this.renderForm();
        }
    }
    renderButton = () => (
        <div className="row">
            <div className="btn btn-group">
                <button className="btn btn-info" onClick={() => this.editClick()}>Edit</button>
                <button className="btn btn-warning"  onClick={() => this.thongbao2("xcxc")}>Remove</button>
            </div>
        </div>
    )
    renderForm = () => (
        <div className="row">
            <div className="form-group">
                <input type="text" defaultValue={this.props.title} name="ten" className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-lock btn-danger" onClick={() => this.saveClick()}>Save</button>
            </div>
        </div>
    )
    render() {
        return (
            
            <div className="col-lg-4">
            <div className="row">
                <div className={"col-lg-5 order-lg-" + this.props.type}>
                <div className="p-1">
                    <img className="img-fluid rounded-circle" src={"img/"+this.props.image} alt="xx" />
                </div>
                </div>
                <div className="col-lg-7 order-lg-1">
                <div className="p-1">
                    <h4 className="display-6">{this.props.title}</h4>
                    <p>{this.props.quote}</p>
                    {this.displayCheck()}
                    <hr/>
                </div>
                </div>
            </div>
            </div>
                
        );
    }
}

export default Content;