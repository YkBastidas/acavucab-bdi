import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

function recursiveDireccion(foreign) {
    return axios.get('/read/direccionPorClave', {
      params: {
        clave : foreign
      }}
    )
    .then((response) => {
      let joinArray
      console.log('Callback Axios: Obtener dirección completa');
      if(response.data[0].fk_direccion != null){
        joinArray = response.data
        return recursiveDireccion(parseInt(joinArray[0].fk_direccion))
        .then((array1)=>{
          let array2 = joinArray.concat(array1)
          return array2
        })
      }
      else{
        return response.data
      }
    })
    .catch(function (error) {
  // handle error
    return console.log('AXIOS error: '+ error);
  });
}

function setAddress(direccion, interval){
  let value = ""
  if(direccion[0].clave!==""){
    direccion.forEach(element => {
      value = value + element.nombre + ", "
    })
    clearInterval(interval)
    return " " + value.substring(0, value.length - 2)
  } else {
    return("")
  }
}

class HomeShop extends Component{

  constructor(props) {
      super(props);
      this.state = {
        title: props.titleShop,
        image: props.imageShop,
        data: {
          clave: "",
          tipo: "",
          fisica_nombre: "",
          fk_fisica_direccion: ""
        },
        direccion: {
          0:{clave: "",
          tipo: "",
          nombre: "",
          fk_direccion:""},
          1:{}
        }
      }

    }
  async componentDidMount() {
    await axios.get('/read/tiendaFisica')
      .then((res)=> {
        // handle success
        console.log('Callback Axios: Obtener data de la tienda física');
        console.log(res.data);
        this.setState({data: res.data});
        let foreign = this.state.data[0].fk_fisica_direccion
        recursiveDireccion(foreign)
        .then((fullAddress)=>{
          this.interval = setInterval(() => {
            this.setState({direccion: fullAddress})}, 1000);
          return fullAddress
        })
      })
      .catch(function (error) {
    // handle error
      return console.log('AXIOS error: '+ error);
    });
    await axios.get('/read/clientePorRif', {
      params: {
        clave : '1'
      }})
    .then((res)=>{
      if(res.data.length === 0){
        console.log ("Nha")
        console.log(res.data)
      }
      else{
        console.log(res.data)
        console.log(res.data)
      }

    })
  }
  componentWillUnmount() {
  clearInterval(this.interval);
}
  render(){
    return(
      <section className="row margin-bottom">
        <div className="col-12 centered">
          <h4>
            {this.state.title}
          </h4>
        </div>
        <div className="col-12">
            <img src={this.state.image} alt="Tienda" style={{width: "inherit"}}/>
        </div>
        <div className=" col-12 align-self-center">
            <span> <i className="fi-marker"> Ubicación:
              {setAddress(this.state.direccion, this.interval)} </i></span> <br/>
            <span><i className="fi-address-book"> Contacto:</i></span> <br/>
            <span><i className="fi-torso-business"> Empleados:</i></span> <br/>
            <span><i className="fi-eye"> Acerca de:</i></span>
        </div>
      </section>
    )
  }
}


export default HomeShop
