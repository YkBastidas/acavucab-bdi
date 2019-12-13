import React, {Component} from 'react';

import NumeroSeguridadContainer from '../containers/NumeroSeguridadContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class NumeroSeguridad extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <NumeroSeguridadContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default NumeroSeguridad
