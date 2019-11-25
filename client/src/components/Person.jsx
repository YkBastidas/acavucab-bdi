import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Person extends Component{
    constructor(props) {
      super(props);
      this.state = {
        name: props.title,
        photo: props.image,
        data1: props.data1,
        data2: props.data2
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-sm-12 align-self-center">
          <img src={this.state.photo} alt={this.state.title} style={{width: "inherit"}}/>
          <h5>
            <Link id="h5link" to="/descrip-empleado/empleado1">{this.state.name}</Link>
          </h5>
          <p>
            <span>
              <i className="fi-address-book"> C.I.: {this.state.data1}</i> <br/>
            </span>
            <span>
              <i className="fi-torso-business"> Cargo: {this.state.data2}</i>
            </span>
          </p>

      </div>
    </section>
    )
  }
}

export default Person
