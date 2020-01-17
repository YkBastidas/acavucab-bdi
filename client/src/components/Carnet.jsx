import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import axios from 'axios';
//import '../report';

//const carnetreporte = document.getElementById('carnetreporte').setAttribute('href', "http://localhost:5488/api/report");
function formatDate(date) {
  var monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];
  var birthday = new Date(date)
  var day = birthday.getDate();
  var monthIndex = birthday.getMonth();
  var year = birthday.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

class Carnet extends Component {
  render() {
    let data = this.props.data, qrText = data.rif,
    qrURL="https://chart.googleapis.com/chart?cht=qr&chs=175x175&chl="+qrText+"&chld=H|0"
    return (
      <section className="row align-items-center margin-bottom">
        <h3> CARNET DE AFILIACIÓN </h3>
        <div className="w-100"></div>
        <div className="col-3 col align-self-center bg-dark text-light">
          {this.props.tipo === "Natural"
          ?<div className="row">
            <div className="col-12 mb-2"> <h5>RIF</h5>{data.rif} </div>
            <div className="col-12"> <h5>Nombre y Apellido</h5>{data.name} {data.lastName}</div>
              <div className="col-12 mb-2"> <h5>Género</h5>{data.gender}</div>
              <div className="col-12"> <h5>Fecha de Nacimiento</h5>{formatDate(data.bornDate)}</div>
          </div>
          :<div className="row">
            <div className="col-12 mb-2"> <h5>RIF</h5>{data.rif} </div>
            <div className="col-12"> <h5>Designación Comercial</h5>{data.comercialDesignation}</div>
              <div className="col-12 mb-2"> <h5>Razón Social</h5>{data.businessName}</div>
              <div className="col-12"> <h5>Página Web</h5>{formatDate(data.webPage)}</div>
          </div>
        }
        </div>
        <div className="col-3 bg-dark text-light align-self-center">
          <div className ="row">
            <div className="col-12 mb-1 py-3"> <h5>QR CODE</h5> <img src={qrURL} alt="QRCode"/> </div>
          </div>
        </div>
    </section>)
  }
}

export default Carnet
