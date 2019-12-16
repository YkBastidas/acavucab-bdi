import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Contrasena extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
    }
}
render(){
    return(
        <section className="row margin-bottom">

      <div className="justified col-12 align-self-center">
      <h3>Recuperacion de contraseña</h3>
    <hr></hr>
    <h6>Introduzca el correo al que se le mandara un codigo de recuperacion</h6>
    <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder=""></input>
      </div>
      <hr></hr>
      <button type="submit" class="btn btn-primary"><a id="h5link" href="/codigoconfirmacion" class="button">Mandar</a></button>
    </div>
      
      </section>
    )
}
}
export default Contrasena
