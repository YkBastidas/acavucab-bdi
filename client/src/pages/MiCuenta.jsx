import React, {Component} from 'react';

import NaturalClient from '../components/NaturalClient'
import CompanyClient from '../components/CompanyClient'
import client1 from '../images/client1.png'
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
function recursiveDirecciones(foreignCliente){
  return axios.get('/read/direccionPorClave',{params:{clave: foreignCliente}})
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

class MiCuenta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {id: '', nombre: '', contrasena: ''},
      NaturalData: {
        rif: "", ci: "", name: "", lastName: "", gender: "",
        email: "", bornDate: "",
        HomeAddress: {state:"", city:"", municipality:"", parish:"", homeAvenue:"",
                      homeBuilding:"", homeFloor:"", homeOffice:"", homeApartment:""},
        telephoneNumber: "", cellphoneNumber: "", officeNumber: ""
      },
      CompanyData: {
        rif: "", comercialDesignation: "", businessName: "",
        username: "", password: "", Emails: {email1:""}, webPage: "", capital: "",
        telephone1: "", telephone2: "", telephone3: "",  ContactPerson:{ nameContact: "", numberContact: "" },
        FiscalAddress: {state:"", city:"", municipality:"", parish:"", fiscalAvenue:"",
                        fiscalBuilding:"", fiscalFloor:"", fiscalOffice:"", fiscalApartment:""},
        MainAddress: {state:"", city:"", municipality:"", parish:"", mainAvenue:"",
                        mainBuilding:"", mainFloor:"", mainOffice:"", mainApartment:""}
      },
      isLoggedIn:false,
			naturalClient: true,
    }
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  componentWillMount() {
    axios.get('/read/userInfo',{withCredentials: true
    })
    .then((res)=> { // handle success
      console.log('Callback Axios con Data del Usuario')
      console.log(res.data)
      this.setState({userData: res.data, isLoggedIn:true})
      return this.state.userData.id
    })
    .then((res)=>{
    	return axios.get('/read/clientePorUserId',{
        params: {
          fk_usuario : res
        }})
			.then((res)=>{return res})
			.catch(function (error){//handle error
				console.log('axios'); console.log(error)
			})
    })
		.then((res)=>{
			let data = res.data[0]
			if(data.tipo === 'Natural'){
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
      let arrayNumbers = await foundTelefonos(res.rif)
      for (let index = 0; index < arrayNumbers.length; index++) {
        let name = 'telephone'+[index+1], number = arrayNumbers[index].numero
        console.log(name, number)
        this.setState(prevState => ({
          CompanyData: {
            ...prevState.CompanyData,
            [name] : number
          }
        }))
      }
      let arrayEmails = await foundEmails(res.rif)
      for (let index = 0; index < arrayEmails.length; index++) {
        let name = 'email'+[index+1], direccion = arrayEmails[index].direccion
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
      if (res.tipo === 'Natural'){
        return "codigo"
      }
      else{
        return recursiveDirecciones(res.fk_direccion_fisica)
      }
    })
    .then((res)=>{
      let direccionPrincipal = res
      direccionPrincipal.forEach((direccion, index)=>{
        switch (direccion.tipo) {
          case 'Estado':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  state: direccion.nombre
                }
              }
            }))
            break;
          case 'Ciudad':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  city: direccion.nombre
                }
              }
            }))
            break;
          case 'Municipio':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  municipality: direccion.nombre
                }
              }
            }))
            break;
          case 'Parroquia':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  parish: direccion.nombre
                }
              }
            }))
            break;
          case 'Avenida':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  mainAvenue: direccion.nombre
                }
              }
            }))
            break;
          case 'Edificio':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  mainBuilding: direccion.nombre
                }
              }
            }))
            break;
          case 'Piso':
          this.setState(prevState => ({
            CompanyData: {
              ...prevState.CompanyData,
              MainAddress: {
                ...prevState.CompanyData.MainAddress,
                mainFloor: direccion.nombre
              }
            }
          }))
            break;
          case 'Oficina':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  mainOffice: direccion.nombre
                }
              }
            }))
            break;
          case 'Apartamento':
            this.setState(prevState => ({
              CompanyData: {
                ...prevState.CompanyData,
                MainAddress: {
                  ...prevState.CompanyData.MainAddress,
                  mainApartment: direccion.nombre
                }
              }
            }))
            break;
          default:
            console.log('El tipo de dirección no coincide');
          }
      })
      console.log(this.state.CompanyData)
    })
    .catch(function (error) { // handle error
      console.log('axios'); console.log(error);
    })
  }
  isLoggedIn() { this.setState({isLoggedIn:false}) }

  render() {
    if (this.state.isLoggedIn){
      return (<div>
        <header>
          <div className="container">
            <Banner/>
          </div>
        </header>
        <br/>
        <div className="container">
  				{
  					this.state.naturalClient
  					? <NaturalClient userData = {this.state.userData} NaturalData = {this.state.NaturalData} image={client1}/>
            : <CompanyClient userData = {this.state.userData} CompanyData = {this.state.CompanyData} image={client1}/>
  				}
        </div>
        <br/>
        <div className="container-fluid">
          <Footer/>
        </div>
      </div>);
    }
    else {
      return (
        <div></div>
      );
    }

  }
}

export default MiCuenta
