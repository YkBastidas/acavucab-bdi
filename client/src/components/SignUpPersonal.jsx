import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import Input from './Input';
import Button from './Button';
import DateForm from './DateForm';

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
  componentWillMount() {
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
               <Input title={"* Correo Electrónico"} name={"email"} inputtype={"email"} value={this.props.data.email} handlerChange={this.props.handleEmail} help="true" helptext="El formato del correo debe ser 'nombreusuario@dominio.extensión'"/>
             </div>
             <div className="col-md-4 mb-3">
               <Input title={"* Contraseña"} name={"password"} inputtype={"password"} value={this.props.data.password} handlerChange={this.props.handlePassword} help= "true"
               helptext="Tu contraseña debe tener entre 8-20 caracteres, contener por lo menos una letra mayúscula y una minúscula y tener por lo menos 1 caracter especial."/>
             </div>
             <div className="col-md-4 mb-3">
               <DateForm title={"* Fecha de nacimiento:"} name={"bornDate"} inputtype={"date"} min={"1899-01-01"} max={maxDate()} value={this.props.data.bornDate} handlerChange={this.props.handleBornDate}/>
             </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <Input title={"* Teléfono Principal"} name={"telephoneNumber"} inputtype={"tel"} value={this.props.data.telephoneNumber} handlerChange={this.props.handleInput}
              help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
            <div className="col-md-4 mb-3">
              <Input title={"* Teléfono Secundario"} name={"cellphoneNumber"} inputtype={"tel"} value={this.props.data.cellphoneNumber} handlerChange={this.props.handleInput}
                help= "true" helptext="Ejemplo: '(2XX) 123-4567' '(424) 123 4567' '04121234567' '(0412)123-4567' '0424 123.4567'"/>
            </div>
            <div className="col-md-4 mb-3">
              <Input title={"* Teléfono de Oficina"} name={"officeNumber"} inputtype={"tel"} value={this.props.data.officeNumber} handlerChange={this.props.handleInput}
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
                {setCity(this.state.venezuela, this.props.data.HomeAddress.state)}
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="homeMunicipality"> * Municipio </label>
              <select className="custom-select" id="homeMunicipality" name="municipality" required
              onChange={this.props.handleHomeAddress}
              value={this.props.data.HomeAddress.municipality}>
                <option value="" >Seleccione...</option>
                { setMunicipality(this.state.venezuela,this.props.data.HomeAddress.state) }
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="homeParish"> * Parroquia </label>
              <select className="custom-select" id="homeParish" name="parish" required
              onChange={this.props.handleHomeAddress}
              value={this.props.data.HomeAddress.parish}>
                <option value="" >Seleccione...</option>
                { setParish(this.state.venezuela, this.props.data.HomeAddress.state, this.props.data.HomeAddress.municipality) }
              </select>
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
