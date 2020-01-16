import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Input from './Input';
import Button from './Button';
import DateForm from './DateForm';



class ShopPaymentDebit extends Component{
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
                      <input id="debit" name="paymentMethod" type="radio" class="custom-control-input"checked required ></input>
                      <label class="custom-control-label" for="debit" >Tarjeta Debito</label>
                    </div>
                  </div>
              <div>
              <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="points" name="paymentMethod" type="radio" class="custom-control-input"></input>
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
                <input id="efectivo" name="paymentMethod" type="radio" class="custom-control-input"></input>
                <label class="custom-control-label" for="efectivo" onClick={this.props.onClick}>Efectivo</label>
              </div>
            </div>
              </div>
              <div>
                <Input title={"Banco de la tarjeta"} name={"cc-banco"} inputtype={"text"} value={this.props.data.banco} handlerChange={this.props.handleBancoDebito}/>
              </div>
              <div>
                <Input title={"Nombre impreso en la tarjeta"} name={"cc-name"} inputtype={"text"} value={this.props.data.nombre_impreso} handlerChange={this.props.handleNombreImpresoDebito}/>     
              </div>
              <div>
                <Input title={"Cedula del tarjeta-habiente"} name={"cc-ci"} inputtype={"text"} value={this.props.data.ci} handlerChange={this.props.handleCIDebito}/>     
              </div>
              <div>
                <Input title={"Numero de tarjeta"} name={"cc-number"} inputtype={"text"} value={this.props.data.numero} handlerChange={this.props.handleNumeroDebito}/>
              </div>
          </div>

              <div>
              <DateForm title={"* Fecha de expiracion:"} name={"expiration"} inputtype={"date"} min={"1899-01-01"} max={"2100-01-01"} value={this.props.data.bornDate} handlerChange={this.props.handleBornDate}/>
              </div>
              <div>
              <Input title={"Codigo de validacion"} name={"cc-cvc"} inputtype={"text"} value={this.props.data.cvc} handlerChange={this.props.handleCVCDebito}/>
              </div>
              <li>
                <span>Total: </span>
                <strong>Numero</strong>
                </li>
            <hr></hr>
            <Button action={this.props.handleDebitoSubmit} type={'primary'} title={'Comprar'}></Button>
        </div>
      </div>
    
   
    )
}
}
export default ShopPaymentDebit