import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
  }
  render() {
    return (<nav>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className={
            this.state.active === "home" ? "nav-link active" : "nav-link"
          }
             to="/">
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className={
              this.state.active === "beertype" ? "nav-link active" : "nav-link"
            }
            to="/tipocerveza/">
            Tipo Cervezas
          </Link>
        </li>
        <li className="nav-item">
          <Link className={
              this.state.active === "events" ? "nav-link active" : "nav-link"
            } to="/eventos/">
            Eventos
          </Link>
        </li>
        <li className="nav-item">

        <Link className={
            this.state.active === "shop" ? "nav-link active" : "nav-link"
          } to="/tienda/">
          Tienda
        </Link>
        </li>
      </ul>
    </nav>)
  }
}

export default LeftMenu
