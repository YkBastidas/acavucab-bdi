import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function mostrarCorreos(Emails){
  let i=0
  return Object.values(Emails).map((Email) =>
    {
      i++
      return <EmailComp key={i} i={i} Email={Email}/>
    })
}
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
class EmailComp extends Component{
  render(){
    return(
      <h5><strong> {'Email '+this.props.i+": "+ this.props.Email} </strong></h5>
    )
  }
}

class NaturalClient extends Component{
  render(){
    return(
      <section className="row margin-bottom">
        <div className="justified col-8">
          <h5><strong>Nombre de Usuario: {this.props.userData.nombre}</strong></h5>
          <h5><strong>RIF: {this.props.NaturalData.rif}</strong></h5>
          <h5><strong>Doc. de Identidad: {this.props.NaturalData.ci}</strong></h5>
          <h5><strong>Nombre(s): {this.props.NaturalData.name}</strong></h5>
          <h5><strong>Apellido(s): {this.props.NaturalData.lastName}</strong></h5>
          <h5><strong>Género: {this.props.NaturalData.gender}</strong></h5>
          {mostrarCorreos(this.props.NaturalData.Emails)}
          <h5><strong>Fecha de Nacimiento: {formatDate(this.props.NaturalData.bornDate)}</strong></h5>
          <h5><strong>Teléfono Principal: {this.props.NaturalData.telephoneNumber}</strong></h5>
          {this.props.NaturalData.cellphoneNumber
                ? <h5><strong>Teléfono Secundario: {this.props.NaturalData.cellphoneNumber}</strong></h5>
                : ""
            }
          {this.props.NaturalData.officeNumber
                ? <h5><strong>Otro Teléfono: {this.props.NaturalData.officeNumber}</strong></h5>
                : ""
            }
          {this.props.NaturalData.MainAddress
              ?
              <section>
                <h5> <strong> Dirección Principal: Estado {this.props.NaturalData.MainAddress.state}, Municipio {this.props.NaturalData.MainAddress.municipality}, Parroquia {this.props.NaturalData.MainAddress.parish}, {this.props.NaturalData.MainAddress.mainAvenue === '' ? "" : 'Avenida '+this.props.NaturalData.MainAddress.mainAvenue+','} {this.props.NaturalData.MainAddress.mainBuilding === '' ? "" : 'Edificio '+this.props.NaturalData.MainAddress.mainBuilding+','} {this.props.NaturalData.MainAddress.mainFloor === '' ? "" : 'Piso '+this.props.NaturalData.MainAddress.mainFloor+','} {this.props.NaturalData.MainAddress.mainOffice === '' ? "" : 'Oficina '+this.props.NaturalData.MainAddress.mainOffice+','} {this.props.NaturalData.MainAddress.mainApartment === '' ? "" : 'Apartamento '+this.props.NaturalData.MainAddress.mainApartment} </strong>
                </h5>
              </section>
              : <div></div>
            }
          <h5><strong>Puntos acumulados: </strong></h5>
        </div>
        <div className="col-4">
          <a className="btn btn-outline-dark btn-lg btn-block" href="/pedidos" role="button">Pedidos</a>
          <a className="btn btn-outline-dark btn-lg btn-block" href="/seguridad" role="button">Seguridad</a>
          <a className="btn btn-outline-dark btn-lg btn-block" href="/metodopago" role="button">Metodos de Pago</a>
          <a className="btn btn-outline-dark btn-lg btn-block" href="/direccion" role="button">Direccion</a>
          <a className="btn btn-outline-dark btn-lg btn-block" href="/carnet" role="button">Carnet de Afiliacion</a>
        </div>
      </section>
    )
  }
}

export default NaturalClient
