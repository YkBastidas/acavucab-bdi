import React, {Component} from 'react';

import MiCarritoContainer from '../containers/MiCarritoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class MiCarrito extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <MiCarritoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default MiCarrito