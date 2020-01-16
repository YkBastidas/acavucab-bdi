import React, {Component} from 'react';

import PresupuestoContainer from '../containers/PresupuestoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Presupuesto extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PresupuestoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Presupuesto
