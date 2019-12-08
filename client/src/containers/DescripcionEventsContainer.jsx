import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import event1 from "../images/event1.png"
import event2 from "../images/event5.png"
import event3 from "../images/event6.png"
import event4 from "../images/event7.png"
import event5 from "../images/event8.png"
import event6 from "../images/event9.png"
import event7 from "../images/event10.png"
import event8 from "../images/event11.png"


import proveedor1 from "../images/proveedor1.png"
import proveedor2 from "../images/proveedor2.png"
import proveedor3 from "../images/proveedor3.png"



import DescripcionEvents from "../components/EventsDescripcion"
import HomeEventsDescripcion from "../components/HomeEventsDescripcion"
import ProductLineEventsProductBeer from '../components/ProductLineEventsBeer';
import ProductLineEvents from '../components/ProductLineEvents';
import OtherEvents from '../components/OtherEvents';


axios.defaults.withCredentials = true;

export default class DescripcionEventsContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          
        <div className="col-sm-8 col">
          <DescripcionEvents title="Eventos" event1={event1} event2={event2} event3={event3} event4={event4} event5={event5}/>
        </div>
        <div className="col-sm-4 col align-self-center">
          <HomeEventsDescripcion/>
        </div>
        <div className="col-sm-12 col align-self-center">
          <hr></hr>
            <ProductLineEvents title="Proveedores en Eventos" proveedor1={proveedor1} proveedor2={proveedor2} proveedor3={proveedor3}/>
            <hr></hr>
          </div>
          <div className="col-sm-12 col align-self-center">
            <ProductLineEventsProductBeer title="Productos en Eventos" proveedor1={proveedor1} proveedor2={proveedor2} proveedor3={proveedor3}/>
            <hr></hr>
          </div>
          <div className="col-sm-12 col align-self-center">
            <OtherEvents title="Otros Eventos" event6={event6} event7={event7} event8={event8}/>
            <hr></hr>
          </div>
        
        </section >);
    }

  }
