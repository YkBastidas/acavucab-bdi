﻿import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import jsreport from 'jsreport-browser-client-dist'

import slider1 from '../images/homeSlider1.png'
import slider2 from '../images/homeSlider2.png'
import slider3 from '../images/homeSlider3.png'

import discount1 from "../images/homeDiscount1.png"
import discount2 from "../images/homeDiscount2.png"
import discount3 from "../images/homeDiscount3.png"
import discount4 from "../images/homeDiscount4.png"
import discount5 from "../images/homeDiscount5.png"

import event1 from "../images/event1.png"
import event2 from "../images/event2.png"
import event3 from "../images/event3.png"
import event4 from "../images/event4.png"

import Carousel from "../components/Carousel"
import ProductLine from "../components/ProductLine"
import SideEvents from "../components/SideEvents"
import HomeRightSide from "../containers/HomeRightSide"

import Button from "../components/Button"

axios.defaults.withCredentials = true;

export default class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      report: '',
      reportScript: ''
    };
  }

  testReport(e){
    e.preventDefault()
    let response = {
      "number": "123",
      "seller": {
        "name": "Next Step Webs, Inc.",
        "road": "12345 Sunny Road",
        "country": "Sunnyville, TX 12345"
      },
      "buyer": {
        "name": "Acme Corp.",
        "road": "16 Johnson Road",
        "country": "Paris, France 8060"
      },
      "items": [{
        "name": "Website design",
        "price": 300
      }]
    } //LO QUE OBTIENES DEL AXIOS.GET [RESPONSE]
    let data = {
      "template": {"name": "/samples/Invoice/invoice-main" //NOMBRE DEL TEMPLATE EN JSREPORT
      },
      "data": response, //LLAMAR A LO QUE OBTUVISTE DEL AXIOS.GET
    }
      console.log('Reporte Enviado')
      jsreport.serverUrl = 'http://localhost:5488'
      jsreport.render(document.getElementById('reportPlaceholder'), data)
  }

  render() {
    return (
      <section className=" row ">
        <div className="col-xs-1 col-sm-2 col align-self-center">
          <img src={require('../images/logo.png')} alt="Logo ACAVUCAB" style={{
              width: "13em"
            }}/>
        </div>
        <div className="w-100"></div>
        <div className=" col-sm-12 col align-self-center">
          <Carousel title="MÃ¡s Buscados" slide1={slider1} slide2={slider2} slide3={slider3}/>
        </div>
        <div className=" col-sm-12 col align-self-center">
          <ProductLine title="Mejores Descuentos" product1={discount1} product2={discount2} product3={discount3} product4={discount4} product5={discount5} />
        </div>
        <div className="col-sm-8 col">
          <SideEvents title="Eventos" image1={event1} image2={event2} image3={event3} image4={event4} page="home"/>
        </div>
        <div className="col-sm-4 col align-self-center">
          <HomeRightSide/>
        </div>
        <Button action={this.testReport} type={"warning"} title={"Generar Reporte"}
          buttonStyle={{ width: "100%" }}/>
	     <div id="reportPlaceholder">
	       <p>there should be a report here...</p>
	     </div>
      </section >);
  }

}