import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import tienda1 from "../images/tienda1.png"

import fav1 from '../images/fav1.png'
import fav2 from '../images/fav2.png'
import fav3 from '../images/fav3.png'
import fav4 from '../images/fav4.png'
import fav5 from '../images/fav5.png'

import classic1 from '../images/classic1.png'
import classic2 from '../images/classic2.png'
import classic3 from '../images/classic3.png'
import classic4 from '../images/classic4.png'
import classic5 from '../images/classic5.png'

import discount1 from "../images/discount1.png"
import discount2 from "../images/discount2.png"
import discount3 from "../images/discount3.png"
import discount4 from "../images/discount4.png"
import discount5 from "../images/discount5.png"

import member1 from "../images/member1.png"
import member2 from "../images/member2.png"
import member3 from "../images/member3.png"       
        
import provider1 from "../images/provider1.png"
import provider2 from "../images/provider2.png"

import Tienda from "../components/Shop"
import ProductLine from '../components/ProductLine';
import ProductLineShop from '../components/ProductLineShop';
import ProductLineClassic from '../components/ProductLineClassic';
import AlertShop from '../components/AlertShop';
import MembersShops from '../components/MembersShop';
import ProviderShops from '../components/ProviderShop';


axios.defaults.withCredentials = true;

export default class ShopContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <Tienda title = "Nuestro Negocio" image1={tienda1}/><hr></hr>
            <ProductLineShop title="Mas Vendidas en tienda!!!" fav1={fav1} fav2={fav2} fav3={fav3} fav4={fav4} fav5={fav5} />
            <hr></hr>
            <ProductLine title="Mejores Descuentos!!!" product1={discount1} product2={discount2} product3={discount3} product4={discount4} product5={discount5} />
            <hr></hr>
            <ProductLineClassic title="Clasicos en tienda!!!" classic1={classic1} classic2={classic2} classic3={classic3} classic4={classic4} classic5={classic5} />
            <hr></hr>
            <AlertShop/>
            <hr></hr>
            <h3><a href="/personal" target="new" id="h5link">Nuestro Personal</a></h3>
            <MembersShops  member1={member1} member2={member2} member3={member3} />
            <hr></hr>
            <h3><a href="/proveedores" target="new" id="h5link">Nuestros Proveedores</a></h3>
            <ProviderShops  provider1={provider1} provider2={provider2}/>
          </div>
        </section >);
    }

  }