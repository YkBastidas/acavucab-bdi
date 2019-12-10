import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class RightPage extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
    }
}
render(){
    return(
        
          <div class="large-8 cell">
            <h4>Pago</h4>
            
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label" for="credit">Tarjeta Credito</label>
              </div>
            
            
              <div>
                <label for="cc-name">Nombre en tarjeta</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
              </div>
              <div>
                <label for="cc-number">Numero de tarjeta de Credito</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required></input>
              </div>
            
            
              <div>
                <label for="cc-expiration">Expiracion</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>
              </div>
              <div>
                <label for="cc-expiration">Codigo de seguridad</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>
              </div>
            
            <hr class="mb-4"></hr>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Comprar</button>
          </div>
        
   
    )
}
}
export default RightPage