import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import product10 from '../images/product10.png'
import product11 from '../images/product11.png'

import Payment from '../components/Payment';
import PaymentDebit from '../components/PaymentDebit';
import ProductPhoto from '../components/ProductPhoto';
import CenterPage from '../components/CenterPage';

axios.defaults.withCredentials = true;

function setNombreCredito(nombre_tarjeta,state){
  let i=0;
  while (1){
    if(state!==""){

    }
    console.log(state);
  }
}

export default class MetodoPagoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditoVisible: true,
      CreditoData: {
        banco:"", numero:"", cvc:"", nombre_impreso:"", ci:"",
        Tipo:{
          visa:"", mastercard:""}
      },
      DebitoData: {
        banco:"", numero:"", cvc:"", nombre_impreso:"", ci:"",
        Tipo:{
          ahorro:"", corriente:""}
      }
    };

    this.onClick = this.onClick.bind(this);

    this.handleBancoCredito = this.handleBancoCredito.bind(this);
    this.handleNumeroCredito = this.handleNumeroCredito.bind(this);

  }

  onClick() {
    this.setState({
      CreditoData: {
        banco:"", numero:"", cvc:"", nombre_impreso:"", ci:"",
        Tipo:{
          visa:"", mastercard:""}
      },
      DebitoData: {
        banco:"", numero:"", cvc:"", nombre_impreso:"", ci:"",
        Tipo:{
          ahorro:"", corriente:""}
      }
    })
    this.setState(prevState => ({
      creditoVisible: !prevState.creditoVisible

    }))

    this.setState(prevState => ({
      personalVisible: !prevState.personalVisible
    }))

  }

  handleBancoCredito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CreditoData: {
        ...prevState.CreditoData,
        banco: value
      }
    }), () => console.log(this.state.CreditoData));
  }
  handleNumeroCredito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CreditoData: {
        ...prevState.CreditoData,
        numero: value
      }
    }), () => console.log(this.state.CreditoData));
  }


    render() {

      return (
        <section className=" row align-items-center">
            <div class="col-md-4">
            <ProductPhoto product10={product10} product11={product11}/>
            </div>
            <div class="col-md-4">
            <CenterPage/>
            </div>
            <div class="col-md-4">
            <div className=" container">
          {
            this.state.creditoVisible
            ? <Payment data= {this.state.CreditoData} onClick={this.onClick} handleBancoCredito = {this.handleBancoCredito} handleNumeroCredito = {this.handleNumeroCredito}/>
          : <PaymentDebit data = {this.state.DebitoData} onClick={this.onClick} />

          }

        </div >
            </div>
        </section >);
    }

  }
