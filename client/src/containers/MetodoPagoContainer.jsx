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

function crearTarjetaCredito(rif, CreditoData) {
  return axios.post('/create/creditCard', {
    banco: CreditoData.banco,
    numero: CreditoData.numero,
    tipo: CreditoData.tipo,
    cvc: CreditoData.cvc,
    nombre_impreso: CreditoData.nombre_impreso,
    cedula: CreditoData.cedula,
    fk_cliente: rif
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearCompra(rif, tienda_fisica, tienda_virtual) {
  return axios.post('/create/compra', {
    total_pago: 0,
    fecha_compra: null, //EN LOS QUERIES EL HACE CURRENT DATE
    fk_cliente: rif,
    fk_tienda_fisica: tienda_fisica,
    fk_tienda_virtual: tienda_virtual
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearPago(tipo_pago_credito, tipo_pago_debito, tipo_pago_cheque, tipo_pago_efectivo, tipo_pago_puntos, tipo_pago_divisa, cuota_afiliacion, compra, monto) {
  return axios.post('/create/pago', {
    monto: monto,
    fk_compra: compra,
    fk_tipo_pago_credito: tipo_pago_credito,
    fk_tipo_pago_debito: tipo_pago_debito,
    fk_tipo_pago_cheque: tipo_pago_cheque,
    fk_tipo_pago_efectivo: tipo_pago_efectivo,
    fk_tipo_pago_puntos: tipo_pago_puntos,
    fk_tipo_pago_divisa: tipo_pago_divisa,
    fk_cuota_afiliacion: cuota_afiliacion
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}

export default class MetodoPagoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditoVisible: true,
      CreditoData: {
        banco: "",
        numero: "",
        cvc: "",
        nombre_impreso: "",
        ci: "",
        Tipo: {
          visa: "",
          mastercard: ""
        }
      }
    };

    this.onClick = this.onClick.bind(this);

    this.handleBancoCredito = this.handleBancoCredito.bind(this);
    this.handleNumeroCredito = this.handleNumeroCredito.bind(this);
    this.handleCVCCredito = this.handleCVCCredito.bind(this);
    this.handleNombreImpresoCredito = this.handleNombreImpresoCredito.bind(this);
    this.handleCICredito = this.handleCICredito.bind(this);

    this.handleCreditoSubmit = this.handleCreditoSubmit.bind(this);

  }

  onClick() {
    this.setState({
      CreditoData: {
        banco: "",
        numero: "",
        cvc: "",
        nombre_impreso: "",
        ci: "",
        tipo: ""
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
  handleNombreImpresoCredito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CreditoData: {
        ...prevState.CreditoData,
        nombre_impreso: value
      }
    }), () => console.log(this.state.CreditoData));
  }
  handleCICredito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CreditoData: {
        ...prevState.CreditoData,
        ci: value
      }
    }), () => console.log(this.state.CreditoData));
  }
  handleCVCCredito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CreditoData: {
        ...prevState.CreditoData,
        cvc: value
      }
    }), () => console.log(this.state.CreditoData));
  }

  handleCreditoSubmit(e) {
    e.preventDefault();
    let creditcard = this.state.CreditoData;
    if (creditcard.cvc == '') {
      console.log('CVC Invalido');
    } else {
      if (creditcard.numero == '') {
        console.log('Numero Invalido');
      } else {
        if (creditcard.nombre_impreso == '') {
          console.log('Nombre Invalido');
        } else {
          if (creditcard.banco == '') {
            console.log('Nombre del banco Invalido');
          } else {
            //Falta la validacion de tipo
            if (1 == 1) {} else {
              if (creditcard.ci == '') {
                console.log('Cedula invalida');
              } else {
                //Aqui iria el registro
                console.log('Registro de tarjeta de credito');
              }
            }
          }
        }
      }
    }
  }

  render() {

    return (<section className=" row align-items-center">
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
              ? <Payment data={this.state.CreditoData} onClick={this.onClick} handleNumeroCredito={this.handleNumeroCredito} handleNombreImpresoCredito={this.handleNombreImpresoCredito} handleCVCCredito={this.handleCVCCredito} handleBancoCredito={this.handleBancoCredito} handleCICredito={this.handleCICredito} handleCreditoSubmit={this.handleCreditoSubmit}/>
              : <PaymentDebit data={this.state.DebitoData} onClick={this.onClick}/>

          }
        </div >
      </div>
    </section >);
  }

}
