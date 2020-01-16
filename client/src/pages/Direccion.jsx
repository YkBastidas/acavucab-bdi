import React, {Component} from 'react';

import DireccionContainer from '../containers/DireccionContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Direccion extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <DireccionContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Direccion
