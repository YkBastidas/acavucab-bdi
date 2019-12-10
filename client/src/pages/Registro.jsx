import React, {Component} from 'react';

import SignUpContainer from '../containers/SignUpContainer';
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
          <SignUpContainer/>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Registro
