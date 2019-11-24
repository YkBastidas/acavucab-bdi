import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import './styles/Main.css'

import Home from './pages/Home'
import TipoCervezas from './pages/TipoCervezas'
import Eventos from './pages/Eventos'
import Tienda from './pages/Tienda'
import InicioSesion from './pages/InicioSesion'
import Registro from './pages/Registro'
import Carrito from './pages/Carrito'
import Contacto from './pages/Contacto'



class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/tipocerveza/" component={TipoCervezas}/>
            <Route path="/eventos/" component={Eventos}/>
            <Route path="/tienda/" component={Tienda}/>
            <Route path="/iniciosesion/" component={InicioSesion}/>
            <Route path="/registro/" component={Registro}/>
            <Route path="/carrito/" component={Carrito}/>
            <Route path="/contacto/" component={Contacto}/>
          </div>
        </Router>
    );
  }
}

export default App;
