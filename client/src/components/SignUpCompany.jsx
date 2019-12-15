import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import Input from './Input';
import Currency from './Currency';
import Button from './Button';

function setCity(venezuela, state){
  let i=0, j=0;
  return(
    Object.values(venezuela).map((nameState) =>
      {
        if(nameState.estado === state){
        j=i;
        return nameState.ciudades.map((nameCity, key) =>
          <option value={nameCity}>{nameCity}</option>
          )
        }
        else{
          i = i + 1;
          return ("");
        }
      }
    )[j]
  )
}

function setMunicipality(venezuela,state){
  let i=0, j=0;
  return(
    Object.values(venezuela).map((nameState) =>
      {
        if(nameState.estado === state){
        j=i;
        return nameState.municipios.map((nameMunicipality, key) =>
          <option value={nameMunicipality.municipio}>{nameMunicipality.municipio}</option>
          )
        }
        else{
          i = i + 1;
          return ("");
        }
      }
    )[j]
  )
}

function setParish(venezuela,state, municipality){
  let i=0, j=0;
  return(
    Object.values(venezuela).map((nameState) =>
      {
        if(nameState.estado === state){
          j=i;
          return nameState.municipios.map((nameMunicipality) =>{
            if(nameMunicipality.municipio === municipality){
              return nameMunicipality.parroquias.map((nameParish) =>
                <option value={nameParish}>{nameParish}</option>
            )}
            else return ("");
          })
        }
        else{
          i = i + 1;
          return ("");
        }
      }
    )[j]
  )
}

class SignUpCompany extends Component{
  constructor(props) {
    super(props);
    this.state = {
      venezuela: {
        iso_31662: "",
        estado: "",
        capital: "",
        id_estado: "",
        municipios: {
          municipio: "",
          capital: "",
          parroquias: {

          }
        },
        ciudades: {

        }
      }
    }
  }
  componentDidMount() {
    axios.get('/venezuela.json')
      .then((res)=> {
        // handle success
        console.log('Callback Axios con direcciones de venezuela');
        console.log(res.data);
        this.setState({venezuela: res.data});
      })
      .catch(function (error) {
    // handle error
    console.log('axios');
    console.log(error);
  });
  }

  render(){
    this.OptionStates = Object.values(this.state.venezuela).map((venezuela, key) =>
      <option key={venezuela.id_estado} value={venezuela.estado}>{venezuela.estado}</option>
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
              help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"* Teléfono Secundario"} name={"telephone2"} inputtype={"tel"} value={this.props.data.telephone2} handlerChange={this.props.handleInput}
                help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
            <div className="col-md-3 mb-3">
              <Input title={"* Otro Teléfono"} name={"telephone3"} inputtype={"tel"} value={this.props.data.telephone3} handlerChange={this.props.handleInput}
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
               help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
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
                {setCity(this.state.venezuela, this.props.data.FiscalAddress.state)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="fiscalMunicipality"> * Municipio </label>
              <select className="custom-select" id="fiscalMunicipality" name="municipality" required
              onChange={this.props.handleFiscalAddress}
              value={this.props.data.FiscalAddress.municipality}>
                <option value="" >Seleccione...</option>
                { setMunicipality(this.state.venezuela,this.props.data.FiscalAddress.state) }
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="fiscalParish"> * Parroquia </label>
              <select className="custom-select" id="fiscalParish" name="parish" required
              onChange={this.props.handleFiscalAddress}
              value={this.props.data.FiscalAddress.parish}>
                <option value="" >Seleccione...</option>
                { setParish(this.state.venezuela, this.props.data.FiscalAddress.state, this.props.data.FiscalAddress.municipality) }
              </select>
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
                {setCity(this.state.venezuela, this.props.data.MainAddress.state)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mainMunicipality"> * Municipio </label>
              <select className="custom-select" id="mainMunicipality" name="municipality" required
              onChange={this.props.handleMainAddress}
              value={this.props.data.MainAddress.municipality}>
                <option value="" >Seleccione...</option>
                { setMunicipality(this.state.venezuela,this.props.data.MainAddress.state) }
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="mainParish"> * Parroquia </label>
              <select className="custom-select" id="mainParish" name="parish" required
              onChange={this.props.handleMainAddress}
              value={this.props.data.MainAddress.parish}>
                <option value="" >Seleccione...</option>
                { setParish(this.state.venezuela, this.props.data.MainAddress.state, this.props.data.MainAddress.municipality) }
              </select>
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
