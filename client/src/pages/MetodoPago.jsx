import React, {Component} from 'react';

import MetodoPagoContainer from '../containers/MetodoPagoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class MetodoPago extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <MetodoPagoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default MetodoPago