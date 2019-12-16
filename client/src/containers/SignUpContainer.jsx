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
    || homeMunicipality === "" || homeParish === "") {
        alert("Por favor, rellene todos los campos obligatorios ('*')");
    } else if (!numbersEx.test(rif)){
        alert("El RIF es inválido")
    } else if (!numbersEx.test(ci)){
        alert("Documento de Identidad inválido")
    } else if (!namesEx.test(name)) {
        alert("El nombre es inválido");
    } else if (!namesEx.test(lastName)) {
        alert("El apellido es inválido");
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

axios.defaults.withCredentials = true;

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalVisible: true,
      PersonalData: {
        rif: "", ci: "", name: "", lastName: "", email: "",  password: "", bornDate: "",
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
        rif: "", ci: "", name: "", lastName: "", email: "",  password: "", bornDate: "",
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
        rif: "", ci: "", name: "", lastName: "", email: "",  password: "", bornDate: "",
        HomeAddress: {state:"", city:"", municipality:"", parish:"", homeAvenue:"",
                      homeBuilding:"", homeFloor:"", homeOffice:"", homeApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: ""
      },
    }, () => console.log(this.state.PersonalData));
  }
  handlePersonalSubmit(e) {
    e.preventDefault();
    let userData = this.state.PersonalData;
    let validation = validate("personal");

    console.log(userData);
    if (validation === true)
      alert("Usuario válido")
    else
      alert("Usuario no válido")
    /* if (validation === true) {
      axios.post('/auth/personal_signup', {
        correo: userData.email,
        nombre: userData.name,
        apellido: userData.lastNames,
        contrasenha: userData.password,
        fecha_nacimiento:userData.bornDate

      }).then( (response)=> {
        // handle success
        console.log(response);
        if (!response.data){
          console.log('ya existe el usuario');
        } else {
          console.log(response.data);
          this.props.history.push('/');
          return response.data;
        }
      });
    } else {
      console.log("Not Validated");
    }
    */
    return validation;
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
    let userData = this.state.CompanyData;
    let validation = validate("company");

    console.log(userData);
    if (validation === true)
      alert("Usuario válido")
    else
      alert("Usuario no válido")
    /* if (validation === true) {
      axios.post('/auth/personal_signup', {
        correo: userData.email,
        nombre: userData.name,
        apellido: userData.lastNames,
        contrasenha: userData.password,
        fecha_nacimiento:userData.bornDate

      }).then( (response)=> {
        // handle success
        console.log(response);
        if (!response.data){
          console.log('ya existe el usuario');
        } else {
          console.log(response.data);
          this.props.history.push('/');
          return response.data;
        }
      });
    } else {
      console.log("Not Validated");
    }
    */
    return validation;
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
