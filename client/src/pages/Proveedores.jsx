import React, {Component} from 'react';

import './Home.css'

import ProviderContainer from '../containers/ProviderContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Proveedores extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="home"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ProviderContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Proveedores
