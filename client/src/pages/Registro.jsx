import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Registro extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="signup"/>
        </div>
      </header>
      <br/>
      <div className="container">
        {
          //TODO: SignUpContainer}
        }
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Registro
