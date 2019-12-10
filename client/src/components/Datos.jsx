import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Datos extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        client1: props.client1,
        
    }
}
render(){
    return(
    <section className="row margin-bottom">

    <div className="medium-6 cell">
          <h1><span><strong>Mi Cuenta</strong></span></h1>
    </div>
    
      </section>
    )
}
}
export default Datos
