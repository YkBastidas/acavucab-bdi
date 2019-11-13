import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

class RightMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
    // this.logOut=this.logOut.bind(this);
  }
/* LOGOUT FUNCTION
  logOut () {
    console.log('Cerrando sesion')
    axios.get('/auth/logout',{withCredentials: true
    })
  .then((res)=> {
    // handle success
   // this.props.history.push('/perfil');
   console.log('Sesion cerrada');
   this.props.isLoggedIn();

  })
  .catch(function (error) {
    // handle error
    console.log('axios');
    console.log(error);
  })

  }
  */
  render() {
    return (<nav>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className={
            this.state.active === "login" ? "nav-link active" : "nav-link"
          }
             to="/iniciosesion">
            Iniciar Sesion
          </Link>
        </li>
        <li className="nav-item">
          <Link className={
              this.state.active === "registry" ? "nav-link active" : "nav-link"
            }
            to="/registro/">
            Registro / Afiliacion
          </Link>
        </li>
        <li className="nav-item">
          <Link className={
              this.state.active === "cart" ? "nav-link active" : "nav-link"
            } to="/carrito/">
            Mi Carrito
          </Link>
        </li>
        <li className="nav-item">

        <Link className={
            this.state.active === "contact" ? "nav-link active" : "nav-link"
          } to="/contacto/">
          Contacto
        </Link>

        {/*
        <Link className="nav-link" to="/" onClick={()=> this.logOut()}>
            Cerrar Sesión
        </Link>
        */}
        </li>
      </ul>
    </nav>)
  }
}

export default RightMenu
