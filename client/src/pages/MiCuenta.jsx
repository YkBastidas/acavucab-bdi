import React, {Component} from 'react';

import NaturalClient from '../components/NaturalClient'
import CompanyClient from '../components/CompanyClient'
import client1 from '../images/client1.png'
import Banner from '../components/Banner.jsx'
import Footer from '../components/Footer.jsx'
import axios from 'axios'

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
			console.log(res.data)
			let data = res.data
			if(data.tipo === 'Natural'){
				this.setState({NaturalData: {
					rif: data.rif, ci: data.natural_ci, name: data.natural_nombre, lastName: data.natural_apellido, gender: data.natural_genero, bornDate: data.natural_fecha_nacimiento}, isLoggedIn:true})
			}
			else{
				this.setState({CompanyData: {
					rif: data.rif, comercialDesignation: data.juridico_denominacion_comercial, businessName: data.juridico_razon_social, webPage: data.juridico_pagina_web, capital: data.juridico_capital}, isLoggedIn:true, naturalClient: false})
			}
			return "ok"
		})
    .catch(function (error) { // handle error
      console.log('axios'); console.log(error);
    });
  }
  isLoggedIn() { this.setState({isLoggedIn:false}) }
  render() {
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
					? <NaturalClient userData = {this.state.userData} clientData = {this.state.NaturalData} image={client1}/>
					: <CompanyClient userData = {this.state.userData} clientData = {this.state.CompanyData} image={client1}/>
				}
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default MiCuenta
