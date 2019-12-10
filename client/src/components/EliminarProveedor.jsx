import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class EliminarProveedor extends Component{
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
        <h2>Eliminar un proveedor</h2>
    <hr></hr>
    <p>Para eliminar un proveedor introduzca los datos solicitados</p>

            <h4>RIF</h4>
              <div class="input-group input-group-lg">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input type="text" class="form-control" placeholder=""></input>
                </div>
                <hr></hr>
                <h4>Pagina Web</h4>
              <div class="input-group input-group-lg">
                  <span class="input-group-addon"><i class="fa fa-user"></i></span>
                  <input type="text" class="form-control" placeholder=""></input>
                </div>
                <hr></hr>

                <button type="submit" class="btn btn-primary"><a id="h5link" href="/proveedores">Eliminar</a></button>
              </div>
       
                  
    
      </section>
    )
}
}
export default EliminarProveedor
