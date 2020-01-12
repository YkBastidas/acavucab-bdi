import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

class RightMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
  }
  logOut(e) {
    e.preventDefault()
    console.log('Cerrando sesion')
    axios.get('/auth/logout',{withCredentials: true
    })
    .then((res)=> {
      console.log('Sesion cerrada');
      window.location = "/iniciosesion"
    })
    .catch(function (error) {
      // handle error
      console.log('axios');
      console.log(error);
    })
  }

  render() {
    return (<nav>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          {
            this.props.logged
            ?<Link className={this.state.active === "profile" ? "nav-link active" : "nav-link"}
              to="/micuenta"> Mi Cuenta </Link>
            :<Link className={this.state.active === "signin" ? "nav-link active" : "nav-link"}
              to="/iniciosesion"> Iniciar Sesion </Link>
          }
        </li>
        <li className="nav-item">
          {
            this.props.logged
            ?<Link className="nav-link" to="/iniciosesion" onClick={this.logOut}> Cerrar Sesión </Link>
            : <Link className={this.state.active === "signup" ? "nav-link active" : "nav-link"}
                to="/registro/"> Registro / Afiliacion </Link>
          }


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
        </li>
      </ul>
    </nav>)
  }
}

export default RightMenu
