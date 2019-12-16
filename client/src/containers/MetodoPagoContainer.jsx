import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import product10 from '../images/product10.png'
import product11 from '../images/product11.png'


import RightPage from '../components/RightPage';
import ProductPhoto from '../components/ProductPhoto';
import CenterPage from '../components/CenterPage';

axios.defaults.withCredentials = true;

export default class MiCarritoContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
            <div class="col-md-4">
            <ProductPhoto product10={product10} product11={product11}/>
            </div>
            <div class="col-md-4">
            <CenterPage/>
            </div>
            <div class="col-md-4">
            <RightPage/>
            </div>
        </section >);
    }

  }