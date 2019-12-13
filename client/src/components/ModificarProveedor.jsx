import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class ModificarProveedor extends Component{
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
<h4>Razón social</h4>
    <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder=""></input>
      </div>
      <hr></hr>
      <h4>Denominacion Comercial</h4>
    <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder=""></input>
      </div>
      <hr></hr>
      <h4>RIF</h4>
    <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder=""></input>
      </div>
      <hr></hr>
      <h4>Direccion Fiscal</h4>
    <div class="input-group input-group-lg">
        <span class="input-group-addon"><i class="fa fa-user"></i></span>
        <input type="text" class="form-control" placeholder=""></input>
      </div>
      <hr></hr>
      <h4>Direccion Fisica</h4>
      <div class="input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-user"></i></span>
          <input type="text" class="form-control" placeholder=""></input>
        </div>
        <hr></hr>
        <h4>Telefono Contacto</h4>
      <div class="input-group input-group-lg">
          <span class="input-group-addon"><i class="fa fa-user"></i></span>
          <input type="text" class="form-control" placeholder=""></input>
        </div>
        <hr></hr>
        <h4>Telefono Contacto 2 </h4>
        <div class="input-group input-group-lg">
            <span class="input-group-addon"><i class="fa fa-user"></i></span>
            <input type="text" class="form-control" placeholder=""></input>
          </div>
          <hr></hr>
          <h4>Personal de Contacto</h4>
          <div class="input-group input-group-lg">
              <span class="input-group-addon"><i class="fa fa-user"></i></span>
              <input type="text" class="form-control" placeholder=""></input>
            </div>
            <hr></hr>
            <h4>Correo Electronico</h4>
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
                <h4>Clasificacion de Cervezas Fabricadas</h4>
                <select>
                        <option value="Cerveza-1">Cerveza 1</option>
                        <option value="Cerveza-2">Cerveza 2</option>
                        <option value="Cerveza-3">Cerveza 3</option>
                        <option value="Cerveza-4">Cerveza 4</option>
                      </select>
                    <hr></hr>
                    <button type="submit" class="btn btn-primary"><a id="h5link" href="/proveedores">Aplicar Cambios</a></button>
                </div>
                  
    
      </section>
    )
}
}
export default ModificarProveedor
