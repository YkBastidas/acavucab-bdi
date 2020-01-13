import React, {Component} from 'react';

import NaturalClient from '../components/NaturalClient'
import CompanyClient from '../components/CompanyClient'
import PersonalAccount from '../components/PersonalAccount'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import axios from 'axios'

function foundTelefonos(foreignCliente){
  return axios.get('/read/telefonosPorCliente', {
          params:{foreignKey: foreignCliente}
        }).then((response)=> {
          let index, numbersArray =[]
          for (index = 0; index < response.data.length; index++) {
            numbersArray.push(response.data[index])
          }
          return numbersArray
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}
function foundTelefonosPersonal(foreignPersonal){
  return axios.get('/read/telefonosPorPersonal', {
          params:{foreignKey: foreignPersonal}
        }).then((response)=> {
          let index, numbersArray =[]
          for (index = 0; index < response.data.length; index++) {
            numbersArray.push(response.data[index])
          }
          return numbersArray
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}
function foundEmails(foreignCliente){
  return axios.get('/read/emailsPorCliente', {
          params:{foreignKey: foreignCliente}
        }).then((response)=> {
          let index, direccionesArray =[]
          for (index = 0; index < response.data.length; index++) {
            direccionesArray.push(response.data[index])
          }
          return direccionesArray
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}
function foundContacts(foreignCliente){
  return axios.get('/read/contactosPorCliente', {
          params:{foreignKey: foreignCliente}
        }).then((response)=> {
          let index, nombresArray =[], numerosArray =[]
          for (index = 0; index < response.data.length; index++) {
            nombresArray.push(response.data[index].nombre)
          }
          for (index = 0; index < response.data.length; index++) {
            numerosArray.push(response.data[index].numero)
          }
          return [nombresArray, numerosArray]
        }).catch(function (error) {
          console.log('AXIOS error: '+ error);
          return 'error'
        })
}
function recursiveDirecciones(foreignDireccion){
  return axios.get('/read/direccionPorClave',{params:{clave: foreignDireccion}})
  .then(async(response)=>{
    if(response.data[0].tipo !== 'Estado'){
      let direccionPadre = await recursiveDirecciones(response.data[0].fk_direccion)
      direccionPadre.push(response.data[0])
      return direccionPadre
    }
    else
      return response.data
  })
  .then((response)=>{
      return response
  })
  .catch(function (error){
      console.log('AXIOS error: '+ error);
      alert('Error al buscar el Estado')
      return false
  })
}
function personalPorUser(idUsuario){
  return axios.get('/read/personalPorUserID',{
    params: {
      fk_usuario : idUsuario
    }})
  .then((res)=>{
    return res
  })
  .catch(function (error){//handle error
    console.log('axios'); console.log(error)
  })
}
function rolPorID(idRol){
  return axios.get('/read/rolPorID',{
    params: {
      fk_rol : idRol
    }})
  .then((res)=>{
    return res.data[0]
  })
  .catch(function (error){//handle error
    console.log('axios'); console.log(error)
  })
}

require('events').EventEmitter.prototype._maxListeners = 100;
var logged = false, noRender= true
class MiCuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {id: '', nombre: '', contrasena: '', fk_rol:''},
      NaturalData: {
        rif: "", ci: "", name: "", lastName: "", gender: "",
        Emails: {email1:""}, bornDate: "",
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                      mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: ""
      },
      CompanyData: {
        rif: "", comercialDesignation: "", businessName: "",
        username: "", password: "", Emails: {email1:""}, webPage: "", capital: "",
        telephone1: "", telephone2: "", telephone3: "",  ContactPerson:{ contact1: {nameContact: "", numberContact: ""} },
        FiscalAddress: {state:"", city:"", municipality:"", parish:"", fiscalAvenue:"",
                        fiscalBuilding:"", fiscalFloor:"", fiscalOffice:"", fiscalApartment:""},
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                        mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      },
      PersonalData: {
        nombre: "", apellido: "", ci:"", salario:"", cargo:"", genero:"",
        telephone1:"", telephone2:"", telephone3:"", rol:"",
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                      mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      },
      isLoggedIn:false,
			naturalClient: true,
      personal: false,
    }
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  componentDidMount() {
    axios.get('/read/userInfo',{withCredentials: true})
    .then((res)=> { // handle success
      console.log(res)
      if(res.data==='errorNoUser'){
        throw new Error('NoUser');
      }
      logged = true
      console.log('Callback Axios con Data del Usuario')
      console.log(res.data)
      this.setState({userData: res.data, isLoggedIn:true})
      console.log(this.state)
      return this.state.userData.id
    })
    .then((res)=>{
    	return axios.get('/read/clientePorUserId',{
        params: {
          fk_usuario : res
        }})
			.then(async (res)=>{
        if(res.data.length>0) return res
        else {
          this.setState({personal: true})
          return await personalPorUser(this.state.userData.id)
        }
      })
			.catch(function (error){//handle error
				console.log('axios'); console.log(error)
			})
    })
		.then(async(res)=>{
			let data = res.data[0]
      if(this.state.personal === true){
        let rol = await rolPorID(this.state.userData.fk_rol)
        this.setState(prevState => ({
          PersonalData: {
            ...prevState.PersonalData,
            nombre: data.nombre, apellido: data.apellido, ci:data.ci, salario:data.salario,
            cargo:data.cargo, genero:data.genero, rol: rol.nombre
          },
          isLoggedIn:true
        }))
      }
			else if(data.tipo === 'Natural'){
        this.setState(prevState => ({
          NaturalData: {
            ...prevState.NaturalData,
            rif: data.rif, ci: data.natural_ci, name: data.natural_nombre, lastName: data.natural_apellido, gender: data.natural_genero, bornDate: data.natural_fecha_nacimiento
          },
          isLoggedIn:true
        }))
			}
			else{
        this.setState(prevState => ({
          CompanyData: {
            ...prevState.CompanyData,
            rif: data.rif, comercialDesignation: data.juridico_denominacion_comercial, businessName: data.juridico_razon_social, webPage: data.juridico_pagina_web, capital: data.juridico_capital
          },
          isLoggedIn:true, naturalClient: false
        }))
			}
      return data
		})
    .then(async(res)=>{
      let personalState = this.state.personal, arrayNumbers
      if(personalState === true) {
        arrayNumbers = await foundTelefonosPersonal(res.clave)
      }
      else arrayNumbers = await foundTelefonos(res.rif)
      if (res.tipo === 'Natural'){
        for (let index = 0; index < arrayNumbers.length; index++) {
          let name
          switch(index){
            case 0:
              name = 'telephoneNumber'
              break;
            case 1:
              name = 'cellphoneNumber'
              break;
            case 2:
              name = 'officeNumber'
              break;
            default:
              console.log('Tipo de teléfono no Coincide');
          }
          let number = arrayNumbers[index].numero
          this.setState(prevState => ({
            NaturalData: {
              ...prevState.NaturalData,
              [name] : number
            }
          }))
        }
      }
      else{
        for (let index = 0; index < arrayNumbers.length; index++) {
          let name = 'telephone'+[index+1], number = arrayNumbers[index].numero
          if(personalState === true){
            this.setState(prevState => ({
              PersonalData: {
                ...prevState.PersonalData,
                [name] : number
              }
            }))
          }
          else{
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                [name] : number
              }
            }))
          }
        }
      }
      if(personalState === true){
        let direccionPrincipal = await recursiveDirecciones(res.fk_direccion)
        return [direccionPrincipal, 'Personal']
      }
      else{
        let arrayEmails = await foundEmails(res.rif)
        for (let index = 0; index < arrayEmails.length; index++) {
          let name = 'email'+[index+1], direccion = arrayEmails[index].direccion
          if(res.tipo === 'Natural'){
            this.setState(prevState => ({
              NaturalData: {
                ...prevState.NaturalData,
                Emails:{
                  ...prevState.NaturalData.Emails,
                  [name] : direccion
                }
              }
            }))
          }
          else{
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                Emails:{
                  ...prevState.CompanyData.Emails,
                  [name] : direccion
                }
              }
            }))
          }
        }
        if(res.tipo === 'Juridico'){
          let ContactsData = await foundContacts(res.rif)
          let arrayNameContact = ContactsData[0], arrayNumberContact = ContactsData[1]
          for (let index = 0; index < arrayNameContact.length; index++) {
            let name = 'contact'+[index+1], nombre = arrayNameContact[index]
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                ContactPerson:{
                  ...prevState.CompanyData.ContactPerson,
                  [name] : {
                    ...prevState.CompanyData.ContactPerson[name],
                    nameContact : nombre
                  }
                }
              }
            }))
          }
          for (let index = 0; index < arrayNumberContact.length; index++) {
            let name = 'contact'+[index+1], numero = arrayNumberContact[index]
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                ContactPerson:{
                  ...prevState.CompanyData.ContactPerson,
                  [name] : {
                    ...prevState.CompanyData.ContactPerson[name],
                    numberContact: numero
                    }
                }
              }
            }))
            console.log(this.state.CompanyData)
          }
        }
        if (res.tipo === 'Natural'){
          let direccionPrincipal = await recursiveDirecciones(res.fk_direccion_fisica)
          return [direccionPrincipal, 'Natural']
        }
        else{
          let direccionPrincipal = await recursiveDirecciones(res.fk_direccion_fisica)
          let direccionFiscal = await recursiveDirecciones(res.juridico_fk_direccion_fiscal)
          return [direccionPrincipal, direccionFiscal]
        }
      }
    })
    .then((res)=>{
      let direccionPrincipal = res[0], nameData
      if(res[1]=== 'Personal') nameData = 'PersonalData'
      else if (res[1] === 'Natural') nameData = 'NaturalData'
      else{
        nameData = 'CompanyData'
        let direccionFiscal = res[1]
        direccionFiscal.forEach((direccion, index)=>{
          switch (direccion.tipo) {
            case 'Estado':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    state: direccion.nombre
                  }
                }
              }))
              break;
            case 'Ciudad':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    city: direccion.nombre
                  }
                }
              }))
              break;
            case 'Municipio':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    municipality: direccion.nombre
                  }
                }
              }))
              break;
            case 'Parroquia':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    parish: direccion.nombre
                  }
                }
              }))
              break;
            case 'Avenida':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    fiscalAvenue: direccion.nombre
                  }
                }
              }))
              break;
            case 'Edificio':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    fiscalBuilding: direccion.nombre
                  }
                }
              }))
              break;
            case 'Piso':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                FiscalAddress: {
                  ...prevState.CompanyData.FiscalAddress,
                  fiscalFloor: direccion.nombre
                }
              }
            }))
              break;
            case 'Oficina':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    fiscalOffice: direccion.nombre
                  }
                }
              }))
              break;
            case 'Apartamento':
              this.setState(prevState => ({
                CompanyData: {
                  ...prevState.CompanyData,
                  FiscalAddress: {
                    ...prevState.CompanyData.FiscalAddress,
                    fiscalApartment: direccion.nombre
                  }
                }
              }))
              break;
            default:
              console.log('El tipo de dirección no coincide');
            }
        })
      }
      direccionPrincipal.forEach((direccion, index)=>{
        switch (direccion.tipo) {
          case 'Estado':
            this.setState(prevState => ({
              [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  state: direccion.nombre
                }
              }
            }))
            break;
          case 'Ciudad':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  city: direccion.nombre
                }
              }
            }))
            break;
          case 'Municipio':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  municipality: direccion.nombre
                }
              }
            }))
            break;
          case 'Parroquia':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  parish: direccion.nombre
                }
              }
            }))
            break;
          case 'Avenida':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  mainAvenue: direccion.nombre
                }
              }
            }))
            break;
          case 'Edificio':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  mainBuilding: direccion.nombre
                }
              }
            }))
            break;
          case 'Piso':
          this.setState(prevState => ({
           [nameData]: {
              ...prevState[nameData],
              MainAddress: {
                ...prevState[nameData].MainAddress,
                mainFloor: direccion.nombre
              }
            }
          }))
            break;
          case 'Oficina':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  mainOffice: direccion.nombre
                }
              }
            }))
            break;
          case 'Apartamento':
            this.setState(prevState => ({
             [nameData]: {
                ...prevState[nameData],
                MainAddress: {
                  ...prevState[nameData].MainAddress,
                  mainApartment: direccion.nombre
                }
              }
            }))
            break;
          default:
            console.log('El tipo de dirección no coincide');
          }
      })
    })
    .catch(function (error) { // handle error
      if(error.message === 'NoUser'){
        console.log('No User Logged In'); console.log(error);
        return error.message
      }
      else{
        console.log('axios'); console.log(error);
      }
    })
    .finally(()=>{
      if(logged === false) {noRender=false; this.isLoggedIn(); console.log('No ha iniciado sesión'); }
      else (console.log('Inicio de sesión exitoso'))
    })
  }
  isLoggedIn() { this.setState({isLoggedIn:false}) }

  render() {
    if (this.state.isLoggedIn && noRender === true){
      return (<div>
        <header>
          <div className="container">
            <Banner active = 'profile'/>
          </div>
        </header>
        <br/>
        <div className="container">
  				{
            this.state.personal
            ? <PersonalAccount userData = {this.state.userData} PersonalData = {this.state.PersonalData}/>
  					: this.state.naturalClient
              ? <NaturalClient userData = {this.state.userData} NaturalData = {this.state.NaturalData}/>
              : <CompanyClient userData = {this.state.userData} CompanyData = {this.state.CompanyData}/>
  				}
        </div>
        <br/>
        <div className="container-fluid">
          <Footer/>
        </div>
      </div>);
    }
    else if (noRender === false){
      setTimeout(function(){
        window.location = "/iniciosesion"
      }, 2000);
      return(
        <div> <h2> La página no existe, será redirigido en breve </h2> </div>
      )
    }
    else{
      return(<div></div>)
    }
  }
}
export default MiCuenta
