import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';



import FichaProveedor from '../components/FichaProveedor';

axios.defaults.withCredentials = true;

export default class FichaProveedorContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <FichaProveedor/>
            <hr></hr>
          </div>
        </section >);
    }

  }
