import React, {Component} from 'react';

import './Home.css'

import SeguridadContainer from '../containers/SeguridadContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Seguridad extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="home"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <SeguridadContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Seguridad
