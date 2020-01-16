import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Carrito extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="cart"/>
        </div>
      </header>
      <br/>
      <div className="container">
        {
          //TODO: MyCartContainer}
        }
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Carrito
