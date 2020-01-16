import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import ShopPayment from '../components/ShopPayment';
import ShopPaymentDebit from '../components/ShopPaymentDebit';
import ShopPaymentPoint from '../components/ShopPaymentPoint';
import ShopPaymentDivisa from '../components/ShopPaymentDivisa';
import ShopPaymentCheque from '../components/ShopPaymentCheque';
import ShopPaymentEfectivo from '../components/ShopPaymentEfectivo';

axios.defaults.withCredentials = true;
var logged = false;

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
function crearTarjetaDebito(rif, DebitoData) {
  return axios.post('/create/debitCard', {
    banco: DebitoData.banco,
    numero: DebitoData.numero,
    tipo: DebitoData.tipo,
    cvc: DebitoData.cvc,
    nombre_impreso: DebitoData.nombre_impreso,
    cedula: DebitoData.cedula,
    fk_cliente: rif
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearPagoPuntos(rif, PuntosData) {
  return axios.post('/create/pagoPuntos', {
    cantidad: PuntosData.cantidad,
    fk_historico_valor_puntos: PuntosData.fk_historico_valor_puntos, //FALTA LLAMAR AL GET PARA HACER ESTO
    fk_cliente: rif
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearDivisa(rif, DivisaData) {
  return axios.post('/create/divisa', {
    tipo: DivisaData.tipo,
    fk_historico_tasa: DivisaData.fk_historico_tasa, //FALTA HACER EL GET DEL HISTORICO TASA
    fk_cliente: rif,
    cantidad: DivisaData.cantidad
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearCheque(rif, ChequeData) {
  return axios.post('/create/cheque', {
    banco: ChequeData.banco,
    numero_cuenta: ChequeData.numero_cuenta,
    numero_cheque: ChequeData.numero_cheque,
    fk_cliente: rif
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearEfectivo(rif, EfectivoData) {
  return axios.post('/create/cash', {
    cantidad: EfectivoData.cantidad,
    denominacion: EfectivoData.denominacion,
    fk_cliente: rif
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function getMontoFactura(nrofactura){

}

function getClientePK(usuario) {
  return axios.get('/read/clientePorUserId', {
    fk_usuario: usuario
  }).then((response) => {
    return response.data[0]
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}

class MetodoPagoTiendaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditoVisible: true, isLoggedIn: "",
      userData: {id: '', nombre: '', contrasena: '', fk_rol:''},
      ClientData: {rif: ""},
      NaturalData: {
        rif: "", ci: "", name: "", lastName: "", userName: "", gender: "",
        email: "",  password: "", bornDate: "",
        HomeAddress: {state:"", city:"", municipality:"", parish:"", homeAvenue:"",
                      homeBuilding:"", homeFloor:"", homeOffice:"", homeApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: "", rol: "10"
      },
      CompanyData: {
        rif: "", comercialDesignation: "", businessName: "",
        userName: "", password: "", email: "", webPage: "", capital: "", rol:"10",
        telephone1: "", telephone2: "", telephone3: "", ContactPerson:{ nameContact: "", numberContact: "" },
        FiscalAddress: {state:"", city:"", municipality:"", parish:"", fiscalAvenue:"",
                        fiscalBuilding:"", fiscalFloor:"", fiscalOffice:"", fiscalApartment:""},
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                        mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      },
      CreditoData: {
        banco: "",
        numero: "",
        cvc: "",
        nombre_impreso: "",
        ci: "",
        tipo: ""
      },
      DebitoData: {
        banco: "",
        numero: "",
        cvc: "",
        nombre_impreso: "",
        ci: "",
        tipo: ""
      },
      PuntosData: {
        cantidad: "",
        fk_historico_valor_puntos: ""
      },
      DivisaData: {
        cantidad: "",
        tipo: "",
        fk_historico_tasa: ""
      },
      ChequeData: {
        banco: "",
        numero_cuenta: "",
        numero_cheque: ""
      },
      EfectivoData: {
        denominacion: "",
        cantidad: ""
      }
    };

    this.onClick = this.onClick.bind(this);

    this.handleBancoCredito = this.handleBancoCredito.bind(this);
    this.handleNumeroCredito = this.handleNumeroCredito.bind(this);
    this.handleCVCCredito = this.handleCVCCredito.bind(this);
    this.handleNombreImpresoCredito = this.handleNombreImpresoCredito.bind(this);
    this.handleCICredito = this.handleCICredito.bind(this);

    this.handleBancoDebito = this.handleBancoDebito.bind(this);
    this.handleNumeroDebito = this.handleNumeroDebito.bind(this);
    this.handleCVCDebito = this.handleCVCDebito.bind(this);
    this.handleNombreImpresoDebito = this.handleNombreImpresoDebito.bind(this);
    this.handleCIDebito = this.handleCIDebito.bind(this);
    this.handleExpiracionDebito = this.handleExpiracionDebito.bind(this);

    this.handleCantidadDivisa = this.handleCantidadDivisa.bind(this);
    this.handleTipoDivisa = this.handleTipoDivisa.bind(this);

    this.handleNumeroCuentaCheque = this.handleNumeroCuentaCheque.bind(this);
    this.handleNumeroChequeCheque = this.handleNumeroChequeCheque.bind(this);
    this.handleBancoCheque = this.handleBancoCheque.bind(this);

    this.handleDenominacionEfectivo = this.handleDenominacionEfectivo.bind(this);
    this.handleCantidadEfectivo = this.handleCantidadEfectivo.bind(this);

    this.handleDivisaSubmit = this.handleDivisaSubmit.bind(this);
    this.handleEfectivoSubmit = this.handleEfectivoSubmit.bind(this);
    this.handleChequeSubmit = this.handleChequeSubmit.bind(this);
    this.handleCreditoSubmit = this.handleCreditoSubmit.bind(this);
    this.handleDebitoSubmit = this.handleDebitoSubmit.bind(this);
    this.handlePuntosSubmit = this.handlePuntosSubmit.bind(this);

  }

  onClick() {
    this.setState({
      CreditoData: {
        banco: "",
        numero: "",
        cvc: "",
        nombre_impreso: "",
        ci: "",
        tipo: "",
        expiracion: ""
      },
      DebitoData: {
        banco: "",
        numero: "",
        cvc: "",
        nombre_impreso: "",
        ci: "",
        tipo: "",
        expiracion: ""
      },
      PuntosData: {
        cantidad: "",
        fk_historico_valor_puntos: ""
      },
      DivisaData: {
        cantidad: "",
        tipo: "",
        fk_historico_tasa: ""
      },
      ChequeData: {
        banco: "",
        numero_cuenta: "",
        numero_cheque: ""
      },
      EfectivoData: {
        denominacion: "",
        cantidad: ""
      }
    })
    this.setState(prevState => ({
      creditoVisible: !prevState.creditoVisible

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

  //TIPO PAGO DEBITO

  handleBancoDebito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DebitoData: {
        ...prevState.DebitoData,
        banco: value
      }
    }), () => console.log(this.state.DebitoData));
  }
  handleNumeroDebito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DebitoData: {
        ...prevState.DebitoData,
        numero: value
      }
    }), () => console.log(this.state.DebitoData));
  }
  handleNombreImpresoDebito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DebitoData: {
        ...prevState.DebitoData,
        nombre_impreso: value
      }
    }), () => console.log(this.state.DebitoData));
  }
  handleCIDebito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DebitoData: {
        ...prevState.DebitoData,
        ci: value
      }
    }), () => console.log(this.state.DebitoData));
  }
  handleCVCDebito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DebitoData: {
        ...prevState.DebitoData,
        cvc: value
      }
    }), () => console.log(this.state.DebitoData));
  }
  handleExpiracionDebito(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DebitoData: {
        ...prevState.DebitoData,
        expiracion: value
      }
    }), () => console.log(this.state.DebitoData));
  }

  //TIPO PAGO PUNTOS

  handleCantidadPuntos(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      PuntosDatta: {
        ...prevState.PuntosData,
        cantidad: value
      }
    }), () => console.log(this.state.PuntosData))
  }

  //TIPO PAGO DIVISA

  handleCantidadDivisa(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DivisaData: {
        ...prevState.PuntosData,
        cantidad: value
      }
    }), () => console.log(this.state.DivisaData))
  }
  handleTipoDivisa(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      DivisaData: {
        ...prevState.PuntosData,
        tipo: value
      }
    }), () => console.log(this.state.DivisaData))
  }

  //TIPO PAGO CHEQUE

  handleNumeroCuentaCheque(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      ChequeData: {
        ...prevState.ChequeData,
        numero_cuenta: value
      }
    }), () => console.log(this.state.ChequeData))
  }
  handleNumeroChequeCheque(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      ChequeData: {
        ...prevState.ChequeData,
        numero_cheque: value
      }
    }), () => console.log(this.state.ChequeData))
  }
  handleBancoCheque(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      ChequeData: {
        ...prevState.ChequeData,
        banco: value
      }
    }), () => console.log(this.state.ChequeData))
  }

  //TIPO PAGO EFECTIVO

  handleDenominacionEfectivo(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      EfectivoData: {
        ...prevState.EfectivoData,
        denominacion: value
      }
    }), () => console.log(this.state.EfectivoData))
  }
  handleCantidadEfectivo(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      EfectivoData: {
        ...prevState.EfectivoData,
        cantidad: value
      }
    }), () => console.log(this.state.EfectivoData))
  }


  //HANDLE SUBMITS
  handleCreditoSubmit(e) {
    e.preventDefault();
    let creditcard = this.state.CreditoData,rif = this.state.ClientData.rif;
    if (creditcard.cvc === '') {
      console.log('CVC Invalido');
    } else {
      if (creditcard.numero === '') {
        console.log('Numero Invalido');
      } else {
        if (creditcard.nombre_impreso === '') {
          console.log('Nombre Invalido');
        } else {
          if (creditcard.banco === '') {
            console.log('Nombre del banco Invalido');
          } else {
            //Falta la validacion de tipo
            if (1 === 1) {} else {
              if (creditcard.ci === '') {
                console.log('Cedula invalida');
              } else {
                crearTarjetaCredito(rif,this.state.CreditoData);
              }
            }
          }
        }
      }
    }
  }
  handleDebitoSubmit(e) {
    e.preventDefault();
    let debitcard = this.state.DebitoData, rif = this.state.ClientData.rif;
    if (debitcard.cvc === '') {
      console.log('CVC Invalido');
    } else {
      if (debitcard.numero === '') {
        console.log('Numero Invalido');
      } else {
        if (debitcard.nombre_impreso === '') {
          console.log('Nombre Invalido');
        } else {
          if (debitcard.banco === '') {
            console.log('Nombre del banco Invalido');
          } else {
            //Falta la validacion de tipo
            if (1 === 1) {} else {
              if (debitcard.ci === '') {
                console.log('Cedula invalida');
              } else {
                crearTarjetaDebito(rif,this.state.DebitoData);
              }
            }
          }
        }
      }
    }
  }
  handleChequeSubmit(e) {
    e.preventDefault();
    let cheque = this.state.ChequeData, rif = this.state.ClientData.rif
    if (cheque.numero_cuenta === "") {
      console.log('NUMERO DE CUENTA INVALIDA');
    } else {
      if (cheque.numero_cheque === "") {
        console.log('NUMERO DE CHEQUE INAVALIDO');
      } else {
        if (cheque.banco === "") {
          console.log('BANCO INVALIDO')
        } else {
          crearCheque(rif,this.state.ChequeData);
        }
      }
    }
  }
  handleEfectivoSubmit(e) {
    let rif = this.state.ClientData.rif
    e.preventDefault();
    let efectivo = this.state.EfectivoData;
    if (efectivo.cantidad === "") {
      console.log('CANTIDAD INVALIDA');
    } else {
      if (efectivo.denominacion === "") {
        console.log('DENOMINACION INAVALIDA');
      } else {
        crearEfectivo(rif,this.state.EfectivoData)
      }
    }
  }
  handleDivisaSubmit(e) {
    e.preventDefault();
    let divisa = this.state.DivisaData, rif = this.state.ClientData.rif
    if (divisa.cantidad === "") {
      console.log('CANTIDAD INVALIDA');
    } else {
      if (divisa.tipo === "") {
        console.log('TIPO INAVALIDO');
      } else {
        crearDivisa(rif,this.state.DivisaData);
      }
    }
  }
  handlePuntosSubmit(e) {
    e.preventDefault();
    let rif = this.state.ClientData.rif
    let puntos = this.state.PuntosData;
    if (puntos.cantidad === "") {
      console.log('CANTIDAD INVALIDA');
    } else {
      crearPagoPuntos(rif,this.state.PuntosData);
    }
  }

  componentDidMount(){
    axios.get('/read/userInfo',{withCredentials: true})
    .then(async (res)=> { // handle success
      console.log(res)
      if(res.data==='errorNoUser'){
        throw new Error('NoUser');
      }
      logged = true
      console.log('Callback Axios con Data del Usuario')
      this.setState({userData: res.data, isLoggedIn:true})
      var clientData = await getClientePK(res.data[0].id)
      this.setState({ClientData: {rif: clientData.rif}})
      if(clientData.tipo ==='Natural') this.setState({NaturalData: clientData, isLoggedIn:true})
      else this.setState({CompanyData: clientData, isLoggedIn:true})
    })
    .catch(function (error){
      console.log('axios'); console.log(error);
    })
  }

  render() {
    return (<div className=" container">
      <ShopPayment data={this.state.CreditoData} onClick={this.onClick} handleNumeroCredito={this.handleNumeroCredito} handleNombreImpresoCredito={this.handleNombreImpresoCredito} handleCVCCredito={this.handleCVCCredito} handleBancoCredito={this.handleBancoCredito} handleCICredito={this.handleCICredito} handleCreditoSubmit={this.handleCreditoSubmit}/>
      <ShopPaymentDebit data={this.state.DebitoData} onClick={this.onClick} handleNumeroDebito={this.handleNumeroDebito} handleNombreImpresoDebito={this.handleNombreImpresoDebito} handleCVCDebito={this.handleCVCDebito} handleBancoDebito={this.handleBancoDebito} handleCIDebito={this.handleCIDebito} handleExpiracionDebito={this.handleExpiracionDebito} handleDebitoSubmit={this.handleDebitoSubmit}/>
      <ShopPaymentPoint data={this.state.PuntosData} onClick={this.onClick} handleCantidadPuntos={this.handleCantidadPuntos} handlePuntosSubmit={this.handlePuntosSubmit}/>
      <ShopPaymentDivisa data={this.state.DivisaData} onClick={this.onClick} handleCantidadDivisa={this.handleCantidadDivisa} handleTipoDivisa={this.handleTipoDivisa} handleDivisaSubmit={this.handleDivisaSubmit}/>
      <ShopPaymentCheque data={this.state.ChequeData} onClick={this.onClick} handleBancoCheque={this.handleBancoCheque} handleNumeroChequeCheque={this.handleNumeroChequeCheque} handleNumeroCuentaCheque={this.handleNumeroCuentaCheque} handleChequeSubmit={this.handleChequeSubmit}/>
      <ShopPaymentEfectivo data={this.state.EfectivoData} onClick={this.onClick} handleDenominacionEfectivo={this.handleDenominacionEfectivo} handleCantidadEfectivo={this.handleCantidadEfectivo} handleEfectivoSubmit={this.handleEfectivoSubmit}/>
    </div >)
  }
}
export default withRouter(MetodoPagoTiendaContainer);
