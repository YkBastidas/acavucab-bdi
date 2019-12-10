import React, {Component} from 'react';

import PedidosContainer from '../containers/PedidosContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Pedidos extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PedidosContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Pedidos
