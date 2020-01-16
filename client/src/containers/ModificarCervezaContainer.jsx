import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import product6 from "../images/product6.png"
import product7 from "../images/product7.png"
import product8 from "../images/product8.png"
import product9 from '../images/product9.png'

import ModificarCerveza from "../components/ModificarCerveza"
import ProductLineBeer from "../components/ProductLineBeer";


axios.defaults.withCredentials = true;

export default class ModificarCervezaContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <ModificarCerveza product9={product9}/>
          </div>
          <div className="col-sm-12 col align-self-center">
          <hr></hr>
            <ProductLineBeer product6={product6} product7={product7} product8={product8}/>
            <hr></hr>
          </div>
        </section >);
    }

  }
