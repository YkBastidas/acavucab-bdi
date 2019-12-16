import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import shop from "../images/homeshop.png"
import provider1 from "../images/provider1.png"
import provider2 from "../images/provider2.png"
import provider3 from "../images/provider3.png"
import provider4 from "../images/provider4.png"

import HomeShop from "../components/HomeShop"
import HomeProviders from "../components/HomeProviders"

export default class HomeContainer extends Component {
  render() {

    return (
      <section>
        <div className="col-sm-12 col align-self-center">
          <HomeShop titleShop="Tienda" imageShop={shop}/>
        </div>
        <div className="col-sm-12 col align-self-center">
          <HomeProviders titleProviders="Proveedores" imgProvider1={provider1} imgProvider2={provider2} imgProvider3={provider3} imgProvider4={provider4}/>
        </div>
      </section>
      );
  }
}
