import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function mostrarCorreos(Emails){
  let i=0
  return Object.values(Emails).map((Email) =>
    {
      i++
      return <h5><strong> {'Email '+i+": "+ Email} </strong></h5>
    })
}

class CompanyClient extends Component{
  render(){
    return(
        <section className="row margin-bottom">
            <div className="col-4 margin-bottom">
          <img src={this.props.image} alt="Cliente 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-7">
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
          {
            this.props.CompanyData.MainAddress
            ?
            <section>
              <h5> <strong> Dirección Principal: Estado {this.props.CompanyData.MainAddress.state}, Municipio {this.props.CompanyData.MainAddress.municipality}, Parroquia {this.props.CompanyData.MainAddress.parish}, {this.props.CompanyData.MainAddress.mainAvenue === '' ? "" : 'Avenida '+this.props.CompanyData.MainAddress.mainAvenue+','} {this.props.CompanyData.MainAddress.mainBuilding === '' ? "" : 'Edificio '+this.props.CompanyData.MainAddress.mainBuilding+','} {this.props.CompanyData.MainAddress.mainFloor === '' ? "" : 'Piso '+this.props.CompanyData.MainAddress.mainFloor+','} {this.props.CompanyData.MainAddress.mainOffice === '' ? "" : 'Oficina '+this.props.CompanyData.MainAddress.mainOffice+','} {this.props.CompanyData.MainAddress.mainApartment === '' ? "" : 'Apartamento '+this.props.CompanyData.MainAddress.mainApartment} </strong>
              </h5>


            </section>
            :
          <div></div>
          }

          {/*<h5><strong>{this.props.CompanyData.ContactPerson.nameContact}</strong></h5>
          <h5><strong>{this.props.CompanyData.ContactPerson.numberContact}</strong></h5>*/}
          {/*<h5><strong>{this.props.CompanyData.FiscalAddress.state}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.city}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.municipality}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.parish}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.fiscalAvenue}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.fiscalBuilding}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.fiscalFloor}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.fiscalOffice}</strong></h5>
          <h5><strong>{this.props.CompanyData.FiscalAddress.fiscalApartment}</strong></h5>*/}
          <h5><strong>Puntos acumulados: </strong></h5>
          <div className="col-12 margin-bottom">
              <div className="justified col-12">
                  <div className="sticky" data-sticky data-anchor="content">
                  <h5><a id="h5link" href = "/pedidos">Pedidos</a></h5>
                  <hr></hr>
                  <h5><a id="h5link" href = "/seguridad">Seguridad</a></h5>
                  <hr></hr>
                  <h5><a id="h5link" href = "/metodopago">Metodos de Pago</a></h5>
                  <hr></hr>
                  <h5><a id="h5link" href = "/direccion">Direccion</a></h5>
                  <hr></hr>
                  <h5><a id="h5link" href="/InicioSesion">Cambiar de cuenta</a></h5>
                  <hr></hr>
                  <h5><a id="h5link" href="/carnet">Carnet de Afiliacion</a></h5>
                  <hr></hr>
                  </div>
              </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CompanyClient
