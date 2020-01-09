import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CompanyClient extends Component{
  render(){
    return(
        <section className="row margin-bottom">
            <div className="col-4 margin-bottom">
          <img src={this.props.image} alt="Cliente 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-7">
          <h5><strong>{this.props.userData.nombre}</strong></h5>
          <h5><strong>{this.props.CompanyData.rif}</strong></h5>
          <h5><strong>{this.props.CompanyData.comercialDesignation}</strong></h5>
          <h5><strong>{this.props.CompanyData.businessName}</strong></h5>
          <h5><strong>{this.props.CompanyData.username}</strong></h5>
          <h5><strong>{this.props.CompanyData.password}</strong></h5>
          <h5><strong>{this.props.CompanyData.email}</strong></h5>
          <h5><strong>{this.props.CompanyData.webPage}</strong></h5>
          <h5><strong>{this.props.CompanyData.capital}</strong></h5>
          {/*<h5><strong>{this.props.CompanyData.telephone1}</strong></h5>
          <h5><strong>{this.props.CompanyData.telephone2}</strong></h5>
          <h5><strong>{this.props.CompanyData.telephone3}</strong></h5>*/}
          {
            this.props.CompanyData.MainAddress
            ?
            <section>
              <h5><strong>{this.props.CompanyData.MainAddress.state}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.city}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.municipality}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.parish}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.mainAvenue}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.mainBuilding}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.mainFloor}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.mainOffice}</strong></h5>
              <h5><strong>{this.props.CompanyData.MainAddress.mainApartment}</strong></h5>
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
                  <div class="sticky" data-sticky data-anchor="content">
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
