import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import product2 from '../images/product2.png'
import product3 from '../images/product2.png'
import product4 from '../images/product2.png'
import product5 from '../images/product2.png'
import product6 from '../images/product2.png'
import product7 from '../images/product2.png'


import MiCarrito from '../components/MiCarrito';
import ProductCart from '../components/ProductCart';

axios.defaults.withCredentials = true;

export default class MiCarritoContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <MiCarrito/>
            <hr></hr>
            <ProductCart  product2={product2} product3={product3} product4={product4} product5={product5} product6={product6} product7={product7}/>
          </div>
        </section >);
    }

  }
