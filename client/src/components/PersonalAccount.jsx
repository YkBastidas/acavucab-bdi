import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import ReactDOM from 'react-dom'

import SignUpContainer from '../containers/SignUpContainer'
import Button from './Button'

function ventanaCrearUsuario(){
  return(
    <section className="row">
      <div className="col-12">
        <SignUpContainer.WrappedComponent personal={true}/>
      </div>
    </section>
  )
}

function renderOption(id){
  let elementHTML = document.getElementById('optionSelected')
  switch(id){
    case('createUserButton'):
      ReactDOM.render(ventanaCrearUsuario(), elementHTML);
      break
    default:
      elementHTML.innerHTML = 'No encontró la opción'
  }
}

class PersonalAccount extends Component{
  render(){
    return(
      <section className="row margin-bottom">
        <div className="justified col-8">
          <h5><strong>Nombre de Usuario: {this.props.userData.nombre}</strong></h5>
          <h5><strong>Doc. de Identidad: {this.props.PersonalData.ci}</strong></h5>
          <h5><strong>Nombre(s): {this.props.PersonalData.nombre}</strong></h5>
          <h5><strong>Apellido(s): {this.props.PersonalData.apellido}</strong></h5>
          <h5><strong>Género: {this.props.PersonalData.genero}</strong></h5>
          <h5><strong>Salario: {this.props.PersonalData.salario}</strong></h5>
          <h5><strong>Cargo: {this.props.PersonalData.cargo}</strong></h5>
          <h5><strong>Teléfono Principal: {this.props.PersonalData.telephone1}</strong></h5>
          {this.props.PersonalData.telephone2
                ? <h5><strong>Teléfono Secundario: {this.props.PersonalData.telephone2}</strong></h5>
                : ""
            }
          {this.props.PersonalData.telephone3
                ? <h5><strong>Otro Teléfono: {this.props.PersonalData.telephone3}</strong></h5>
                : ""
            }
          {this.props.PersonalData.MainAddress
              ?
              <section>
                <h5> <strong> Dirección Principal: Estado {this.props.PersonalData.MainAddress.state}, Municipio {this.props.PersonalData.MainAddress.municipality}, Parroquia {this.props.PersonalData.MainAddress.parish}, {this.props.PersonalData.MainAddress.mainAvenue === '' ? "" : 'Avenida '+this.props.PersonalData.MainAddress.mainAvenue+','} {this.props.PersonalData.MainAddress.mainBuilding === '' ? "" : 'Edificio '+this.props.PersonalData.MainAddress.mainBuilding+','} {this.props.PersonalData.MainAddress.mainFloor === '' ? "" : 'Piso '+this.props.PersonalData.MainAddress.mainFloor+','} {this.props.PersonalData.MainAddress.mainOffice === '' ? "" : 'Oficina '+this.props.PersonalData.MainAddress.mainOffice+','} {this.props.PersonalData.MainAddress.mainApartment === '' ? "" : 'Apartamento '+this.props.PersonalData.MainAddress.mainApartment} </strong>
                </h5>
              </section>
              : <div></div>
            }
          <h5><strong>Puntos acumulados: </strong></h5>
        </div>
        <div className="w-100"></div>
        <div className="col-12 mb-3">
          <h5> <strong> OPCIONES ROL : {this.props.PersonalData.rol} </strong></h5>
          <div className="row">
            <div className ="col-3">
              <Button id="createUserButton" title="Crear Usuario" type="options" action={(event)=>{
                  event.preventDefault(); renderOption('createUserButton')}} buttonStyle={{width:"100%"}}/>
            </div>
            <div className ="col-3">
              <a className="btn btn-outline-dark btn-lg btn-block" href="/metodopago" role="button">Metodos de Pago</a>
            </div>
            <div className ="col-3">
              <a className="btn btn-outline-dark btn-lg btn-block" href="/direccion" role="button">Direccion</a>
            </div>
            <div className ="col-3">
              <a className="btn btn-outline-dark btn-lg btn-block" href="/carnet" role="button">Carnet de Afiliacion</a>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div id="optionSelected">

          </div>
        </div>
      </section>
    )
  }
}

export default PersonalAccount
