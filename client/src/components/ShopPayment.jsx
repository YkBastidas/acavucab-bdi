import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Input from './Input';
import Button from './Button';
import DateForm from './DateForm';


class ShopPayment extends Component{
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
            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                <label class="custom-control-label" for="credit">Tarjeta Credito</label>
              </div>
            </div>
            <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                      <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                      <label class="custom-control-label" for="credit">Tarjeta Debito</label>
                    </div>
                  </div>
            
                  <div>
                <Input title={"Banco de la tarjeta"} name={"cc-banco"} inputtype={"text"} value={this.props.data.banco} handlerChange={this.props.handleBancoCredito}/>
              </div>
              <div>
                <Input title={"Nombre impreso en la tarjeta"} name={"cc-name"} inputtype={"text"} value={this.props.data.nombre_impreso} handlerChange={this.props.handleNombreImpresoCredito}/>     
              </div>
              <div>
                <Input title={"Cedula del tarjeta-habiente"} name={"cc-ci"} inputtype={"text"} value={this.props.data.ci} handlerChange={this.props.handleCICredito}/>     
              </div>
              <div>
                <Input title={"Numero de tarjeta"} name={"cc-number"} inputtype={"text"} value={this.props.data.numero} handlerChange={this.props.handleNumeroCredito}/>
              </div>
          </div>
              <div>
              <Input title={"Codigo de validacion"} name={"cc-cvc"} inputtype={"text"} value={this.props.data.cvc} handlerChange={this.props.handleCVCCredito}/>
              </div>
              <div>
               <DateForm title={"* Fecha de Expiracion:"} name={"bornDate"} inputtype={"date"} min={"1899-01-01"} max={"2100-01-01"} value={this.props.data.bornDate} handlerChange={this.props.handleBornDate}/>
              </div>
              <li>
                <span>Total: </span>
                <strong>Numero</strong>
                </li>
            <hr></hr>
            <Button action={this.props.handleCreditoSubmit} type={'primary'} title={'Comprar'}></Button>
        </div>
      </div>
    
   
    )
}
}
export default ShopPayment