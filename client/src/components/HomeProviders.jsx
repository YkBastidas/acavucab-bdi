import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class HomeProviders extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.titleProviders,
        image1: props.imgProvider1,
        image2: props.imgProvider2,
        image3: props.imgProvider3,
        image4: props.imgProvider4
    }
  }
  render(){
    return(
      <section className="row margin-bottom">
        <div className="col-12 centered">
          <h4>
            {this.state.title}
          </h4>
        </div>
        <div className="col-6 margin-bottom">
            <img src={this.state.image1} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-6 align-self-center">
              <h5> All I need is a space suit and I'm ready to go. </h5>
        </div>
        <div className="col-6 margin-bottom">
            <img src={this.state.image2} alt="Proveedor 2" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-6 align-self-center">
            <h5> Are the stars out tonight? I don't know if it's cloudy or bright. </h5>
        </div>
        <div className="col-6 margin-bottom">
            <img src={this.state.image3} alt="Proveedor 3" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-6 align-self-center">
            <h5> And the world keeps spinning. </h5>
        </div>
        <div className="col-6 margin-bottom">
            <img src={this.state.image4} alt="Proveedor 4" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-6 align-self-center">
            <h5> Cold hearted orb that rules the night. </h5>
        </div>
      </section>
    )
  }
}

export default HomeProviders
