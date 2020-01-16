import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class ContactAdmin extends Component{
    constructor(props) {
      super(props);
      this.state = {
        contact1: props.image1,
        contact2: props.image2,
        contact3: props.image3
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-sm-12 col align-self-center centered">
          <h4 style={{
              margin: "0"
            }}>
            {this.state.title}
          </h4>
        </div>
        <div className="col-sm-3 mr-auto align-self-center margin">
        <h3>Yorfrank Bastidas</h3>
          <img src={this.state.contact1} alt="Administrador 1" style={{width: "inherit"}}/>
            <p>
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
        <h3>Mario Avena</h3>
          <img src={this.state.contact2} alt="Administrador 2" style={{width: "inherit"}}/>
          <p>
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
        <div className="col-sm-3 mr-auto align-self-center margin">
        <h3>David Ortuño</h3>
          <img src={this.state.contact3} alt="Contact 3" style={{width: "inherit"}}/>
            <p>
              <h5>
                Telefono:
                <a href={`tel:${"+58427777777"}`} target="new" id="h5link">
                   0426-7777777
                </a>
                <br/>
                Correo:
                <a href={`mailto:${"dortuno@acavucab.com"}`} target="new" id="h5link">
                  dortuno@acavucab.com
                </a>
              </h5>
            </p>
        </div>
      </section>
    )
  }
}

export default ContactAdmin
