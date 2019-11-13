import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class HomeRightSide extends Component{
    constructor(props) {
      super(props);
      this.state = {
        titleShop: props.title1,
        titleProviders: props.title2,
        provider1: props.image1,
        provider2: props.image2,
        provider3: props.image3,
        provider4: props.image4
    }
  }
  render(){
    return(
      <section className="row margin-bottom">
        <div className="col-12 centered">
          <h4>
            {this.state.titleShop}
          </h4>
        </div>
        <div className="col-12">
            <img src={this.state.provider1} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-12 align-self-center">
            <span><i className="fi-marker"> Ubicación: Final Av. Teherán, Urb. Montalbán, Caracas 1020 Apdo. 20.332, Venezuela</i></span> <br/>
            <span><i className="fi-address-book"> Contacto:</i></span> <br/>
            <span><i className="fi-torso-business"> Empleados:</i></span> <br/>
            <span><i className="fi-eye"> Acerca de:</i></span>
        </div>
      </section>
    )
  }
}

export default HomeRightSide
