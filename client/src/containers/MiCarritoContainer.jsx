import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import ReactDOM from 'react-dom'

import Button from '../components/Button'
import Number from '../components/Number'
import { compare } from 'bcryptjs';

axios.defaults.withCredentials = true;
var i=0, logged = false
function crearVentanaCerveza(Cerveza){
  return(
      <div className="col-12 text-center text-light">
        <div className = "row bg-dark">
          <div className="col-2 my-auto"> <h4> Nombre </h4></div>
          <div className="col-4 my-auto"> <h4>Descripción</h4></div>
          <div className="col-2 my-auto"> <h4>Precio Unitario</h4></div>
          <div className="col-2 my-auto"> <h4>Tipo</h4></div>
          <div className="col-2 my-auto"> <h4>Cant. Disponible</h4></div>
        </div>
        <div className = "row bg-secondary">
          <div className="col-2 my-auto"> {Cerveza.nombre}</div>
          <div className="col-4 my-auto"> {Cerveza.descripcion}</div>
          <div className="col-2 my-auto"> {Cerveza.precio_unitario}</div>
          <div className="col-2 my-auto"> {Cerveza.tipo}</div>
          <div className="col-2 my-auto"> {Cerveza.cantidadDisp}</div>
        </div>
      </div>
  )
}

function crearCompra(rif, tienda_fisica, tienda_virtual, usuario) {
  return axios.post('/create/compra', {
    total_pago: 0,
    fecha_compra: null, //EN LOS QUERIES EL HACE CURRENT DATE
    fk_cliente: rif,
    fk_usuario: usuario,
    fk_tienda_fisica: tienda_fisica,
    fk_tienda_virtual: tienda_virtual
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function crearDetalle(compra, cerveza, qty) {
  return axios.post('/create/detalleCompra', {
    cantidad: qty,
    fk_compra : compra,
    fk_cerveza: cerveza
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function getClientePK(usuario) {
  return axios.get('/read/clientePorUserId', {
    fk_usuario: usuario
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function postStatusCompra(compra) {
  return axios.get('/create/statusCompra', {
    fk_status: 1,
    fk_compra: compra,
    fk_departamento: null
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function getTotalFactura(factura){
  return axios.get('/read/totalFacturaCompra', {
    fk_venta: factura
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}
function putTotalFactura(factura,montototal){
  return axios.get('/update/totalFactura', {
    fk_venta: null,
    fk_compra: factura,
    total: montototal,
    tipo: 'Compra'
  }).then((response) => {
    return response.data[0].id
  }).catch(function(error) {
    console.log('AXIOS error: ' + error);
    return 'error'
  })
}

async function maxQuantity(idCerveza){
  return await axios.get('/read/cantidadPorIdCerveza', {
    params: {
      fk_cerveza : idCerveza
    }})
  .then((res)=>{
    console.log(res.data[0].cant_disponible)
    return res.data[0].cant_disponible
  })
  .catch(function (error) {// handle error
    console.log('axios');
    console.log(error);
  })
}

function crearCarrito(Cervezas, handleSubmit){
  let dark = 0
  return(
    <section>
      {Object.values(Cervezas).map((cerveza) =>
        {
          dark = dark + 1
          return (
            dark%2 !== 0
            ? <div className ="row text-center bg-dark text-light">
                <div className ="col-3 my-auto"> {cerveza.nombre} </div>
                <div className ="col-1 my-auto"> {cerveza.tipo} </div>
                <div className ="col-3 my-auto"> {cerveza.descripcion} </div>
                <div className ="col-2 my-auto"> {cerveza.precio}Bs.S </div>
                <div className ="col-1 my-auto"> {cerveza.cantidad} </div>
                <div className ="col-2 my-auto"> {cerveza.precioTotal}Bs.S </div>
              </div>
            : <div className ="row text-center bg-secondary text-light">
              <div className ="col-3 my-auto"> {cerveza.nombre} </div>
              <div className ="col-1 my-auto"> {cerveza.tipo} </div>
              <div className ="col-3 my-auto"> {cerveza.descripcion} </div>
              <div className ="col-2 my-auto"> {cerveza.precio}Bs.S </div>
              <div className ="col-1 my-auto"> {cerveza.cantidad} </div>
              <div className ="col-2 my-auto"> {cerveza.precioTotal}Bs.S </div>
            </div>
          )})}
          <Button action={handleSubmit} type={"primary"} title={"Comprar"}
            buttonStyle={{ width: "100%" }}/>
    </section>

  )
}

export default class MiCarritoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {id: '', nombre: '', contrasena: '', fk_rol:''},
      cerveza: { nombre: "", descripcion: "", precio_unitario:"", fk_ale:"", fk_lager:""},
      productLine:{ cerveza1:{nombre: "", tipo:"", descripcion: "", precio: "", cantidad:"", cantidadEnCarrito: 0, precioTotal:""}},
      ventanaCerveza: {nombre: "", descripcion: "", precio_unitario:"", tipo:"", cantidadActual:"", cantidadDisp:""},
      totalCompra: "", isLoggedIn: "",
    }
    this.handleBeerDropdown = this.handleBeerDropdown.bind(this)
    this.handleQuantity = this.handleQuantity.bind(this)
    this.addBeer = this.addBeer.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    axios.get('/read/cervezas')
    .then((res)=> {
      console.log(res)
      this.setState({cerveza: res.data})
    })
    .catch(function (error) {// handle error
      console.log('axios');
      console.log(error);
    });
    axios.get('/read/userInfo',{withCredentials: true})
    .then((res)=> { // handle success
      console.log(res)
      if(res.data==='errorNoUser'){
        throw new Error('NoUser');
      }
      logged = true
      console.log('Callback Axios con Data del Usuario')
      this.setState({userData: res.data, isLoggedIn:true})
    })
    .catch(function (error){
      console.log('axios'); console.log(error);
    })
  }
  async handleBeerDropdown(e){
    let value = e.target.value;
    await this.setState(prevState => ({
      ventanaCerveza: {
        ...prevState.ventanaCerveza,
        nombre: value
      }
    }), () => console.log(this.state.ventanaCerveza));
    let dropdownIndex = document.getElementById('beerDropdown').selectedIndex,
    allCerveza = this.state.cerveza
    await this.setState(prevState => ({
      ventanaCerveza: {
        ...prevState.ventanaCerveza,
        descripcion : allCerveza[dropdownIndex-1].descripcion,
        precio_unitario : allCerveza[dropdownIndex-1].precio_unitario,
        tipo: allCerveza[dropdownIndex-1].fk_ale ? "Ale": "Lager"
      }
    }));
    let max = await maxQuantity(document.getElementById('beerDropdown').selectedIndex)
    this.setState(prevState => ({
      ventanaCerveza: {
        ...prevState.ventanaCerveza,
        cantidadDisp: max
      }
    }), () => console.log(this.state.ventanaCerveza));
    let elementHTML = document.getElementById('beerWindow')
    ReactDOM.render(crearVentanaCerveza(this.state.ventanaCerveza), elementHTML);
  }

  handleQuantity(e){
    let value = e.target.value;
    if(this.state.ventanaCerveza.nombre){
      this.setState(prevState => ({
        ventanaCerveza: {
          ...prevState.ventanaCerveza,
          cantidadActual: value
        }
      }), () => console.log(this.state.ventanaCerveza));
    }
  }

  async addBeer(e){
    e.preventDefault();
    i = i+1
    let cerveza = 'cerveza'+i, ventanaCerveza =  this.state.ventanaCerveza,
    precioTotal= parseFloat(ventanaCerveza.precio_unitario) * parseInt(ventanaCerveza.cantidadActual), cantidadTotal,
    previousState = this.state.productLine
    await this.setState(prevState => ({
      productLine: {
        ...prevState.productLine,
        [cerveza]: {
          ...prevState[cerveza],
          nombre: ventanaCerveza.nombre, tipo: ventanaCerveza.tipo,
          descripcion: ventanaCerveza.descripcion, precio: ventanaCerveza.precio_unitario,
          cantidad: ventanaCerveza.cantidadActual,  precioTotal: precioTotal, cantidadEnCarrito: ""},
      }
    }))
    let cantidadHTML = document.getElementById('quantity'),
    quantValue = cantidadHTML.value
    await cantidadHTML.setAttribute("max", this.state.ventanaCerveza.cantidadDisp)
    let elementHTML = document.getElementById('beerWindow'),
    carritoHTML = document.getElementById('ProductLineCarrito')
    let Carrito = Object.values(this.state.productLine), x=0, cervezaEnCarrito = this.state.productLine[cerveza], cantidadEnCarrito = 0
    while(x < Carrito.length){
      if(Carrito[x].nombre === cervezaEnCarrito.nombre) cantidadEnCarrito = parseInt(cantidadEnCarrito) + parseInt(Carrito[x].cantidad)
      x++
    }
    cantidadEnCarrito = cantidadEnCarrito - quantValue
    cantidadTotal = parseInt(quantValue) + parseInt(cantidadEnCarrito)
    console.log(cantidadEnCarrito, cantidadTotal)
    if((cantidadTotal  >= parseInt(cantidadHTML.min))&&(cantidadTotal  <= parseInt(cantidadHTML.max))){
      ReactDOM.render(crearVentanaCerveza(this.state.ventanaCerveza), elementHTML);
      ReactDOM.render(crearCarrito(this.state.productLine, this.handleSubmit), carritoHTML);
      console.log(this.state.productLine)
      await this.setState(prevState => ({
        productLine: {
          ...prevState.productLine,
          [cerveza]: {
            ...prevState[cerveza],
            nombre: ventanaCerveza.nombre, tipo: ventanaCerveza.tipo,
            descripcion: ventanaCerveza.descripcion, precio: ventanaCerveza.precio_unitario,
            cantidad: ventanaCerveza.cantidadActual,  precioTotal: precioTotal, cantidadEnCarrito: cantidadTotal},
        }
      }))
      await this.setState({
        ventanaCerveza: {nombre: "", descripcion: "", precio_unitario:"", tipo:"", cantidadActual:"", cantidadDisp:""}
      })
      console.log(this.state.productLine)
    }
    else {alert('Cantidad Inválida'); this.setState({productLine : previousState})}
  }
  async handleSubmit(e){
    let idCompra, totalfactura, userData = this.state.userData
    e.preventDefault()
    if(this.state.isLoggedIn){
      if(userData.fk_rol===10){
        let Carrito = Object.values(this.state.productLine), x=0, montoTotal = 0, cervezaEnCarrito, j = 1, cerveza
        while(x < Carrito.length){
          cerveza = "cerveza"+j
          cervezaEnCarrito = this.state.productLine[cerveza]
          if(Carrito[x].nombre === cervezaEnCarrito.nombre) montoTotal = parseInt(montoTotal) + parseInt(Carrito[x].precioTotal)
          x++; j++
        }
        alert(montoTotal)
        /*
        idCompra = await crearCompra(null,1,null,userData.id);
        postStatusCompra(idCompra);
        //AQUI IRIA EL LOOP PARA DETALLE
        totalfactura= await getTotalFactura(idCompra);
        putTotalFactura(idCompra,totalfactura);
         */

      }
      else if (userData.fk_rol===8){
        /*
        const fk_usuario= getClientePK(userData.id);
        idCompra = await crearCompra(fk_usuario,null,2,null);
        postStatusCompra(idCompra);
        //AQUI IRIA EL LOOP PARA DETALLE
        totalfactura= await getTotalFactura(idCompra);
        putTotalFactura(idCompra,totalfactura);
         */
      }
    }
    else{
      alert("Debe iniciar sesión antes de comprar")
    }
  }

  render() {
    this.OptionCervezas = Object.values(this.state.cerveza).map((cerveza, key) =>
          <option key={cerveza.clave} value={cerveza.nombre}> {cerveza.nombre} </option>);
    return (<section className=" row align-items-center">
      <div className="col-sm-12 col align-self-center">
        <div id="ProductLineCarrito"> </div>
        <hr/>
      </div>
      <div className="col-sm-12 col align-self-center margin-top">
        <form onSubmit={this.addBeer} className="needs-validation formulary">
          <h4 className="text-center"> Seleccione la cerveza a comprar </h4>
          <div className="form-row">
            <div className="col-4">
              <label htmlFor="beerDropdown"> Cerveza </label>
              <select className="custom-select" id="beerDropdown" name="beer" required
              onChange={this.handleBeerDropdown} value={this.state.ventanaCerveza.nombre}>
                <option value="" >Seleccione...</option>
                  {this.OptionCervezas}
              </select>
            </div>
            <div className="col-2">
              <Number name="quantity" inputtype="number" min="1" title = "Cantidad" max = "" value={this.state.ventanaCerveza.cantidadActual} handlerchange={this.handleQuantity}/>
            </div>
            <div className="col-2">
              <Button action={this.addBeer} type={"primary"} title={"Añadir al Carrito"}
                buttonStyle={{ width: "100%", marginTop: "2em" }}/>
            </div>
          </div>
        </form>
      </div>
      <div id="beerWindow" className="col-sm-12 col align-self-center margin-top">

      </div>
    </section >);
  }

}
