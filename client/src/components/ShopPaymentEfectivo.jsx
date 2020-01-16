import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Input from './Input';
import Button from './Button';


class ShopPaymentEfectivo extends Component{
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
                      <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" ></input>
                      <label class="custom-control-label" for="debit" onClick={this.props.onClick}>Tarjeta Debito</label>
                    </div>
                  </div>
              <div>
              <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="points" name="paymentMethod" type="radio" class="custom-control-input" ></input>
                <label class="custom-control-label" for="points" onClick={this.props.onClick}>Puntos</label>
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
                <input id="efectivo" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label" for="efectivo">Efectivo</label>
              </div>
            </div>
            <Input title={"Denominacion"} name={"denominacion-cash"} inputtype={"text"} value={this.props.data.denominacion} handlerChange={this.props.handleDenominacionEfectivo}/>
            <Input title={"Cantidad"} name={"cantidad-cash"} inputtype={"text"} value={this.props.data.cantidad} handlerChange={this.props.handleCantidadEfectivo}/>
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
export default ShopPaymentEfectivo