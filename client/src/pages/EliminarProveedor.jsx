import React, {Component} from 'react';

import EliminarProveedorContainer from '../containers/EliminarProveedorContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class EliminarProveedor extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <EliminarProveedorContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default EliminarProveedor
