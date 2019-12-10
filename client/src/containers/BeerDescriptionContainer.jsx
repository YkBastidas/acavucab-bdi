import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import product1 from "../images/product1.png"
import product2 from "../images/product2.png"
import product3 from "../images/product3.png"
import product4 from "../images/product4.png"
import product5 from "../images/product5.png"
import product6 from "../images/product6.png"
import product7 from "../images/product7.png"
import product8 from "../images/product8.png"



import BeerDescription from "../components/BeerDescription"
import HomeBeerDescription from "../components/HomeBeerDescription"
import ProductLineBeer from '../components/ProductLineBeer';


axios.defaults.withCredentials = true;

export default class BeerDescriptionContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          
        <div className="col-sm-8 col">
          <BeerDescription title="Eventos" product1={product1} product2={product2} product3={product3} product4={product4} product5={product5}/>
        </div>
        <div className="col-sm-4 col align-self-center">
          <HomeBeerDescription/>
        </div>
        <div className="col-sm-12 col align-self-center">
          <hr></hr>
            <ProductLineBeer product6={product6} product7={product7} product8={product8}/>
            <hr></hr>
          </div>
        
        </section >);
    }

  }
