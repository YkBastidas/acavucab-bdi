import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Direccion extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title
        
        
    }
}
render(){
    return(
        <section className="row margin-bottom">
            <div className="justified col-12 align-self-center">
                <div className="grid-container">
                    <div className="container">
                        <hr></hr>
                        <div className="thumbnail">
                            <div className="caption">
                                <h4 className="pull-right">Descripcion Direccion</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><a id="h5link" href="/editardireccion">Editar</a></li>
                                    <li className="breadcrumb-item"><a id="h5link" href="/eliminardireccion">Eliminar</a></li>
                                    <li className="breadcrumb-item"><a id="h5link" href="/micuenta">Definir como principal</a></li>
                                </ol>
                            </nav>
                        </div>
                        <hr></hr>
                        <h4><a id="h5link" href="/agregardireccion">Agregar nueva direccion</a></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
}
export default Direccion