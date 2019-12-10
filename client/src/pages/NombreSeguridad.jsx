import React, {Component} from 'react';

import NombreSeguridadContainer from '../containers/NombreSeguridadContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class NombreSeguridad extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <NombreSeguridadContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default NombreSeguridad
