import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import ReactDOM from 'react-dom'

import Button from '../components/Button'
import Number from '../components/Number'

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
      productLine:{ cerveza1:{nombre: "", tipo:"", descripcion: "", precio: "", cantidad:"", precioTotal:""}},
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
    precioTotal= parseFloat(ventanaCerveza.precio_unitario) * parseInt(ventanaCerveza.cantidadActual)
    await this.setState(prevState => ({
      productLine: {
        ...prevState.productLine,
        [cerveza]: {
          ...prevState[cerveza],
          nombre: ventanaCerveza.nombre, tipo: ventanaCerveza.tipo,
          descripcion: ventanaCerveza.descripcion, precio: ventanaCerveza.precio_unitario,
          cantidad: ventanaCerveza.cantidadActual, precioTotal: [precioTotal]},
      }
    }))
    let cantidadHTML = document.getElementById('quantity'),
    quantValue = cantidadHTML.value
    await cantidadHTML.setAttribute("max", this.state.ventanaCerveza.cantidadDisp)
    await this.setState({
      ventanaCerveza: {nombre: "", descripcion: "", precio_unitario:"", tipo:"", cantidadActual:"", cantidadDisp:""}
    })
    let elementHTML = document.getElementById('beerWindow'),
    carritoHTML = document.getElementById('ProductLineCarrito')
    console.log(quantValue, cantidadHTML.max)
    if((quantValue >= parseInt(cantidadHTML.min))&&(quantValue <= parseInt(cantidadHTML.max))){
      ReactDOM.render(crearVentanaCerveza(this.state.ventanaCerveza), elementHTML);
      ReactDOM.render(crearCarrito(this.state.productLine, this.handleSubmit), carritoHTML);
    }
    else alert('Cantidad Inválida')
  }
  handleSubmit(e){
    e.preventDefault()
    if(this.state.isLoggedIn)
      alert("Enviado")
    else
      alert("Debe iniciar sesión antes de comprar")
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
