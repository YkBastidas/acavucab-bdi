import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import './styles/Main.css'

import Home from './pages/Home'
import TipoCervezas from './pages/TipoCervezas'
import Eventos from './pages/Eventos'
import Tienda from './pages/Tienda'
import Personal from './pages/Personal'
import InicioSesion from './pages/InicioSesion'
import Registro from './pages/Registro'
import Contacto from './pages/Contacto'
import Proveedores from './pages/Proveedores'
import DescripcionCerveza from './pages/DescripcionCerveza'
import Horarios from './pages/Horarios'
import Micuenta from './pages/MiCuenta'
import DescripcionEvento from './pages/DescripcionEvento'
import FichaProveedor from './pages/FichaProveedor'
import EliminarProveedor from './pages/EliminarProveedor'
import ModificarProveedor from './pages/ModificarProveedor'
import Contrasena from './pages/Contrasena'
import CodigoConfirmacion from './pages/CodigoConfirmacion'
import AgregarCerveza from './pages/AgregarCerveza'
import ModificarCerveza from './pages/ModificarCerveza'
import AgregarEvento from './pages/AgregarEvento'
import ModificarEvento from './pages/ModificarEvento'
import Presupuesto from './pages/Presupuesto'
import Pedido from './pages/Pedidos'
import PedidoCurso from './pages/PedidosCurso'
import PedidoTiempo from './pages/PedidosTiempo'
import PedidoCancelado from './pages/PedidosCancelado'
import ListaDeseo from './pages/ListaDeseo'
import Seguridad from './pages/Seguridad'
import NombreSeguridad from './pages/NombreSeguridad'
import CorreoSeguridad from './pages/CorreoSeguridad'
import NumeroSeguridad from './pages/NumeroSeguridad'
import ContraseñaSeguridad from './pages/ContraseñaSeguridad'
import Direccion from './pages/Direccion'
import AgregarDireccion from './pages/AgregarDireccion'
import EditarDireccion from './pages/EditarDireccion'
import EliminarDireccion from './pages/EliminarDireccion'
import MiCarrito from './pages/MiCarrito'
import MetodoPago from './pages/MetodoPago'
import MetodoPagoTienda from './pages/MetodoPagoTienda'


class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/tipocerveza/" component={TipoCervezas}/>
            <Route path="/eventos/" component={Eventos}/>
            <Route path="/agregarevento/" component={AgregarEvento}/>
            <Route path="/modificarevento/" component={ModificarEvento}/>
            <Route path="/tienda/" component={Tienda}/>
            <Route path="/personal/" component={Personal}/>
            <Route path="/iniciosesion/" component={InicioSesion}/>
            <Route path="/registro/" component={Registro}/>
            <Route path="/contacto/" component={Contacto}/>
            <Route path="/proveedores/" component={Proveedores}/>
            <Route path="/descripcioncerveza/" component={DescripcionCerveza}/>
            <Route path="/horarios/" component={Horarios}/>
            <Route path="/micuenta/" component={Micuenta}/>
            <Route path="/descripcionevento/" component={DescripcionEvento}/>
            <Route path="/fichaproveedor/" component={FichaProveedor}/>
            <Route path="/eliminarproveedor/" component={EliminarProveedor}/>
            <Route path="/modificarproveedor/" component={ModificarProveedor}/>
            <Route path="/contrasena/" component={Contrasena}/>
            <Route path="/codigoconfirmacion/" component={CodigoConfirmacion}/>
            <Route path="/agregarcerveza/" component={AgregarCerveza}/>
            <Route path="/modificarcerveza/" component={ModificarCerveza}/>
            <Route path="/presupuesto/" component={Presupuesto}/>
            <Route path="/listadeseo/" component={ListaDeseo}/>
            <Route path="/pedidoscurso/" component={PedidoCurso}/>
            <Route path="/pedidoscancelados/" component={PedidoCancelado}/>
            <Route path="/pedidostiempo/" component={PedidoTiempo}/>
            <Route path="/pedidos/" component={Pedido}/>
            <Route path="/seguridad/" component={Seguridad}/>
            <Route path="/nombreseguridad/" component={NombreSeguridad}/>
            <Route path="/correoseguridad/" component={CorreoSeguridad}/>
            <Route path="/numeroseguridad/" component={NumeroSeguridad}/>
            <Route path="/contraseñaseguridad/" component={ContraseñaSeguridad}/>
            <Route path="/direccion/" component={Direccion}/>
            <Route path="/agregardireccion/" component={AgregarDireccion}/>
            <Route path="/editardireccion/" component={EditarDireccion}/>
            <Route path="/eliminardireccion/" component={EliminarDireccion}/>
            <Route path="/carrito/" component={MiCarrito}/>
            <Route path="/metodopago/" component={MetodoPago}/>
            <Route path="/metodopagotienda/" component={MetodoPagoTienda}/>
          </div>
        </Router>
    );
  }
}

export default App;
