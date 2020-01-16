import React, {Component} from 'react';

import SignInContainer from '../containers/SignInContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class InicioSesion extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="signin"/>
        </div>
      </header>
      <br/>
      <div className="container">
        {
        <SignInContainer/>
        }
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default InicioSesion
