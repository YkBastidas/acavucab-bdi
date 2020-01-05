import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class NaturalClient extends Component{
  render(){
    return(
      <section className="row margin-bottom">
        <div className="col-4 margin-bottom">
          <img src= {this.props.image} alt="Cliente 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-7">
          <h5><strong>{this.props.userData.nombre}</strong></h5>
          <h5><strong>Puntos acumulados: </strong></h5>
          <div className="col-12 margin-bottom">
            <div className="justified col-12">
              <div class="sticky" data-sticky data-anchor="content">
                <h5><a id="h5link" href = "/pedidos">Pedidos</a></h5><hr></hr>
                <h5><a id="h5link" href = "/seguridad">Seguridad</a></h5><hr></hr>
                <h5><a id="h5link" href = "/metodopago">Metodos de Pago</a></h5><hr></hr>
                <h5><a id="h5link" href = "/direccion">Direccion</a></h5><hr></hr>
                <h5><a id="h5link" href="/InicioSesion">Cambiar de cuenta</a></h5><hr></hr>
                <h5><a id="h5link" href="/carnet">Carnet de Afiliacion</a></h5><hr></hr>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default NaturalClient
