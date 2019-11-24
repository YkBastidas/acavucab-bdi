import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Tienda extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="shop"/>
        </div>
      </header>
      <br/>
      <div className="container">
        {
          //TODO: ShopContainer}
        }
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Tienda
