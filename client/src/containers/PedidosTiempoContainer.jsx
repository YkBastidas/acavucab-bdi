import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import product5 from "../images/product5.png"
import product6 from "../images/product6.png"
import product7 from "../images/product7.png"


import ProductOrder from '../components/ProductOrder';
import PedidosTiempo from '../components/PedidosTiempo';

axios.defaults.withCredentials = true;

export default class PedidosTiempoContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <PedidosTiempo/>
            <hr></hr>
          </div>
          <div className="col-sm-12 col">
          <ProductOrder product5={product5} product6={product6} product7={product7}/>
        </div>
        </section >);
    }

  }