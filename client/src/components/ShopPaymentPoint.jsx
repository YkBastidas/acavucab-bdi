import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class ShopPaymentPoint extends Component{
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
            <h4 class="mb-3">Pago en nuestra tienda</h4>
            <div class="d-block my-8">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"></input>
                <label class="custom-control-label" for="credit" onClick={this.props.onClick}>Tarjeta Credito</label>
              </div>
            </div>
            <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                      <input id="debit" name="paymentMethod" type="radio" class="custom-control-input"></input>
                      <label class="custom-control-label" for="debit" onClick={this.props.onClick}>Tarjeta Debito</label>
                    </div>
                  </div>
              <div>
              <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="points" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label" for="points">Puntos</label>
              </div>
            </div>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="divisa" name="paymentMethod" type="radio" class="custom-control-input"></input>
                <label class="custom-control-label" for="divisa" onClick={this.props.onClick}>Divisa</label>
              </div>
            </div>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="cheque" name="paymentMethod" type="radio" class="custom-control-input"></input>
                <label class="custom-control-label" for="cheque" onClick={this.props.onClick}>Cheque</label>
              </div>
            </div>
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="efectivo" name="paymentMethod" type="radio" class="custom-control-input"></input>
                <label class="custom-control-label" for="efectivo" onClick={this.props.onClick}>Efectivo</label>
              </div>
            </div>
                <label for="cc-name">Cantidad de puntos</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required></input>
              </div>
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
export default ShopPaymentPoint