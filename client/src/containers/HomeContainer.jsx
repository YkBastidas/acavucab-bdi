import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'

import discount1 from "../images/discount1.png"
import discount2 from "../images/discount2.png"
import discount3 from "../images/discount3.png"
import discount4 from "../images/discount4.png"
import discount5 from "../images/discount5.png"

import event1 from "../images/event1.png"
import event2 from "../images/event2.png"
import event3 from "../images/event3.png"

import shop from "../images/homeshop.png"
import provider1 from "../images/provider1.png"
import provider2 from "../images/provider2.png"
import provider3 from "../images/provider3.png"
import provider4 from "../images/provider4.png"

import Carousel from "../components/Carousel"
import TopDiscount from "../components/TopDiscount"
import HomeEvent from "../components/HomeEvent"
import HomeRightSide from "../components/HomeRightSide"

axios.defaults.withCredentials = true;

export default class HomeContainer extends Component {

  render() {

    return (
      <section className=" row align-items-center">
        <div className="col-xs-1 col-sm-2 col align-self-center">
          <img src={require('../images/logo.png')} alt="Logo ACAVUCAB" style={{
              width: "13em"
            }}/>
        </div>
        <div class="w-100"></div>
        <div className=" col-sm-12 col align-self-center">
          <Carousel title="Más Buscados" slide1={slider1} slide2={slider2} slide3={slider3}/>
        </div>
        <div className=" col-sm-12 col align-self-center">
          <TopDiscount title="Top Discounts" image1={discount1} image2={discount2} image3={discount3} image4={discount4} image5={discount5} />
        </div>
        <div className="col-sm-8 col align-self-center">
          <HomeEvent title="Eventos" image1={event1} image2={event2} image3={event3}/>
        </div>
        <div className="col-sm-4 col align-self-center">
          <HomeRightSide title1="Tienda" title2="Proveedores" imageShop={shop} image1={provider1} image2={provider2} image3={provider3} image4={provider4}/>
        </div>
      </section >);
  }

}
