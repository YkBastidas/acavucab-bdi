import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CodigoConfirmacion extends Component{
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
      <h3>Introduzca el codigo de recuperacion enviado al correo colocado</h3>
        <div class="input-group input-group-lg">
                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                <input type="text" class="form-control" placeholder=""></input>
              </div>
              <form action="/">
                <hr></hr>
                <button type="submit" class="btn btn-primary"><a id="h5link" href="/micuenta" class="button">Enviar</a></button>
              </form>
            </div>
      
      </section>
    )
}
}
export default CodigoConfirmacion
