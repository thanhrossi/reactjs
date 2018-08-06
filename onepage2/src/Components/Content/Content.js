import React, { Component } from 'react';

class Content extends Component {
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
                    <div className="row">
                        <div className="btn btn-group">
                        <button className="btn btn-info">Edit</button>
                        <button className="btn btn-warning">Remove</button>
                        </div>
                    </div>
                    <hr/>
                </div>
                </div>
            </div>
            </div>
                
        );
    }
}

export default Content;