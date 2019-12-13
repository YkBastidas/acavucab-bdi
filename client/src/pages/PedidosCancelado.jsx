import React, {Component} from 'react';

import PedidosCanceladoContainer from '../containers/PedidosCanceladoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class PedidosCancelado extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PedidosCanceladoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default PedidosCancelado
