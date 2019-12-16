import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import AgregarDireccionContainer from '../containers/AgregarDireccionContainer';

class AgregarDireccion extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="contact"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <AgregarDireccionContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default AgregarDireccion