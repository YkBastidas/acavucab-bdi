import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import Input from './Input';
import Currency from './Currency';
import Button from './Button';

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
        console.log(primary_key)
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

class SignUpCompany extends Component{
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
        <div className="col-6 text-center bg-secondary text-dark rounded-pill margin-bottom">
          <h4>
            <button className="btn btn-link" onClick={this.props.onClick}>
              Persona Natural
            </button>
          </h4>
        </div>
        <div className="col-6 text-center bg-success text-white rounded-pill margin-bottom">
          <h2> Persona Jurídica </h2>
        </div>
        <div className="col-12 margin-top">
          <form onSubmit={this.props.handleSubmit} className="needs-validation formulary">
            <h4 className="text-center"> Datos de la Empresa </h4>
            <div className="form-row">
              <div className="col-md-2 mb-3">
                <Input title={"* RIF:"} name={"rif"} inputtype={"number"} value={this.props.data.rif} handlerChange={this.props.handleInput} required={"required"}
                help= "true" helptext="Ingrese únicamente los números del RIF sin el prefijo J-."/>
              </div>
              <div className="col-md-4 mb-3">
                <Input title={"* Denominación Comercial"} name={"comercialDesignation"} inputtype={"text"} value={this.props.data.comercialDesignation} handlerChange={this.props.handleInput} required={"required"} />{" "}
              </div>
              <div className="col-md-6 mb-3">
                <Input title={"* Razón Social:"} name={"businessName"} inputtype={"text"} value={this.props.data.businessName} handlerChange={this.props.handleInput}
                required={"required"}/>{" "}
              </div>
           </div>
           <div className="form-row">
             <div className="col-md-4 mb-3">
               <Input title={"* Correo Electrónico"} name={"email"} inputtype={"email"} value={this.props.data.email} handlerChange={this.props.handleEmail} help="true" helptext="El formato del correo debe ser 'nombreusuario@dominio.extensión'"/>
             </div>
             <div className="col-md-4 mb-3">
               <Input title={"* Contraseña"} name={"password"} inputtype={"password"} value={this.props.data.password} handlerChange={this.props.handlePassword} help= "true"
               helptext="Tu contraseña debe tener entre 8-20 caracteres, contener por lo menos una letra mayúscula y una minúscula y tener por lo menos 1 caracter especial."/>
             </div>
             <div className="col-md-4 mb-3">
               <Input title={"* Página Web"} name={"webPage"} inputtype={"url"}
                value={this.props.data.webPage} handlerChange={this.props.handleInput} help= "true"
                helptext="La página web debe tener el formato 'www.nombredelaweb.dominio'."/>
             </div>
          </div>
          <div className="form-row">
            <div className="col-md-3 mb-3">
              <Currency title={"* Capital Disponible"} name={"capital"} inputtype={"number"} value={this.props.data.capital} handlerChange={this.props.handleInput} help="true" helptext="Ej: '125000,00' utilice la coma ',' para los decimales"/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"* Teléfono Principal"} name={"telephone1"} inputtype={"tel"} value={this.props.data.telephone1} handlerChange={this.props.handleInput}
              help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'" required = {"required"}/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"Teléfono Secundario"} name={"telephone2"} inputtype={"tel"} value={this.props.data.telephone2} handlerChange={this.props.handleInput}
                help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"Otro Teléfono"} name={"telephone3"} inputtype={"tel"} value={this.props.data.telephone3} handlerChange={this.props.handleInput}
                help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
         </div>
         <div className="form-row">
           <div className="col-12 text-center"> <hr/> <h4> Persona de Contacto</h4> </div>
           <div className="col-md-6 mb-3">
             <Input title={"* Nombre:"} name={"nameContact"} inputtype={"text"} value={this.props.data.ContactPerson.nameContact} handlerChange={this.props.handleContactPerson}  required={"required"}/>{" "}
           </div>
           <div className="col-md-6 mb-3">
             <Input title={"* Teléfono"} name={"numberContact"} inputtype={"tel"} value={this.props.data.ContactPerson.numberContact} handlerChange={this.props.handleContactPerson}
               help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'" required={"required"}/>
           </div>
         </div>
          <div className="form-row">
            <div className="col-12 text-center"> <hr/> <h4> Dirección Fiscal</h4> </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="fiscalState"> * Estado </label>
              <select className="custom-select" id="fiscalState" name="state" required
              onChange={this.props.handleFiscalState}
              value={this.props.data.FiscalAddress.state}>
                <option value="" >Seleccione...</option>
                {this.OptionStates}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="fiscalCity"> * Ciudad </label>
              <select className="custom-select" id="fiscalCity" name="city" required
              onChange={this.props.handleFiscalCity}
              value={this.props.data.FiscalAddress.city}>
                <option value="" >Seleccione...</option>
                {setCity(this.state.direccion, this.props.data.FiscalAddress.state)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="fiscalMunicipality"> * Municipio </label>
              {
                this.props.data.FiscalAddress.state === 'Dependencias Federales'
                ? <select className="custom-select" id="fiscalMunicipality" name="municipality"
                onChange={this.props.handleFiscalAddress}
                value={this.props.data.FiscalAddress.municipality}>
                  <option value="No Aplica" >No aplica...</option>
                </select>
                : <select className="custom-select" id="fiscalMunicipality" name="municipality" required
                onChange={this.props.handleFiscalAddress}
                value={this.props.data.FiscalAddress.municipality}>
                  <option value="" >Seleccione...</option>
                  {setMunicipality(this.state.direccion,this.props.data.FiscalAddress.state)}
                </select>
              }
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="fiscalParish"> * Parroquia </label>
              {
                ((this.props.data.FiscalAddress.state === 'Dependencias Federales') || ((this.props.data.FiscalAddress.state === 'Portuguesa') && (this.props.data.FiscalAddress.municipality === 'Agua Blanca')) || ((this.props.data.FiscalAddress.state === 'Sucre') && (this.props.data.FiscalAddress.municipality === 'Bolívar')))
                ? <select className="custom-select" id="fiscalParish" name="parish"
                onChange={this.props.handleFiscalAddress}
                value={this.props.data.FiscalAddress.parish}>
                  <option value="No Aplica" >No Aplica...</option>
                </select>
                : <select className="custom-select" id="fiscalParish" name="parish"
                onChange={this.props.handleFiscalAddress}
                value={this.props.data.FiscalAddress.parish} required>
                  <option value="" >Seleccione...</option>
                  {setParish(this.state.direccion,this.props.data.FiscalAddress.state, this.props.data.FiscalAddress.municipality)}
                </select>
              }
            </div>
            <div className="col-md-8 mb-3">
                <Input title={"Avenida"} name={"fiscalAvenue"} inputtype={"text"} value={this.props.data.FiscalAddress.fiscalAvenue} handlerChange={this.props.handleFiscalAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Edificio"} name={"fiscalBuilding"} inputtype={"text"} value={this.props.data.FiscalAddress.fiscalBuilding} handlerChange={this.props.handleFiscalAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Piso"} name={"fiscalFloor"} inputtype={"text"} value={this.props.data.FiscalAddress.fiscalFloor} handlerChange={this.props.handleFiscalAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Oficina"} name={"fiscalOffice"} inputtype={"text"} value={this.props.data.FiscalAddress.fiscalOffice} handlerChange={this.props.handleFiscalAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Apartamento"} name={"fiscalApartment"} inputtype={"text"} value={this.props.data.FiscalAddress.fiscalApartment} handlerChange={this.props.handleFiscalAddress}/>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12 text-center"> <hr/> <h4> Dirección Principal</h4> </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mainState"> * Estado </label>
              <select className="custom-select" id="mainState" name="state" required
              onChange={this.props.handleMainState}
              value={this.props.data.MainAddress.state}>
                <option value="" >Seleccione...</option>
                {this.OptionStates}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mainCity"> * Ciudad </label>
              <select className="custom-select" id="mainCity" name="city" required
              onChange={this.props.handleMainCity}
              value={this.props.data.MainAddress.city}>
                <option value="" >Seleccione...</option>
                {setCity(this.state.direccion, this.props.data.MainAddress.state)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mainMunicipality"> * Municipio </label>
              {
                this.props.data.MainAddress.state === 'Dependencias Federales'
                ? <select className="custom-select" id="mainMunicipality" name="municipality"
                onChange={this.props.handleMainAddress}
                value={this.props.data.MainAddress.municipality}>
                  <option value="No Aplica" >No aplica...</option>
                </select>
                : <select className="custom-select" id="mainMunicipality" name="municipality" required
                onChange={this.props.handleMainAddress}
                value={this.props.data.MainAddress.municipality}>
                  <option value="" >Seleccione...</option>
                  {setMunicipality(this.state.direccion,this.props.data.MainAddress.state)}
                </select>
              }
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mainParish"> * Parroquia </label>
              {
                ((this.props.data.MainAddress.state === 'Dependencias Federales') || ((this.props.data.MainAddress.state === 'Portuguesa') && (this.props.data.MainAddress.municipality === 'Agua Blanca')) || ((this.props.data.MainAddress.state === 'Sucre') && (this.props.data.MainAddress.municipality === 'Bolívar')))
                ? <select className="custom-select" id="mainParish" name="parish"
                onChange={this.props.handleMainAddress}
                value={this.props.data.MainAddress.parish}>
                  <option value="No Aplica" >No Aplica...</option>
                </select>
                : <select className="custom-select" id="mainParish" name="parish"
                onChange={this.props.handleMainAddress}
                value={this.props.data.MainAddress.parish} required>
                  <option value="" >Seleccione...</option>
                  {setParish(this.state.direccion,this.props.data.MainAddress.state, this.props.data.MainAddress.municipality)}
                </select>
              }
            </div>
            <div className="col-md-8 mb-3">
                <Input title={"Avenida"} name={"mainAvenue"} inputtype={"text"} value={this.props.data.MainAddress.mainAvenue} handlerChange={this.props.handleMainAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Edificio"} name={"mainBuilding"} inputtype={"text"} value={this.props.data.MainAddress.mainBuilding} handlerChange={this.props.handleMainAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Piso"} name={"mainFloor"} inputtype={"text"} value={this.props.data.MainAddress.mainFloor} handlerChange={this.props.handleMainAddress}/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Oficina"} name={"mainOffice"} inputtype={"text"} value={this.props.data.MainAddress.mainOffice} handlerChange={this.props.handleMainAddress}
                  help= "false"/>
            </div>
            <div className="col-md-3 mb-3">
                <Input title={"Apartamento"} name={"mainApartment"} inputtype={"text"} value={this.props.data.MainAddress.mainApartment} handlerChange={this.props.handleMainAddress}/>
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

export default SignUpCompany
