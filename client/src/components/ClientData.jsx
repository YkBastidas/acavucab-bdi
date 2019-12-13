import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class ClientData extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        client1: props.client1
       
        
    }
  }
  render(){
    return(
        <section className="row margin-bottom">
            <div className="col-4 margin-bottom">
          <img src={this.state.client1} alt="Cliente 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-7">
        <h5><strong>Nombre Persona</strong></h5>
        <p>Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed molestie augue sit amet leo.</p>
            <h5><strong>Puntos acumulados: </strong></h5>
            <ul>¿Desea un carnet de afiliacion?<a id="h5link" href="/carnet">Click aqui</a></ul>
            <div className="col-12 margin-bottom">
                <div className="justified col-12">
                    <div class="sticky" data-sticky data-anchor="content">
                    <h5><a id="h5link" href = "/pedidos">Pedidos</a></h5>
                    <hr></hr>
                    <h5><a id="h5link" href = "/seguridad">Seguridad</a></h5>
                    <hr></hr>
                    <h5><a id="h5link" href = "/metodopago">Metodos de Pago</a></h5>
                    <hr></hr>
                    <h5><a id="h5link" href = "/direccion">Direccion</a></h5>
                    <hr></hr>
                    <h5><a id="h5link" href="/InicioSesion">Cambiar de cuenta</a></h5>
                    <hr></hr>
                    <h5><a id="h5link" href="/carnet">Carnet de Afiliacion</a></h5>
                    <hr></hr>
                    </div>
                </div>
            </div>
        </div>
        
        
        </section>
            
     
    )
  }
}

export default ClientData
