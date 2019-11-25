import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import event1 from "../images/event1.png"
import event2 from "../images/event2.png"
import event3 from "../images/event3.png"
import event4 from "../images/event4.png"


import SideEvents from "../components/SideEvents"
import PageMenu from "../components/PageMenu"

axios.defaults.withCredentials = true;

export default class EventsContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div className="callout col-sm-12 alert alert-primary" role="alert">
            <Link to="#" className="alert-link">
              > AGREGAR EVENTO
            </Link>
          </div>
          <div className="col-sm-12 col align-self-center">
            <hr/>
            <SideEvents title="Eventos" image1={event1} image2={event2} image3={event3} image4={event4}/>
          </div>
          <div className="col-sm-12 col align-self-center">
            <PageMenu/>
          </div>
        </section >);
    }

  }
