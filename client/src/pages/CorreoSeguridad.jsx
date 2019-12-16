import React, {Component} from 'react';

import CorreoSeguridadContainer from '../containers/CorreoSeguridadContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class CorreoSeguridad extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <CorreoSeguridadContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default CorreoSeguridad
