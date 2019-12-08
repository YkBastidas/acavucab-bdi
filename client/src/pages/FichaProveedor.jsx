import React, {Component} from 'react';

import FichaProveedorContainer from '../containers/FichaProveedorContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class FichaProveedor extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <FichaProveedorContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default FichaProveedor
