import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class BeerDescription extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        product1: props.product1,
        product2: props.product2,
        product3: props.product3,
        product4: props.product4,
        product5: props.product5
    }
}
render(){
    return(
    <section className="row margin-bottom">
        

        <div className="col-11 margin-bottom">
            <img src={this.state.product1} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.product2} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.product3} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.product4} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.product5} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        
    </section>
    )
}
}
export default BeerDescription
