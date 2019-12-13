import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class CenterPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
    }
}
render(){
    return(
    
  
    
      
        <div class="col-md-8 order-md-4">
          <h4 class="mb-3">Direccion de envio</h4>
          <form class="needs-validation" novalidate>
            
              <div>
                <label for="firstName">Nombres</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required></input>
              </div>
              <div>
                <label for="lastName">Apellidos</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required></input>
              </div>

            <div>
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email" placeholder="tu@ejemplo.com" value="" required></input>
            </div>

            <div>
              <label for="address">Direccion</label>
              <input type="text" class="form-control" id="address" placeholder="" required></input>
            </div>

            <div>
              <label for="address2">Direccion 2 <span class="text-muted">(Opcional)</span></label>
              <input type="text" class="form-control" id="address2" placeholder=""></input>
            </div>

            
              <div>
                <label for="country">Pais</label>
                <select class="custom-select d-block w-100" id="country" required>
                  <option value="">Selecciona...</option>
                  <option>Venezuela</option>
                </select>
              </div>
              <div >
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
              <div>
                <label for="zip">Codigo postal</label>
                <input type="text" class="form-control" id="zip" placeholder="" required></input>
              </div>
            
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="save-info"></input>
              <hr></hr>
              <label class="custom-control-label" for="save-info">Salvar esta informacion</label>
            </div>
            </form>
        </div>
    )
}
}
export default CenterPage