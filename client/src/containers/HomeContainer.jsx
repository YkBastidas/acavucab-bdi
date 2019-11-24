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
import event4 from "../images/event4.png"

import Carousel from "../components/Carousel"
import ProductLine from "../components/ProductLine"
import SideEvents from "../components/SideEvents"
import HomeRightSide from "../containers/HomeRightSide"

axios.defaults.withCredentials = true;

export default class HomeContainer extends Component {

  render() {

    return (
      <section className=" row ">
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
          <ProductLine title="Top Discounts" product1={discount1} product2={discount2} product3={discount3} product4={discount4} product5={discount5} />
        </div>
        <div className="col-sm-8 col">
          <SideEvents title="Eventos" image1={event1} image2={event2} image3={event3} image4={event4}/>
        </div>
        <div className="col-sm-4 col align-self-center">
          <HomeRightSide/>
        </div>
      </section >);
  }

}
