import React, {Component} from 'react';

import NaturalClient from '../components/NaturalClient'
import CompanyClient from '../components/CompanyClient'
import client1 from '../images/client1.png'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import axios from 'axios'

function validarTelefonoContacto(numero, rif){
  return axios.post('/read/telefonoContactoCliente', {
          telefono: numero,
          foreignKey: rif
        }).then((response)=> {
          return response.data[0].id
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
        username: "", password: "", email: "", webPage: "", capital: "",
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
				this.setState({NaturalData: {
					rif: data.rif, ci: data.natural_ci, name: data.natural_nombre, lastName: data.natural_apellido, gender: data.natural_genero, bornDate: data.natural_fecha_nacimiento}, isLoggedIn:true})
			}
			else{
				this.setState({CompanyData: {
					rif: data.rif, comercialDesignation: data.juridico_denominacion_comercial, businessName: data.juridico_razon_social, webPage: data.juridico_pagina_web, capital: data.juridico_capital}, isLoggedIn:true, naturalClient: false})
          console.log(this.state.CompanyData)
			}
      return data
		})
    .then((res)=>{
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
    })
    .catch(function (error) { // handle error
      console.log('axios'); console.log(error);
    });
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
