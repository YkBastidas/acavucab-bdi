import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class ProviderShop extends Component{
    constructor(props) {
      super(props);
      this.state = {
        provider1: props.provider1,
        provider2: props.provider2,
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-sm-3 mr-auto align-self-center margin">
          <img src={this.state.provider1} alt="Administrador 1" style={{width: "inherit"}}/>
            <p>
            <h3>Yorfrank Bastidas</h3>
              <h5>
                Telefono:
                <a href={`tel:${"+584265555555"}`} target="new" id="h5link">
                   0426-5555555
                </a>
                <br/>
                Correo:
                <a href={`mailto:${"ykbastidasc@acavucab.com"}`} target="new" id="h5link">
                  ybastidas@acavucab.com
                </a>
              </h5>
            </p>
        </div>
        <div className="col-sm-3 mr-auto align-self-center margin">
          <img src={this.state.provider2} alt="Administrador 2" style={{width: "inherit"}}/>
          <p>
          <h3>Mario Avena</h3>
            <h5>
              Telefono:
              <a href={`tel:${"+584266666666"}`} target="new" id="h5link">
                 0426-6666666
              </a>
              <br/>
              Correo:
              <a href={`mailto:${"mavena@acavucab.com"}`} target="new" id="h5link">
                mavena@acavucab.com
              </a>
            </h5>
          </p>
        </div>
      </section>
    )
  }
}

export default ProviderShop
