import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class EditarDireccion extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
    }
}
render(){
    return(
        <section className="row margin-bottom">
            <div className="col-sm-12 col align-self-center">
                <div class="col-md-8 order-md-2">
                    <h4 class="mb-3">Editar Direccion</h4>
                    <hr></hr>
                    <h6>Seleccione lo que quiere modificar.</h6>
                    <form class="needs-validation" novalidate>
                    <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName">Nombres</label>
                      <input type="text" class="form-control" id="firstName" placeholder="" value="" required></input>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName">Apellidos</label>
                      <input type="text" class="form-control" id="lastName" placeholder="" value="" required></input>
                    </div>
                    </div>
                    <div class="mb-3">
                    <label for="address">Direccion</label>
                    <input type="text" class="form-control" id="address" placeholder="" required></input>
                    <div class="row">
                    <div class="col-md-5 mb-3">
                      <label for="country">Pais</label>
                      <select class="custom-select d-block w-100" id="country" required>
                        <option value="">Selecciona...</option>
                        <option>Venezuela</option>
                      </select>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="state">Estado</label>
                      <select class="custom-select d-block w-100" id="state" required>
                        <option value="">Selecciona...</option>
                        <option>Distrito capital</option>
                        <option>Vargas</option>
                        <option>Miranda</option>
                        <option>Zulia</option>
                        <option>Carabobo</option>
                      </select>
                    </div>
                    <div class="col-md-3 mb-3">
                      <label for="zip">Codigo postal</label>
                      <input type="text" class="form-control" id="zip" placeholder="" required></input>
                    </div>
                   <button type="button" class="btn btn-primary"> <a href="/direccion" class="button">Aplicar Cambios</a></button>
                    </div>
                  </div>
                    </form>
                </div>
                </div>
        </section>
    )
}
}
export default EditarDireccion