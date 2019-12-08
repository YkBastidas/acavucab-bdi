import React, {Component} from 'react';

import ModificarProveedorContainer from '../containers/ModificarProveedorContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class ModificarProveedor extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ModificarProveedorContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default ModificarProveedor
