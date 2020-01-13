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
function mostrarContactos(Contactos){
  let i=0
  return Object.values(Contactos).map((contacto) =>
    {
      i++;
      return <Contact key={i} i={i} nameContact={contacto.nameContact} numberContact={contacto.numberContact}/>
    })
}

class EmailComp extends Component{
  render(){
    return(
      <h5><strong> {'Email '+this.props.i+": "+ this.props.Email} </strong></h5>
    )
  }
}

class Contact extends Component{
  render(){
    return(
      <h5><strong> {'Contacto '+this.props.i+": "+ this.props.nameContact + ' - '+this.props.numberContact+''} </strong></h5>
    )
  }
}

class CompanyClient extends Component{
  render(){
    return(
      <section className="row margin-bottom">
        <div className="justified col-8">
          <h5><strong>Nombre de Usuario: {this.props.userData.nombre}</strong></h5>
          <h5><strong>RIF: {this.props.CompanyData.rif}</strong></h5>
          <h5><strong>Designación Comercial: {this.props.CompanyData.comercialDesignation}</strong></h5>
          <h5><strong>Razón Social: {this.props.CompanyData.businessName}</strong></h5>
          {mostrarCorreos(this.props.CompanyData.Emails)}
          <h5><strong>Página Web: {this.props.CompanyData.webPage}</strong></h5>
          <h5><strong>Capital: {this.props.CompanyData.capital}</strong></h5>
          <h5><strong>Teléfono Principal: {this.props.CompanyData.telephone1}</strong></h5>
          {this.props.CompanyData.telephone2
                ? <h5><strong>Teléfono Secundario: {this.props.CompanyData.telephone2}</strong></h5>
                : ""
            }
          {this.props.CompanyData.telephone3
                ? <h5><strong>Otro Teléfono: {this.props.CompanyData.telephone3}</strong></h5>
                : ""
            }
          {mostrarContactos(this.props.CompanyData.ContactPerson)}
          {this.props.CompanyData.MainAddress
              ?
              <section>
                <h5> <strong> Dirección Principal: Estado {this.props.CompanyData.MainAddress.state}, Municipio {this.props.CompanyData.MainAddress.municipality}, Parroquia {this.props.CompanyData.MainAddress.parish}, {this.props.CompanyData.MainAddress.mainAvenue === '' ? "" : 'Avenida '+this.props.CompanyData.MainAddress.mainAvenue+','} {this.props.CompanyData.MainAddress.mainBuilding === '' ? "" : 'Edificio '+this.props.CompanyData.MainAddress.mainBuilding+','} {this.props.CompanyData.MainAddress.mainFloor === '' ? "" : 'Piso '+this.props.CompanyData.MainAddress.mainFloor+','} {this.props.CompanyData.MainAddress.mainOffice === '' ? "" : 'Oficina '+this.props.CompanyData.MainAddress.mainOffice+','} {this.props.CompanyData.MainAddress.mainApartment === '' ? "" : 'Apartamento '+this.props.CompanyData.MainAddress.mainApartment} </strong>
                </h5>
              </section>
              : <div></div>
            }
          {this.props.CompanyData.FiscalAddress
              ?
              <section>
                <h5> <strong> Dirección Fiscal: Estado {this.props.CompanyData.FiscalAddress.state}, Municipio {this.props.CompanyData.FiscalAddress.municipality}, Parroquia {this.props.CompanyData.FiscalAddress.parish}, {this.props.CompanyData.FiscalAddress.fiscalAvenue === '' ? "" : 'Avenida '+this.props.CompanyData.FiscalAddress.fiscalAvenue+','} {this.props.CompanyData.FiscalAddress.fiscalBuilding === '' ? "" : 'Edificio '+this.props.CompanyData.FiscalAddress.fiscalBuilding+','} {this.props.CompanyData.FiscalAddress.fiscalFloor === '' ? "" : 'Piso '+this.props.CompanyData.FiscalAddress.fiscalFloor+','} {this.props.CompanyData.FiscalAddress.fiscalOffice === '' ? "" : 'Oficina '+this.props.CompanyData.FiscalAddress.fiscalOffice+','} {this.props.CompanyData.FiscalAddress.fiscalApartment === '' ? "" : 'Apartamento '+this.props.CompanyData.FiscalAddress.fiscalApartment} </strong>
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

export default CompanyClient
