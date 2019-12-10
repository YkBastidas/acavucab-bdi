import React, {Component} from 'react';

import ContraseñaSeguridadContainer from '../containers/ContraseñaSeguridadContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class ContraseñaSeguridad extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ContraseñaSeguridadContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default ContraseñaSeguridad