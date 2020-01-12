import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Input from './Input';

class Payment extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,

    }
}
render(){
    return(
        <div class="col-md-8 order-md-2">
        <div class="grid-x grid-margin-x">
          <div class="large-12 cell">
            <h4 class="mb-3">Pago online</h4>
            <div class="d-block my-8">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"checked required ></input>
                <label class="custom-control-label" for="credit">Tarjeta Credito</label>
              </div>
            </div>
            <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                      <input id="debit" name="paymentMethod" type="radio" class="custom-control-input"></input>
                      <label class="custom-control-label" for="debit" onClick={this.props.onClick}>Tarjeta Debito</label>
                    </div>
                  </div>
              <div>
                <label for="cc-name">Nombre en tarjeta</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
              </div>
              <div>
                <Input title={"Numero de tarjeta de Credito"} name={"cc-number"} inputtype={"text"} value={this.props.data.numero} handlerChange={this.props.handleNumeroCredito}/>
              </div>
          </div>

              <div>
                <label for="cc-expiration">Expiracion</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required></input>
              </div>
              <div>
                <label for="cc-expiration">Codigo de seguridad</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required></input>
                <hr></hr>
              </div>
              <li>
                <span>Total: </span>
                <strong>Numero</strong>
                </li>
            <hr></hr>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Comprar</button>


        </div>
      </div>


    )
}
}
export default Payment
