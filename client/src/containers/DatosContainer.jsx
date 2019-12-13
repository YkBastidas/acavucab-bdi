import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import client1 from "../images/client1.png"


import Datos from "../components/Datos"
import ClientData from '../components/ClientData';
import RightClientMenu from '../components/RightClientMenu';

axios.defaults.withCredentials = true;

export default class DatosContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <Datos/>
            <hr></hr>
            <div className="col-sm-8 col">
          <ClientData client1={client1}/>
        </div>
        <div className="col-sm-8 col">
          <RightClientMenu/>
        </div>
          </div>
        </section >);
    }

  }
