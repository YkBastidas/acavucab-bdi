import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import axios from 'axios';

import SignUpPersonal from '../components/SignUpPersonal';
import SignUpCompany from '../components/SignUpCompany';

function calculateAge(date) {

  var today = new Date();
  var birthday = new Date(date);
  var age = today.getFullYear() - birthday.getFullYear();
  var m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && (today.getDate() < birthday.getDate() + 1))) {
    age--;
  }
  return age;

}

function validate(user) {
  var rif, email, password, passwordEx, emailEx, namesEx, webPageEx, moneyEx,
  telephoneEx, numbersEx, namesAndNumbersEx;

  passwordEx = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
  emailEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  webPageEx = /^www+[a-z0-9._%+-]+\.[a-z]{2,}$/
  moneyEx = /^[0-9]+(\.|,){0,1}[0-9]{2}$/
  namesEx = /^[A-Za-z -]*[^0-9_\W]$/
  numbersEx = /^[0-9][^A-Za-z_\s\W]*$/
  telephoneEx = /^[(]{0,1}[0]*(2+[0-9]{2}|412|414|424|416|426)[)]{0,1}[\s]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/
  namesAndNumbersEx = /^[A-Za-z0-9 -]*[^_\W]$/

  if (user === "personal"){
    rif = document.getElementById('rif').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    var ci = document.getElementById('ci').value,
    name = document.getElementById('name').value,
    lastName = document.getElementById('lastName').value,
    userName= document.getElementById('userName').value,
    gender = document.getElementById('gender').value,
    bornDate = document.getElementById('bornDate').value,
    homeState = document.getElementById('homeState').value,
    homeCity = document.getElementById('homeCity').value,
    homeMunicipality= document.getElementById('homeMunicipality').value,
    homeParish = document.getElementById('homeParish').value,
    homeAvenue = document.getElementById('homeAvenue').value,
    homeBuilding = document.getElementById('homeBuilding').value,
    homeFloor = document.getElementById('homeFloor').value,
    homeOffice = document.getElementById('homeOffice').value,
    homeApartment = document.getElementById('homeApartment').value,
    telephone = document.getElementById('telephoneNumber').value,
    cellphone = document.getElementById('cellphoneNumber').value,
    officePhone = document.getElementById('officeNumber').value;

    if (rif === "" || ci === "" || name === "" || lastName === "" || email === ""
    || password === "" || telephone === "" || homeState === "" || homeCity === ""
    || homeMunicipality === "" || homeParish === "" || gender === "" || userName === "" || bornDate==="") {
        alert("Por favor, rellene todos los campos obligatorios ('*')");
    } else if (!numbersEx.test(rif)){
        alert("El RIF es inválido")
    } else if (!numbersEx.test(ci)){
        alert("Documento de Identidad inválido")
    } else if (!namesEx.test(name)) {
        alert("El nombre es inválido");
    } else if (!namesEx.test(lastName)) {
        alert("El apellido es inválido");
    } else if (!namesAndNumbersEx.test(userName)) {
        alert("Nombre de usuario inválido");
    } else if (!emailEx.test(email)) {
        alert("El correo es inválido");
    } else if ((homeAvenue !== "") && (!namesAndNumbersEx.test(homeAvenue))) {
        alert("La avenida es inválida");
    } else if ((homeBuilding !== "") && (!namesAndNumbersEx.test(homeBuilding))) {
        alert("El edificio es inválido");
    } else if ((homeFloor !== "") && (!namesAndNumbersEx.test(homeFloor))) {
        alert("El piso es inválido");
    } else if ((homeOffice !== "") && (!namesAndNumbersEx.test(homeOffice))) {
        alert("La oficina es inválida");
    } else if ((homeApartment !== "") && (!namesAndNumbersEx.test(homeApartment))) {
        alert("El departamento es inválido");
    } else if (!passwordEx.test(password)) {
        alert("La contraseña es inválida");
    } else if (calculateAge(bornDate) < 18) {
        alert("Debes tener una edad mayor o igual a 18 años para acceder al sistema");
    } else if (!telephoneEx.test(telephone)) {
        alert("Teléfono principal inválido");
    } else if ((cellphone !== "") && (!telephoneEx.test(cellphone))) {
        alert("Teléfono secundario inválido");
    } else if ((officePhone !== "") && (!telephoneEx.test(officePhone))) {
        alert("Teléfono de oficina inválido");
    } else
        return true;
    return false;
  }
  else{
    rif = document.getElementById('rif').value;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    var comercialDesignation = document.getElementById('comercialDesignation').value,
    businessName = document.getElementById('businessName').value,
    webPage = document.getElementById('webPage').value,
    capital = document.getElementById('capital').value,
    telephone1 = document.getElementById('telephone1').value,
    telephone2 = document.getElementById('telephone2').value,
    telephone3 = document.getElementById('telephone3').value,

    nameContact = document.getElementById('nameContact').value,
    numberContact = document.getElementById('numberContact').value,

    fiscalState = document.getElementById('fiscalState').value,
    fiscalCity = document.getElementById('fiscalCity').value,
    fiscalMunicipality= document.getElementById('fiscalMunicipality').value,
    fiscalParish = document.getElementById('fiscalParish').value,
    fiscalAvenue = document.getElementById('fiscalAvenue').value,
    fiscalBuilding = document.getElementById('fiscalBuilding').value,
    fiscalFloor = document.getElementById('fiscalFloor').value,
    fiscalOffice = document.getElementById('fiscalOffice').value,
    fiscalApartment = document.getElementById('fiscalApartment').value,

    mainState = document.getElementById('mainState').value,
    mainCity = document.getElementById('mainCity').value,
    mainMunicipality= document.getElementById('mainMunicipality').value,
    mainParish = document.getElementById('mainParish').value,
    mainAvenue = document.getElementById('mainAvenue').value,
    mainBuilding = document.getElementById('mainBuilding').value,
    mainFloor = document.getElementById('mainFloor').value,
    mainOffice = document.getElementById('mainOffice').value,
    mainApartment = document.getElementById('mainApartment').value;

    if (rif === "" || comercialDesignation === "" || name === "" || businessName === "" || email === ""
    || password === "" || telephone === "" || fiscalState === "" || fiscalCity === ""
    || fiscalMunicipality === "" || fiscalParish === "" || mainState === ""
    || mainCity === "" || mainMunicipality === "" || mainParish === "") {
        alert("Por favor, rellene todos los campos obligatorios ('*')");
    } else if (!numbersEx.test(rif)){
        alert("El RIF es inválido")
    } else if (!namesAndNumbersEx.test(businessName)) {
        alert("La Razón Social es inválida");
    } else if (!namesAndNumbersEx.test(comercialDesignation)) {
        alert("Designación Comercial inválida");
    } else if (!emailEx.test(email)) {
        alert("El correo es inválido");
    } else if ((fiscalAvenue !== "") && (!namesAndNumbersEx.test(fiscalAvenue))) {
        alert("La avenida fiscal es inválida");
    } else if ((fiscalBuilding !== "") && (!namesAndNumbersEx.test(fiscalBuilding))) {
        alert("El edificio fiscal es inválido");
    } else if ((fiscalFloor !== "") && (!namesAndNumbersEx.test(fiscalFloor))) {
        alert("El piso fiscal es inválido");
    } else if ((fiscalOffice !== "") && (!namesAndNumbersEx.test(fiscalOffice))) {
        alert("La oficina fiscal es inválida");
    } else if ((fiscalApartment !== "") && (!namesAndNumbersEx.test(fiscalApartment))) {
        alert("El departamento fiscal es inválido");
    } else if ((mainAvenue !== "") && (!namesAndNumbersEx.test(mainAvenue))) {
        alert("La avenida principal es inválida");
    } else if ((mainBuilding !== "") && (!namesAndNumbersEx.test(mainBuilding))) {
        alert("El edificio principal es inválido");
    } else if ((mainFloor !== "") && (!namesAndNumbersEx.test(mainFloor))) {
        alert("El piso principal es inválido");
    } else if ((mainOffice !== "") && (!namesAndNumbersEx.test(mainOffice))) {
        alert("La oficina principal es inválida");
    } else if ((mainApartment !== "") && (!namesAndNumbersEx.test(mainApartment))) {
        alert("El departamento principal es inválido");
    } else if (!passwordEx.test(password)) {
        alert("La contraseña es inválida");
    } else if (!webPageEx.test(webPage)) {
        alert("La dirección de la página web es inválida");
    } else if (!moneyEx.test(capital)) {
        alert("El monto del capital es inválido");
    } else if (!namesEx.test(nameContact)) {
        alert("El nombre del contacto es inválido");
    } else if (!telephoneEx.test(numberContact)) {
        alert("El numero del contacto es inválido");
    } else if (!telephoneEx.test(telephone1)) {
        alert("El teléfono principal es inválido");
    } else if ((telephone2!=="") && (!telephoneEx.test(telephone2))) {
        alert("El teléfono secundario es inválido");
    } else if ((telephone3!=="") && (!telephoneEx.test(telephone3))) {
        alert("El teléfono otro es inválido");
    } else
        return true;
    return false;
  }
}

function validarCedula(cedula){
  return axios.get('/read/clientePorCedula', {
    params: {
      clave : cedula
    }}
  ).then((response) => {
    console.log(response)
    if(response.data.length>0) return true
    else return false
  })
}
function validarUsuario(userName){
  return axios.get('/read/usuarioPorNombre', {
    params: {
      nombre : userName
    }}
  ).then((response) => {
      console.log(response.data)
      if(response.data.length > 0) return true
      else return false
  }).catch(function (error) {
    console.log('AXIOS error: '+ error);
    return 'errorValidateUser'
  });
}
function crearUsuario(data){
  return axios.post('/create/usuario', {
          nombre: data.userName,
          contrasena: data.password
        }).then((response)=> {
          console.log(response.data[0].id)
          return response.data[0].id
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'errorCreateUser'
        })
}
function foundDirecciones(arrayDireccion, arrayType){
  return axios.get('/read/direcciones')
  .then((response) => {
    return axios.get('/read/direccionPorNombreTipo',{
      params: {
        nombre: arrayDireccion[0],
        tipo: arrayType[0]
      }
    })
    .then((response)=>{
      return recursiveCrear(response.data, arrayType, arrayDireccion,1,response.data[0].clave)
    })
    .catch(function (error){
      console.log('AXIOS error: '+ error);
      alert('Error al buscar el Estado')
      return false
    })
  })
  .catch(function (error) {
  console.log('AXIOS error: '+ error);
  alert('Error al buscar las diercciones')
  return false
  });
}
function recursiveCrear(data, arrayType, arrayDireccion, i,foreign){
  console.log(arrayType[i], arrayDireccion[i],arrayDireccion, i, foreign)
    return axios.get('/read/direccionPorNombreTipoFK',{
      params: {
        nombre: arrayDireccion[i],
        tipo: arrayType[i],
        fk_direccion: foreign
      }
    }).then((response)=>{
      if((response.data.length>0)&&(i < arrayDireccion.length)){
        console.log('Existe')
        if(response.data[0].tipo !== 'Ciudad') foreign = response.data[0].clave
        return recursiveCrear(data,arrayType,arrayDireccion, i+1, foreign)
      }
      else if ((i < arrayDireccion.length)){
        console.log('No existe')
        return axios.post('/create/direccion',{
          tipo : arrayType[i],
          nombre: arrayDireccion[i],
          fk_direccion: foreign
        })
        .then((response)=>{
          console.log(response)
          foreign=response.data[0].clave
          return recursiveCrear(data,arrayType,arrayDireccion, i+1, foreign)
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          alert('Error al crear la dirección')
          return false
        })
      }
      else {
        console.log("FINAL: "+foreign)
        return foreign
      }
    }).catch(function (error) {
      console.log('AXIOS error: '+ error);
      alert('Error al obtener la dirección')
      return false
    })
}
function crearCliente(typeRIF, userData, foreign, idUsuario){
  return axios.post('/create/registro', {
          rif: typeRIF+userData.rif,
          tipo: 'Natural',
          fk_direccion: foreign,
          ci: userData.ci,
          nombre: userData.name,
          apellido: userData.lastName,
          genero: userData.gender,
          fecha_nacimiento: userData.bornDate,
          fk_usuario: idUsuario
        }).then((response)=> { // handle success
          return response.data[0].rif
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return "error"
        })
}
function crearClienteJuridico(typeRIF, userData, foreignFiscal, foreignPrincipal, idUsuario){
  return axios.post('/create/registro', {
          tipo: 'Juridico',
          rif: typeRIF+userData.rif,
          denominacionComercial: userData.comercialDesignation,
          razonSocial: userData.businessName,
          paginaWeb: userData.webPage,
          capital: userData.capital,
          fk_usuario: idUsuario,
          fk_direccionPrincipal: foreignPrincipal,
          fk_direccionFiscal: foreignFiscal
        }).then((response)=> { // handle success
          return response.data[0].rif
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return "error"
        })
}
function crearEmail(email, rif){
  return axios.post('/create/email', {
          correo: email,
          foreignKey: rif
        }).then((response)=> {
          return response.data[0].id
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}
function crearTelefono(numero, rif){
  return axios.post('/create/telefonoCliente', {
          telefono: numero,
          foreignKey: rif
        }).then((response)=> {
          return response.data[0].id
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}

function validarRazonSocial(razonSocial){
  return axios.get('/read/clientePorCedula', {
    params: {
      razon_social : razonSocial
    }}
  ).then((response) => {
    console.log(response)
    if(response.data.length>0) return true
    else return false
  }).catch(function (error){
    console.log('AXIOS error: '+ error);
    return "error"
  })
}
function crearContactPerson(contactData, rif){
  return axios.post('/create/personaContacto', {
          nombre: contactData.nameContact,
          numero: contactData.numberContact,
          foreignKey: rif
        }).then((response)=> {
          return response.data[0].id
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}

axios.defaults.withCredentials = true;

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalVisible: true,
      PersonalData: {
        rif: "", ci: "", name: "", lastName: "", userName: "", gender: "",
        email: "",  password: "", bornDate: "",
        HomeAddress: {state:"", city:"", municipality:"", parish:"", homeAvenue:"",
                      homeBuilding:"", homeFloor:"", homeOffice:"", homeApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: ""
      },
      CompanyData: {
        rif: "", comercialDesignation: "", businessName: "",
        username: "", password: "", email: "", webPage: "", capital: "",
        telephone1: "", telephone2: "", telephone3: "",  ContactPerson:{ nameContact: "", numberContact: "" },
        FiscalAddress: {state:"", city:"", municipality:"", parish:"", fiscalAvenue:"",
                        fiscalBuilding:"", fiscalFloor:"", fiscalOffice:"", fiscalApartment:""},
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                        mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      }
    };

    this.onClick = this.onClick.bind(this);

    this.handlePersonalEmail = this.handlePersonalEmail.bind(this);
    this.handlePersonalPassword = this.handlePersonalPassword.bind(this);
    this.handlePersonalBornDate = this.handlePersonalBornDate.bind(this);
    this.handlePersonalInput = this.handlePersonalInput.bind(this);
    this.handleHomeAddress = this.handleHomeAddress.bind(this);
    this.handleHomeState = this.handleHomeState.bind(this);
    this.handleHomeCity = this.handleHomeCity.bind(this);

    this.handleCompanyEmail = this.handleCompanyEmail.bind(this);
    this.handleCompanyPassword = this.handleCompanyPassword.bind(this);
    this.handleCompanyInput = this.handleCompanyInput.bind(this);
    this.handleContactPerson = this.handleContactPerson.bind(this);
    this.handleFiscalAddress = this.handleFiscalAddress.bind(this);
    this.handleFiscalState = this.handleFiscalState.bind(this);
    this.handleFiscalCity = this.handleFiscalCity.bind(this);
    this.handleMainAddress = this.handleMainAddress.bind(this);
    this.handleMainState = this.handleMainState.bind(this);
    this.handleMainCity = this.handleMainCity.bind(this);


    this.handlePersonalSubmit = this.handlePersonalSubmit.bind(this);
    this.handleCompanySubmit = this.handleCompanySubmit.bind(this);

    this.handleClearPersonal = this.handleClearPersonal.bind(this);
    this.handleClearCompany = this.handleClearCompany.bind(this);
  }

  onClick() {
    this.setState({
      PersonalData: {
        rif: "", ci: "", name: "", lastName: "", userName: "", gender: "",
        email: "",  password: "", bornDate: "",
        HomeAddress: {state:"", city:"", municipality:"", parish:"", homeAvenue:"",
                      homeBuilding:"", homeFloor:"", homeOffice:"", homeApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: ""
      },
      CompanyData: {
        rif: "", comercialDesignation: "", businessName: "",
        email: "", password: "", webPage: "", capital: "",
        telephone1: "", telephone2: "", telephone3: "",  ContactPerson:{ nameContact: "", numberContact: "" },
        FiscalAddress: {state:"", city:"", municipality:"", parish:"", fiscalAvenue:"",
                        fiscalBuilding:"", fiscalFloor:"", fiscalOffice:"", fiscalApartment:""},
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                        mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      }
    })
    this.setState(prevState => ({
      personalVisible: !prevState.personalVisible
    }))
  }

  handlePersonalEmail(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        email: value
      }
    }), () => console.log(this.state.PersonalData));
  }
  handlePersonalPassword(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        password: value

      }
    }), () => console.log(this.state.PersonalData));
  }
  handlePersonalBornDate(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        bornDate: value
      }
    }), () => console.log(this.state.PersonalData));
  }
  handlePersonalInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        [name]: value
      }
    }), () => console.log(this.state.PersonalData));
  }
  handleHomeState(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        HomeAddress: {
          ...prevState.PersonalData.HomeAddress,
          [name]: value,
          municipality: "",
          parish: {

          }
        }
      }
    }), () => console.log(this.state.PersonalData));
  }
  handleHomeCity(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        HomeAddress: {
          ...prevState.PersonalData.HomeAddress,
          [name]: value
        }
      }
    }), () => console.log(this.state.PersonalData));
  }
  handleHomeAddress(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      PersonalData: {
        ...prevState.PersonalData,
        HomeAddress: {
          ...prevState.PersonalData.HomeAddress,
          [name]: value
        }
      }
    }), () => console.log(this.state.PersonalData));
  }

  handleCompanyEmail(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        email: value
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleCompanyPassword(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        password: value

      }
    }), () => console.log(this.state.CompanyData));
  }
  handleCompanyInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        [name]: value
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleContactPerson(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        ContactPerson:{
          ...prevState.CompanyData.ContactPerson,
          [name]: value
        }
      }
    }), () => console.log(this.state.CompanyData));
  }

  handleFiscalState(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        FiscalAddress: {
          ...prevState.CompanyData.FiscalAddress,
          [name]: value,
          municipality: "",
          parish: {

          }
        }
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleFiscalCity(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        FiscalAddress: {
          ...prevState.CompanyData.FiscalAddress,
          [name]: value,
          parish: {

          }
        }
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleFiscalAddress(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        FiscalAddress: {
          ...prevState.CompanyData.FiscalAddress,
          [name]: value
        }
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleMainState(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        MainAddress: {
          ...prevState.CompanyData.MainAddress,
          [name]: value,
          municipality: "",
          parish: {

          }
        }
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleMainCity(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        MainAddress: {
          ...prevState.CompanyData.MainAddress,
          [name]: value,
          parish: {

          }
        }
      }
    }), () => console.log(this.state.CompanyData));
  }
  handleMainAddress(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      CompanyData: {
        ...prevState.CompanyData,
        MainAddress: {
          ...prevState.CompanyData.MainAddress,
          [name]: value
        }
      }
    }), () => console.log(this.state.CompanyData));
  }

  handleClearPersonal(e) {
    e.preventDefault();
    this.setState({
      PersonalData: {
        rif: "", ci: "", name: "", lastName: "", userName: "", gender: "",
        email: "",  password: "", bornDate: "",
        HomeAddress: {state:"", city:"", municipality:"", parish:"", homeAvenue:"",
                      homeBuilding:"", homeFloor:"", homeOffice:"", homeApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: ""
      },
    }, () => console.log(this.state.PersonalData));
  }
  handlePersonalSubmit(e) {
    e.preventDefault();
    let userData = this.state.PersonalData, typeRIF = 'V', typeDireccion, arrayType = [];
    let direccion = this.state.PersonalData.HomeAddress, arrayDireccion = [];
    let validation = validate("personal"), rif = 'V'+userData.rif.toString();

    if(direccion.homeApartment !== "") {arrayDireccion.unshift(direccion.homeApartment);
    typeDireccion = 'Apartamento'; arrayType.unshift(typeDireccion)}
    if (direccion.homeOffice !== "") {arrayDireccion.unshift(direccion.homeOffice);
    typeDireccion = 'Oficina';arrayType.unshift(typeDireccion)}
    if (direccion.homeFloor !== "") {arrayDireccion.unshift(direccion.homeFloor);
    typeDireccion = 'Piso';arrayType.unshift(typeDireccion)}
    if (direccion.homeBuilding !== "") {arrayDireccion.unshift(direccion.homeBuilding);
    typeDireccion = 'Edificio';arrayType.unshift(typeDireccion)}
    if (direccion.homeAvenue !== "") {arrayDireccion.unshift(direccion.homeAvenue);
    typeDireccion = 'Avenida';arrayType.unshift(typeDireccion)}
    if (direccion.parish !== "No Aplica") {arrayDireccion.unshift(direccion.parish);
    typeDireccion = 'Parroquia';arrayType.unshift(typeDireccion)}
    if (direccion.municipality!=="No Aplica") {arrayDireccion.unshift(direccion.municipality); typeDireccion='Municipio';arrayType.unshift(typeDireccion)}
    arrayDireccion.unshift(direccion.state,direccion.city); typeDireccion = 'Ciudad'; arrayType.unshift("Estado",typeDireccion);

    if (validation === true){
      return axios.get('/read/clientePorRif', {
        params: {
          clave : rif
        }}
      ).then((response) => {
        console.log(rif)
        console.log("validarRif"); console.log(response)
          if(response.data.length > 0){
            alert("RIF de cliente ya está registrado")
            return 'error'
          }
          else return false
      }).then((response)=>{
        console.log("validarCedula"); console.log(response)
        if(response === false)
          return validarCedula(userData.ci)
        else return response
      }).then((response) => {
        if(response === 'error' ) return response
        else if (response === true){
          alert("El documento de identificación está asociado a otro cliente")
          return 'error'
        }
        else return false
      }).then((response)=>{
        console.log("validarUsuario"); console.log(response)
        if (response==='error') return response
        else if(response === false) return validarUsuario(userData.userName)
        else {
          alert("Ha ocurrido un error al validar el usuario")
          return 'error'
        }
      }).then((response) => {
        console.log("crearUsuario"); console.log(response)
        if ((response === 'error')) return response
        else if (response){
            alert("Nombre de usuario ya en uso")
            return 'error'
          }
          else
            return crearUsuario(userData)
      }).then((response) => {
        let array = []
          console.log("foundDirecciones"); console.log(response)
          if (response === 'error') {
            array.push(response,'error')
            return array
          }
          else if (response === 'errorCreateUser') {
            alert('Error al crear el nuevo usuario, intente de nuevo')
            array.push('error', 'error')
            return array
          }
          else {
            array.push(response);
            return foundDirecciones(arrayDireccion, arrayType)
            .then((foreign)=>{
              array.push(foreign);
              return array
            })
            .catch(function (error){
              array.push("error")
              return array
            })
          }
      }).then((response)=>{
        let idUsuario = response[0], foreign = response[1]
        console.log("crearCliente"); console.log(response)
        if((foreign!=='error')&&(foreign!==false)) {
          return crearCliente(typeRIF, userData, foreign, idUsuario)
          .then(async (response)=>{
            let emailResponse = await crearEmail(userData.email, response),
            telephoneResponse = await crearTelefono(userData.telephoneNumber, response),
            cellphoneResponse, officeResponse, array = []
            array.push(response, emailResponse, telephoneResponse)
            if(userData.cellphoneNumber !== ""){
              cellphoneResponse = await crearTelefono(userData.cellphoneNumber, response)
              array.push(cellphoneResponse)
            }
            if (userData.officeNumber !== ""){
              officeResponse = await crearTelefono(userData.officeNumber, response)
              array.push(officeResponse)
            }
            return array
          })
          .then((response)=>{
            let max = response.length, i = 1
            while (i < max){
              if((response[i] === 'error')&&(i===1)){
                alert("Error al crear el correo electrónico")
                break
              }
              else if((response[i] === 'error')&&(i===2)){
                alert("Error al crear el teléfono principal")
                break
              }
              else{
                if(i===3){
                  if((response[i] === 'error')){
                    alert("Error al crear el teléfono celular")
                    break
                  }
                }
                else if (i===4){
                  if((response[i] === 'error')){
                    alert("Error al crear el teléfono de oficina")
                    break
                  }
                }
              }
              i++;
            }
            if (i === max)
              alert("El cliente: "+response[0]+" ha sido creado exitosamente")
          })
          .catch(function (error) {
            alert('Error: No se ha podido registrar al cliente')
            console.log('AXIOS error: '+ error);
          })
        }
        else {
          console.log('Error en el proceso de creación')
        }
      }).catch(function (error) {
        alert('Error: Algo ha fallado, intente nuevamente')
        console.log('AXIOS error: '+ error);
      });
    }
    else
      alert("Usuario no válido");
  }

  handleClearCompany(e) {
    e.preventDefault();
    this.setState({
      CompanyData: {
        rif: "", comercialDesignation: "", businessName: "",
        email: "", password: "", webPage: "", capital: "",
        telephone1: "", telephone2: "", telephone3: "",  ContactPerson:{ nameContact: "", numberContact: "" },
        FiscalAddress: {state:"", city:"", municipality:"", parish:"", fiscalAvenue:"",
                        fiscalBuilding:"", fiscalFloor:"", fiscalOffice:"", fiscalApartment:""},
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                        mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      }
    }, () => console.log(this.state.CompanyData));
  }
  handleCompanySubmit(e) {
    e.preventDefault();
    let userData = this.state.CompanyData, typeRIF = 'J', typeDireccion, arrayTypeFiscal = [], arrayTypePrincipal = [], direccionFiscal = this.state.CompanyData.FiscalAddress,
    direccionPrincipal = this.state.CompanyData.MainAddress, arrayDireccionFiscal = [],
    arrayDireccionPrincipal = [], validation = validate("company"), rif = 'J'+userData.rif.toString();

    if(direccionFiscal.fiscalApartment !== "") {arrayDireccionFiscal.unshift(direccionFiscal.fiscalApartment);
    typeDireccion = 'Apartamento'; arrayTypeFiscal.unshift(typeDireccion)}
    if (direccionFiscal.fiscalOffice !== "") {arrayDireccionFiscal.unshift(direccionFiscal.fiscalOffice);
    typeDireccion = 'Oficina';arrayTypeFiscal.unshift(typeDireccion)}
    if (direccionFiscal.fiscalFloor !== "") {arrayDireccionFiscal.unshift(direccionFiscal.fiscalFloor);
    typeDireccion = 'Piso';arrayTypeFiscal.unshift(typeDireccion)}
    if (direccionFiscal.fiscalBuilding !== "") {arrayDireccionFiscal.unshift(direccionFiscal.fiscalBuilding);
    typeDireccion = 'Edificio';arrayTypeFiscal.unshift(typeDireccion)}
    if (direccionFiscal.fiscalAvenue !== "") {arrayDireccionFiscal.unshift(direccionFiscal.fiscalAvenue);
    typeDireccion = 'Avenida';arrayTypeFiscal.unshift(typeDireccion)}
    if (direccionFiscal.parish !== "No Aplica") {arrayDireccionFiscal.unshift(direccionFiscal.parish);
    typeDireccion = 'Parroquia';arrayTypeFiscal.unshift(typeDireccion)}
    if (direccionFiscal.municipality!=="No Aplica") {arrayDireccionFiscal.unshift(direccionFiscal.municipality); typeDireccion='Municipio';arrayTypeFiscal.unshift(typeDireccion)}
    arrayDireccionFiscal.unshift(direccionFiscal.state,direccionFiscal.city); typeDireccion = 'Ciudad'; arrayTypeFiscal.unshift("Estado",typeDireccion);

    if(direccionPrincipal.mainApartment !== "") {arrayDireccionPrincipal.unshift(direccionPrincipal.mainApartment);
    typeDireccion = 'Apartamento'; arrayTypePrincipal.unshift(typeDireccion)}
    if (direccionPrincipal.mainOffice !== "") {arrayDireccionPrincipal.unshift(direccionPrincipal.mainOffice);
    typeDireccion = 'Oficina';arrayTypePrincipal.unshift(typeDireccion)}
    if (direccionPrincipal.mainFloor !== "") {arrayDireccionPrincipal.unshift(direccionPrincipal.mainFloor);
    typeDireccion = 'Piso';arrayTypePrincipal.unshift(typeDireccion)}
    if (direccionPrincipal.mainBuilding !== "") {arrayDireccionPrincipal.unshift(direccionPrincipal.mainBuilding);
    typeDireccion = 'Edificio';arrayTypePrincipal.unshift(typeDireccion)}
    if (direccionPrincipal.mainAvenue !== "") {arrayDireccionPrincipal.unshift(direccionPrincipal.mainAvenue);
    typeDireccion = 'Avenida';arrayTypePrincipal.unshift(typeDireccion)}
    if (direccionPrincipal.parish !== "No Aplica") {arrayDireccionPrincipal.unshift(direccionPrincipal.parish);
    typeDireccion = 'Parroquia';arrayTypePrincipal.unshift(typeDireccion)}
    if (direccionPrincipal.municipality!=="No Aplica") {arrayDireccionPrincipal.unshift(direccionPrincipal.municipality); typeDireccion='Municipio';arrayTypePrincipal.unshift(typeDireccion)}
    arrayDireccionPrincipal.unshift(direccionPrincipal.state,direccionPrincipal.city); typeDireccion = 'Ciudad'; arrayTypePrincipal.unshift("Estado",typeDireccion);

    if (validation === true){
      return axios.get('/read/clientePorRif', {
        params: {
          clave : rif
        }}
      ).then((response) => {
        console.log("validarRif"); console.log(response)
          if(response.data.length > 0){
            alert("RIF de cliente ya está registrado")
            return 'error'
          }
          else return false
      }).then((response)=>{
        console.log("validarRazónSocial"); console.log(response)
        if(response === false)
          return validarRazonSocial(userData.businessName)
        else return response
      }).then((response) => {
        if(response === 'error' ) return response
        else if (response === true){
          alert("Razón Social ya registrada en el sistema")
          return 'error'
        }
        else return false
      }).then((response)=>{
        console.log("validarUsuario"); console.log(response)
        if (response==='error') return response
        else if(response === false) return validarUsuario(userData.userName)
        else {
          alert("Ha ocurrido un error al validar el usuario")
          return 'error'
        }
      }).then((response) => {
        console.log("crearUsuario"); console.log(response)
        if ((response === 'error')) return response
        else if (response){
            alert("Nombre de usuario ya en uso")
            return 'error'
          }
          else
            return crearUsuario(userData)
      }).then((response) => {
        let array = []
          console.log("foundDireccionesFiscal"); console.log(response)
          if (response === 'error') {
            array.push(response,'error')
            return array
          }
          else if (response === 'errorCreateUser') {
            alert('Error al crear el nuevo usuario, intente de nuevo')
            array.push('error', 'error')
            return array
          }
          else {
            array.push(response);
            return foundDirecciones(arrayDireccionFiscal, arrayTypeFiscal)
            .then((foreign)=>{
              array.push(foreign);
              return array
            })
            .catch(function (error){
              array.push("error")
              return array
            })
          }
      }).then((response)=>{
        console.log("foundDireccionesPrincipal"); console.log(response)
        let idUsuario = response[0], foreignFiscal = response[1]
        if (foreignFiscal === 'error') {
          response.push('error')
          return response
        }
        else if (idUsuario === 'errorCreateUser') {
          alert('Error al crear el nuevo usuario, intente de nuevo')
          response.push('error')
          return response
        }
        else {
          return foundDirecciones(arrayDireccionPrincipal, arrayTypePrincipal)
          .then((foreignPrincipal)=>{
            response.push(foreignPrincipal);
            return response
          })
          .catch(function (error){
            response.push("error")
            return response
          })
        }
      }).then((response)=>{
        let idUsuario = response[0], foreignFiscal = response[1], foreignPrincipal = response[2]
        console.log("crearCliente"); console.log(response)
        if((foreignFiscal!=='error')&&(foreignFiscal!==false)) {
          return crearClienteJuridico(typeRIF, userData, foreignFiscal, foreignPrincipal, idUsuario)
          .then(async (response)=>{
            let emailResponse = await crearEmail(userData.email, response),
            contactResponse = await crearContactPerson(userData.ContactPerson, response),
            telephone1Response = await crearTelefono(userData.telephone1, response),
            telephone2Response, telephone3Response, array = []
            array.push(response, emailResponse, contactResponse, telephone1Response)
            if(userData.telephone2 !== ""){
              telephone2Response = await crearTelefono(userData.telephone2, response)
              array.push(telephone2Response)
            }
            if (userData.telephone3 !== ""){
              telephone3Response = await crearTelefono(userData.telephone3, response)
              array.push(telephone3Response)
            }
            return array
          })
          .then((response)=>{
            let max = response.length, i = 1
            while (i < max){
              if((response[i] === 'error')&&(i===1)){
                alert("Error al crear el correo electrónico")
                break
              }
              else if((response[i] === 'error')&&(i===2)){
                alert("Error al crear la persona de contacto")
                break
              }
              else if((response[i] === 'error')&&(i===3)){
                alert("Error al crear el teléfono principal")
                break
              }
              else{
                if(i===4){
                  if((response[i] === 'error')){
                    alert("Error al crear el teléfono secundario")
                    break
                  }
                }
                else if (i===5){
                  if((response[i] === 'error')){
                    alert("Error al crear el otro teléfono")
                    break
                  }
                }
              }
              i++;
            }
            if (i === max)
              alert("El cliente: "+response[0]+" ha sido creado exitosamente")
          })
          .catch(function (error) {
            alert('Error: No se ha podido registrar al cliente')
            console.log('AXIOS error: '+ error);
          })
        }
        else {
          console.log('Error de clave foránea')
        }
      }).catch(function (error) {
        alert('Error: Algo ha fallado, intente nuevamente')
        console.log('AXIOS error: '+ error);
      });
    }
    else
      alert("Usuario no válido");

  }
  render() {
    return (
      <div className=" container">
        {
          this.state.personalVisible
          ? <SignUpPersonal data= {this.state.PersonalData} onClick={this.onClick} handleSubmit={this.handlePersonalSubmit} handleEmail={this.handlePersonalEmail} handlePassword={this.handlePersonalPassword} handleBornDate={this.handlePersonalBornDate} handleInput={this.handlePersonalInput} handleClearForm={this.handleClearPersonal}
          handleHomeAddress = {this.handleHomeAddress} handleHomeState = {this.handleHomeState}
          handleHomeCity = {this.handleHomeCity}/>

        : <SignUpCompany data = {this.state.CompanyData} onClick={this.onClick} handleSubmit={this.handleCompanySubmit} handleEmail={this.handleCompanyEmail} handlePassword={this.handleCompanyPassword}  handleInput={this.handleCompanyInput}
        handleContactPerson={this.handleContactPerson} handleClearForm={this.handleClearCompany} handleFiscalAddress = {this.handleFiscalAddress} handleFiscalState = {this.handleFiscalState} handleFiscalCity = {this.handleFiscalCity} handleMainAddress = {this.handleMainAddress}    handleMainState = {this.handleMainState} handleMainCity = {this.handleMainCity}
        />
        }
      </div >)
  }
}

export default withRouter(SignUpContainer);
