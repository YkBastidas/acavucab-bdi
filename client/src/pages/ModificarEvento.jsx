import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import ModificarEventoContainer from '../containers/ModificarEventoContainer';

class ModificarEvento extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="contact"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ModificarEventoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default ModificarEvento