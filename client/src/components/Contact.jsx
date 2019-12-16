import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Contact extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        contact1: props.image1,
        contact2: props.image2,
        contact3: props.image3
    }
}
render(){
    return(
        <section className="row margin-bottom">

      <div className="medium-6 cell">
          <h1><span><strong>Contáctanos</strong></span></h1>
          </div>
  <hr></hr>
  <br></br>
      </section>
    )
}
}
export default Contact
