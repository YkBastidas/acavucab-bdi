import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import Input from './Input';
import Button from './Button';
import DateForm from './DateForm';

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
          return <option key= {direccion.clave} value={direccion.nombre}>{direccion.nombre}</option>
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
          return <option key = {direccion.clave} value={direccion.nombre}>{direccion.nombre}</option>
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
          return <option key={direccion.clave} value={direccion.nombre}>{direccion.nombre}</option>
        else{
          return ("");
        }
      }
    )
  )
}

function maxDate() {

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  today = yyyy + '-' + mm + '-' + dd;
  return today;
};

class SignUpPersonal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      direccion: {
        clave: "",
        tipo: "",
        nombre: "",
        fk_direccion: ""
      }
    }
  }
  componentDidMount() {
    axios.get('/read/direcciones')
    .then((res)=> {
      // handle success
      console.log('Callback Axios con direcciones desde la BD');
      console.log(res.data);
      this.setState({direccion: res.data})
    })
    .catch(function (error) {
      // handle error
      console.log('axios');
      console.log(error);
    });
  }

  render(){
    this.OptionStates = Object.values(this.state.direccion).map((direccion, key) =>
          direccion.tipo ==='Estado'
          ? <option key={direccion.clave} value={direccion.nombre}> {direccion.nombre} </option>
          : ""
    );
    return(
      <div className="row align-items-center justify-content-center">
        <div className="col-6 text-center bg-success text-white rounded-pill margin-bottom">
          <h2>
              Persona Natural
          </h2>
        </div>
        <div className="col-6 text-center bg-secondary text-dark rounded-pill margin-bottom">
          <h4>
            <button className="btn btn-link" onClick={this.props.onClick}>
              Persona Jurídica
            </button>
          </h4>
        </div>
        { this.props.employee
          ?<div className="col-6 text-center bg-secondary text-dark rounded-pill margin-bottom">
            <h4>
              <button className="btn btn-link" onClick={this.props.onClickEmployee}>
                Personal
              </button>
            </h4>
          </div>
          : ""
        }
        <div className="col-12 margin-top">
          <form onSubmit={this.props.handleSubmit} className="needs-validation formulary">
            <h4 className="text-center"> Datos del Cliente </h4>
            <div className="form-row">
              <div className="col-md-2 mb-3">
                <Input title={"* RIF:"} name={"rif"} inputtype={"number"} value={this.props.data.rif} handlerChange={this.props.handleInput} required={"required"}
                help= "true" helptext="Ingrese únicamente los números del RIF sin el prefijo J-."/>
              </div>
              <div className="col-md-2 mb-3">
                <Input title={"* Doc. de Identidad"} name={"ci"} inputtype={"number"} value={this.props.data.ci} handlerChange={this.props.handleInput} required={"required"}
                help= "true" helptext="Ingrese únicamente los números del documento sin prefijo V- o E-."/>{" "}
              </div>
              <div className="col-md-4 mb-3">
                <Input title={"* Nombre(s):"} name={"name"} inputtype={"text"} value={this.props.data.name} handlerChange={this.props.handleInput} required={"required"}/>{" "}
              </div>
              <div className="col-md-4 mb-3">
                <Input title={"* Apellido(s):"} name={"lastName"} inputtype={"text"} value={this.props.data.lastName} handlerChange={this.props.handleInput} required={"required"}/>
              </div>
           </div>
           <div className="form-row">
             <div className="col-md-4 mb-3">
               <Input title={"* Nombre de Usuario:"} name={"userName"} inputtype={"text"} value={this.props.data.userName} handlerChange={this.props.handleInput} required={"required"} help= "true" helptext="Su nombre para inicio de sesion, permite letras, números, espacios y guiones"/>{" "}
             </div>
             <div className="col-md-2 mb-3">
               <Input title={"* Contraseña"} name={"password"} inputtype={"password"} value={this.props.data.password} handlerChange={this.props.handlePassword} help= "true"
               helptext="Tu contraseña debe tener entre 8-20 caracteres, contener por lo menos una letra mayúscula y una minúscula y tener por lo menos 1 caracter especial." required={"required"}/>
             </div>
             <div className="col-md-2 mb-3">
               <label htmlFor="gender"> * Género </label>
               <select className="custom-select" id="gender" name="gender" required
               onChange={this.props.handleInput}
               value={this.props.data.gender}>
                 <option value="" >Seleccione...</option>
                 <option value="Hombre">Hombre</option>
                 <option value="Mujer">Mujer</option>
                 <option value="Otro">Otro</option>
               </select>
             </div>
             <div className="col-md-4 mb-3">
               <Input title={"* Correo Electrónico"} name={"email"} inputtype={"email"} value={this.props.data.email} handlerChange={this.props.handleEmail} help="true" helptext="El formato del correo debe ser 'nombreusuario@dominio.extensión' " required={"required"}/>
             </div>
          </div>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <DateForm title={"* Fecha de nacimiento:"} name={"bornDate"} inputtype={"date"} min={"1899-01-01"} max={maxDate()} value={this.props.data.bornDate} handlerChange={this.props.handleBornDate}/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"Teléfono Principal"} name={"telephoneNumber"} inputtype={"tel"} value={this.props.data.telephoneNumber} handlerChange={this.props.handleInput}
              help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'" required={"required"}/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"Teléfono Secundario"} name={"cellphoneNumber"} inputtype={"tel"} value={this.props.data.cellphoneNumber} handlerChange={this.props.handleInput}
                help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"Teléfono de Oficina"} name={"officeNumber"} inputtype={"tel"} value={this.props.data.officeNumber} handlerChange={this.props.handleInput}
                help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12 text-center"> <hr/> <h4> Dirección </h4> </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="homeState"> * Estado </label>
              <select className="custom-select" id="homeState" name="state" required
              onChange={this.props.handleHomeState}
              value={this.props.data.HomeAddress.state}>
                <option value="" >Seleccione...</option>
                {this.OptionStates}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="homeCity"> * Ciudad </label>
              <select className="custom-select" id="homeCity" name="city" required
              onChange={this.props.handleHomeCity}
              value={this.props.data.HomeAddress.city}>
                <option value="" >Seleccione...</option>
                {setCity(this.state.direccion, this.props.data.HomeAddress.state)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="homeMunicipality"> * Municipio </label>
              {
                this.props.data.HomeAddress.state === 'Dependencias Federales'
                ? <select className="custom-select" id="homeMunicipality" name="municipality"
                onChange={this.props.handleHomeAddress}
                value={this.props.data.HomeAddress.municipality}>
                  <option value="No Aplica" >No aplica...</option>
                </select>
                : <select className="custom-select" id="homeMunicipality" name="municipality" required
                onChange={this.props.handleHomeAddress}
                value={this.props.data.HomeAddress.municipality}>
                  <option value="" >Seleccione...</option>
                  {setMunicipality(this.state.direccion,this.props.data.HomeAddress.state)}
                </select>
              }
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="homeParish"> * Parroquia </label>
              {
                ((this.props.data.HomeAddress.state === 'Dependencias Federales') || ((this.props.data.HomeAddress.state === 'Portuguesa') && (this.props.data.HomeAddress.municipality === 'Agua Blanca')) || ((this.props.data.HomeAddress.state === 'Sucre') && (this.props.data.HomeAddress.municipality === 'Bolívar')))
                ? <select className="custom-select" id="homeParish" name="parish"
                onChange={this.props.handleHomeAddress}
                value={this.props.data.HomeAddress.parish}>
                  <option value="No Aplica" >No Aplica...</option>
                </select>
                : <select className="custom-select" id="homeParish" name="parish"
                onChange={this.props.handleHomeAddress}
                value={this.props.data.HomeAddress.parish} required>
                  <option value="" >Seleccione...</option>
                  {setParish(this.state.direccion,this.props.data.HomeAddress.state, this.props.data.HomeAddress.municipality)}
                </select>
              }
            </div>
            <div className="col-md-4 mb-3">
                <Input title={"Avenida"} name={"homeAvenue"} inputtype={"text"} value={this.props.data.HomeAddress.homeAvenue} handlerChange={this.props.handleHomeAddress}/>
            </div>
            <div className="col-md-4 mb-3">
                <Input title={"Edificio"} name={"homeBuilding"} inputtype={"text"} value={this.props.data.HomeAddress.homeBuilding} handlerChange={this.props.handleHomeAddress}/>
            </div>
            <div className="col-md-4 mb-3">
                <Input title={"Piso"} name={"homeFloor"} inputtype={"text"} value={this.props.data.HomeAddress.homeFloor} handlerChange={this.props.handleHomeAddress}/>
            </div>
            <div className="col-md-4 mb-3">
                <Input title={"Oficina"} name={"homeOffice"} inputtype={"text"} value={this.props.data.HomeAddress.homeOffice} handlerChange={this.props.handleHomeAddress}/>
            </div>
            <div className="col-md-4 mb-3">
                <Input title={"Apartamento"} name={"homeApartment"} inputtype={"text"} value={this.props.data.HomeAddress.homeApartment} handlerChange={this.props.handleHomeAddress}/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <Button action={this.props.handleSubmit} type={"primary"} title={"Crear Cuenta"}
                buttonStyle={{ width: "100%" }}/>
            </div>
            <div className="col-md-6 mb-3">
              <Button action={this.props.handleClearForm} type={"warning"} title={"Restaurar"}
                buttonStyle={{ width: "100%" }}/>
            </div>
          </div>
          </form>
      </div>
    </div>
    )
  }
}

export default SignUpPersonal
