import React, {Component} from 'react';

import ShopContainer from '../containers/ShopContainer';
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
        <ShopContainer/>
        }
        <hr></hr>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Tienda
