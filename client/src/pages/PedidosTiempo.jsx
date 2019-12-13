import React, {Component} from 'react';

import PedidosTiempoContainer from '../containers/PedidosTiempoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class PedidosTiempo extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PedidosTiempoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default PedidosTiempo
