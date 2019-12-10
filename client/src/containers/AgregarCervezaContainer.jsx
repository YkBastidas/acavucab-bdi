import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import product9 from '../images/product9.png'

import AgregarCerveza from "../components/AgregarCerveza"



axios.defaults.withCredentials = true;

export default class AgregarCervezaContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <AgregarCerveza product9={product9}/>
          </div>
          
        </section >);
    }

  }
