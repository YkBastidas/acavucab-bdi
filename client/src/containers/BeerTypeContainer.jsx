import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import slider1 from '../images/homeSlider1.png'
import slider2 from '../images/homeSlider2.png'
import slider3 from '../images/homeSlider3.png'
import slider4 from '../images/topbeer1.png'
import slider5 from '../images/topbeer2.png'
import slider6 from '../images/topbeer3.png'
import slider7 from '../images/topbeer4.png'
import slider8 from '../images/topbeer5.png'
import slider9 from '../images/topbeer6.png'
import slider10 from '../images/topbeer7.png'
import slider11 from '../images/topbeer8.png'
import slider12 from '../images/topbeer9.png'
import slider13 from '../images/topbeer10.png'
import slider14 from '../images/topbeer11.png'





import Carousel from "../components/Carousel";
import TopBeer from '../components/TopBeer';
import AlertBeer from '../components/AlertBeer';
import OtherBeer from '../components/OtherBeer';
import AlertBeerProduct from '../components/AlertBeerProduct';

axios.defaults.withCredentials = true;

export default class BeerTypeContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
          <Carousel title="Tipos de Cerveza" slide1={slider1} slide2={slider2} slide3={slider3}/>
          <hr></hr>
          <TopBeer  slide1={slider1} slide2={slider2} slide3={slider3} slide4={slider4} slide5={slider5} slide6={slider6} slide7={slider7} slide8={slider8} slide9={slider9} slide10={slider10} slide11={slider11} slide12={slider12} slide13={slider13} slide14={slider14}/>
          <hr></hr>
          <AlertBeer/>
          <hr></hr>
          <OtherBeer/>
          <hr></hr>
          <AlertBeerProduct/>
          <hr></hr>
          </div>
        </section >);
    }

  }
