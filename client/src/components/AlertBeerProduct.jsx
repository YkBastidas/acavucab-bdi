import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class AlertBeerProduct extends Component{
    constructor(props) {
      super(props);
      this.state = {
    }
}
render(){
    return(
        <section className="row margin-bottom">

<div className="callout col-sm-12 alert alert-primary" role="alert">
            <Link to="/modificarcerveza" className="alert-link">
              > MODIFICAR PRODUCTO
            </Link>
          </div>
      </section>
    )
}
}
export default AlertBeerProduct
