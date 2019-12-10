import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';



import Presupuesto from '../components/Presupuesto';


axios.defaults.withCredentials = true;

export default class EventsContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          
          <div className="col-sm-12 col align-self-center">
            <hr/>
            <Presupuesto/>
          </div>
        </section >);
    }

  }
