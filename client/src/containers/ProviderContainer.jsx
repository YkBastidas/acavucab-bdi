import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import proveedor1 from "../images/proveedor1.png"
import proveedor2 from "../images/proveedor2.png"
import proveedor3 from "../images/proveedor3.png"
import proveedor4 from "../images/proveedor4.png"
import proveedor5 from "../images/proveedor5.png"
import proveedor6 from "../images/proveedor6.png"


import Proveedores from '../components/Provider';
import event1 from "../images/event1.png"
import event2 from "../images/event2.png"
import event3 from "../images/event3.png"
import event4 from "../images/event4.png"




import SideProvider from "../components/SideProvider"
import RightProvider from "../components/RightProvider"


axios.defaults.withCredentials = true;

export default class ProviderContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">

            <Proveedores title = "Proveedor" image1={proveedor1} image2={proveedor2} image3={proveedor3} image4={proveedor4} image5={proveedor5} image6={proveedor6}/>
            <hr></hr>
            </div>
        <div className="col-sm-8 col">
          <SideProvider image1={event1} image2={event2} image3={event3} image4={event4}/>
        </div>
        <div className="col-sm-4 col">
          <RightProvider/>
        </div>
         
        </section >);
    }

  }