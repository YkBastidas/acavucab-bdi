import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import LoginForm from '../components/LoginForm';


axios.defaults.withCredentials = true;

export default class SignInContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <LoginForm/>
        </section >);
    }

  }