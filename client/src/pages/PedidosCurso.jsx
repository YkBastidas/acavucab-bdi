import React, {Component} from 'react';

import PedidosCursoContainer from '../containers/PedidosCursoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class PedidosCurso extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PedidosCursoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default PedidosCurso
