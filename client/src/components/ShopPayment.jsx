import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ReactDOM from 'react-dom'

import Input from './Input'
import Radio from './Radio'
import Button from './Button'
import DateForm from './DateForm'

function formCredito(props){
  return(
    <section>
      <Input title={"Banco de la tarjeta"} name={"cc-banco"} inputtype={"text"} value={props.data.CreditoData.banco} handlerChange={props.handleCredito}/>
      <Input title={"Nombre impreso en la tarjeta"} name={"cc-name"} inputtype={"text"} value={props.data.CreditoData.nombre_impreso} handlerChange={props.handleCredito}/>
      <Input title={"Cedula del tarjeta-habiente"} name={"cc-ci"} inputtype={"text"} value={props.data.CreditoData.ci} handlerChange={props.handleCredito}/>
      <Input title={"Numero de tarjeta"} name={"cc-number"} inputtype={"text"} value={props.data.CreditoData.numero} handlerChange={props.handleCredito}/>
      <Input title={"Codigo de validacion"} name={"cc-cvc"} inputtype={"text"} value={props.data.CreditoData.cvc} handlerChange={props.handleCredito}/>
      <DateForm title={"* Fecha de Expiracion:"} name={"cc-expiration"} inputtype={"date"} min={"1899-01-01"} max={"2100-01-01"} value={props.data.CreditoData.bornDate} handlerChange={props.handleCredito}/>
      <Button action={props.handleSubmitCredito} type={'primary'} title={'Comprar'}></Button>
    </section>
  )
}

function formDebito(props){
  return(
    <section>
      <Input title={"Banco de la tarjeta"} name={"dc-banco"} inputtype={"text"} value={props.data.DebitoData.banco} handlerChange={props.handleDebito}/>
      <Input title={"Nombre impreso en la tarjeta"} name={"dc-name"} inputtype={"text"} value={props.data.nombre_impreso} handlerChange={props.handleDebito}/>
      <Input title={"Cedula del tarjeta-habiente"} name={"dc-ci"} inputtype={"text"} value={props.data.ci} handlerChange={props.handleDebito}/>
      <Input title={"Numero de tarjeta"} name={"dc-number"} inputtype={"text"} value={props.data.numero} handlerChange={props.handleDebito}/>
      <DateForm title={"* Fecha de expiracion:"} name={"dc-expiration"} inputtype={"date"} min={"1899-01-01"} max={"2100-01-01"} value={props.data.bornDate} handlerChange={props.handleBornDate}/>
      <Input title={"Codigo de validacion"} name={"dc-cvc"} inputtype={"text"} value={props.data.cvc} handlerChange={props.handleDebito}/>
      <Button action={props.handleDebitoSubmit} type={'primary'} title={'Comprar'}></Button>
    </section>
  )
}

class ShopPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    }
    this.handleRadioCredito = this.handleRadioCredito.bind(this)
    this.handleRadioDebito = this.handleRadioDebito.bind(this)
  }
  handleRadioCredito(e){
    e.preventDefault()
    let elementHTML = document.getElementById('optionSelected')
    document.getElementById('Tarjeta Credito').setAttribute("checked", true)
    ReactDOM.render(formCredito(this.props), elementHTML);
  }
  handleRadioDebito(e){
    e.preventDefault()
    let elementHTML = document.getElementById('optionSelected')
    ReactDOM.render(formDebito(this.props), elementHTML);
  }
  render() {
    return (<div class="col-md-8 order-md-2">
      <div class="grid-x grid-margin-x">
        <div class="large-12 cell">
          <h4 class="mb-3">Pago en nuestra tienda</h4>
          <div class="d-block my-3">
            <form onSubmit={this.handleCompra} className="needs-validation formulary">
              <span>Total:</span>
              <Radio id="Tarjeta Credito" name="paymentMethod" inputtype="radio" handlerChange={this.handleRadioCredito}/>
              <Radio id="Tarjeta Debito" name="paymentMethod" inputtype="radio" handlerChange={this.handleRadioDebito}/>
              <Radio id="Puntos" name="paymentMethod" inputtype="radio" handlerChange={this.handleRadioPuntos}/>
              <Radio id="Divisas" name="paymentMethod" inputtype="radio" handlerChange={this.handleRadioDivisas}/>
              <Radio id="Cheque" name="paymentMethod" inputtype="radio" handlerChange={this.handleRadioCheque}/>
              <Radio id="Efectivo" name="paymentMethod" inputtype="radio" handlerChange={this.handleRadioEfectivo}/>
              <div id ="optionSelected">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>)
  }
}
export default ShopPayment
