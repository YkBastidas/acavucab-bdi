import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import Reportes from "../components/Reportes";



axios.defaults.withCredentials = true;

export default class ShopContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div className="col-sm-12 col align-self-center">
            <Reportes/>
        </div>>
        </section >);
    }

  }
