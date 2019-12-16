import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';



import ModificarProveedor from '../components/ModificarProveedor';

axios.defaults.withCredentials = true;

export default class ModificarProveedorContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <ModificarProveedor/>
            <hr></hr>
          </div>
        </section >);
    }

  }