import React, {Component} from 'react';

import DatosContainer from '../containers/DatosContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class MiCuenta extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <DatosContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default MiCuenta
