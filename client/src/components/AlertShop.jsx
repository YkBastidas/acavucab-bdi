import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Contact extends Component{
    constructor(props) {
      super(props);
      this.state = {
    }
}
render(){
    return(
        <section className="row margin-bottom">

<div className="callout col-sm-12 alert alert-primary" role="alert">
            <Link to="/metodopago" className="alert-link">
              > METODOS DE PAGO
            </Link>
          </div>
      </section>
    )
}
}
export default Contact
