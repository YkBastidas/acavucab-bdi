import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class AlertBeer extends Component{
    constructor(props) {
      super(props);
      this.state = {
    }
}
render(){
    return(
        <section className="row margin-bottom">

<div className="callout col-sm-12 alert alert-primary" role="alert">
            <Link to="/agregarcerveza" className="alert-link">
              > AGREGAR PRODUCTO
            </Link>
          </div>
      </section>
    )
}
}
export default AlertBeer
