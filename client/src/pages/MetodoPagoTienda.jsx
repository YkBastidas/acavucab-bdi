import React, {Component} from 'react';

import MetodoPagoTiendaContainer from '../containers/MetodoPagoTiendaContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class MetodoPagoTienda extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <MetodoPagoTiendaContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default MetodoPagoTienda