import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

function setCity(direccion, state){
  let i=0, primary_key;
  while (1){
    if(state !== ""){
      if (direccion[i].nombre === state){
        primary_key = direccion[i].clave
        break;
      }
      else
      i += 1
    }
    else
      break;
  }
  return(
    Object.values(direccion).map((direccion) =>
      {
        if((direccion.fk_direccion === primary_key) && (direccion.tipo === 'Ciudad'))
          return <option value={direccion.nombre}>{direccion.nombre}</option>
        else{
          return ("");
        }
      }
    )
  )
}

function setMunicipality(direccion, state){
  let i=0, primary_key;
  while (1){
    if(state !== ""){
      if (direccion[i].nombre === state){
        primary_key = direccion[i].clave
        break;
      }
      else
      i += 1
    }
    else
      break;
  }
  return(
    Object.values(direccion).map((direccion) =>
      {
        if((direccion.fk_direccion === primary_key) && (direccion.tipo === 'Municipio'))
          return <option value={direccion.nombre}>{direccion.nombre}</option>
        else{
          return ("");
        }
      }
    )
  )
}

function setParish(direccion, state, municipality){
  let j=0, state_primary_key, i=0, primary_key
  while (1){
    if(state !== ""){
      if (direccion[j].nombre === state){
        state_primary_key = direccion[j].clave
        break;
      }
      else
      j += 1
    }
    else
      break;
  }
  while (1){
    if((municipality !== "") && (state !== "")){
      if ((direccion[i].nombre === municipality) && (direccion[i].fk_direccion === state_primary_key) && (direccion[i].tipo === 'Municipio')){
        primary_key = direccion[i].clave
        break;
      }
      else
      i += 1
    }
    else
      break;
  }
  return(
    Object.values(direccion).map((direccion) =>
      {
        if((direccion.fk_direccion === primary_key) && (direccion.tipo === 'Parroquia'))
          return <option value={direccion.nombre}>{direccion.nombre}</option>
        else{
          return ("");
        }
      }
    )
  )
}

class NaturalClient extends Component{
  render(){
    return(
      <section className="row margin-bottom">
        <div className="col-4 margin-bottom">
          <img src= {this.props.image} alt="Cliente 1" style={{width: "inherit"}}/>
        </div>
        <div className="justified col-7">
          <h5><strong>{this.props.userData.nombre}</strong></h5>
        <h5><strong>{this.props.NaturalData.rif}</strong></h5>
        <h5><strong>{this.props.NaturalData.ci}</strong></h5>
        <h5><strong>{this.props.NaturalData.name}</strong></h5>
        <h5><strong>{this.props.NaturalData.lastName}</strong></h5>
        <h5><strong>{this.props.NaturalData.gender}</strong></h5>
        <h5><strong>{this.props.NaturalData.bornDate}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.state}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.city}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.municipality}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.parish}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.homeAvenue}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.homeBuilding}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.homeFloor}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.homeOffice}</strong></h5>
        <h5><strong>{this.props.NaturalData.HomeAddress.homeApartment}</strong></h5>
        <h5><strong>{this.props.NaturalData.telephoneNumber}</strong></h5>
        <h5><strong>{this.props.NaturalData.cellphoneNumber}</strong></h5>
        <h5><strong>{this.props.NaturalData.officeNumber}</strong></h5>
        <h5><strong>{this.props.handleHomeAddress}</strong></h5>
        <h5><strong>{this.props.handleHomeState}</strong></h5>
        <h5><strong>{this.props.handleHomeCity}</strong></h5>

          <h5><strong>Puntos acumulados: </strong></h5>
          <div className="col-12 margin-bottom">
            <div className="justified col-12">
              <div class="sticky" data-sticky data-anchor="content">
                <h5><a id="h5link" href = "/pedidos">Pedidos</a></h5><hr></hr>
                <h5><a id="h5link" href = "/seguridad">Seguridad</a></h5><hr></hr>
                <h5><a id="h5link" href = "/metodopago">Metodos de Pago</a></h5><hr></hr>
                <h5><a id="h5link" href = "/direccion">Direccion</a></h5><hr></hr>
                <h5><a id="h5link" href="/InicioSesion">Cambiar de cuenta</a></h5><hr></hr>
                <h5><a id="h5link" href="/carnet">Carnet de Afiliacion</a></h5><hr></hr>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default NaturalClient
