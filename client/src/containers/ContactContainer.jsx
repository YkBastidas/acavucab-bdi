import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';

import contact1 from "../images/contact1.png"
import contact2 from "../images/contact2.png"
import contact3 from "../images/contact3.png"

import Contact from "../components/Contact"
import ContactAdmin from '../components/ContactAdmin';
import RightSideContact from '../components/RightSideContact';

axios.defaults.withCredentials = true;

export default class ContactContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
            <Contact/>
            <RightSideContact title="Contacto"/>
            <ContactAdmin title="Administradores" image1={contact1} image2={contact2} image3={contact3}/>
          </div>
        </section >);
    }

  }
