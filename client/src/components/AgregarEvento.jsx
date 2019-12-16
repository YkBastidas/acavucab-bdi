import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AgregarEvento extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,

        }
    }
    render() {
        return (
            <section className="row margin-bottom">
                <div className="col-sm-12 col align-self-center">
                    <h3>LLene la siguiente informacion para un evento nuevo</h3>
                    <hr></hr>
                    <h4>Locacion</h4>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <input type="text" class="form-control" placeholder=""></input>
                    </div>
                    <hr></hr>
                    <h4>Proveedores</h4>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <input type="text" class="form-control" placeholder=""></input>
                    </div>
                    <hr></hr>
                    <h4>Productos en venta</h4>
                    <select>
                        <option value="Cerveza-1">Cerveza 1</option>
                        <option value="Cerveza-2">Cerveza 2</option>
                        <option value="Cerveza-3">Cerveza 3</option>
                        <option value="Cerveza-4">Cerveza 4</option>
                    </select>
                    <hr></hr>
                    <h4>Entradas Disponibles</h4>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                        <input type="text" class="form-control" placeholder=""></input>
                    </div>
                    <hr></hr>
                    <h4>Fecha de Evento</h4>
                    <input type="date" name="fecha"></input>
                    <hr></hr>
                <button type="button" class="btn btn-primary"><a href="/eventos" >Agregar Evento</a></button>
                </div>
            </section>
        )
    }
}
export default AgregarEvento