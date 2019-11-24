import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class TipoCervezas extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="beertype"/>
        </div>
      </header>
      <br/>
      <div className="container">
        {
          //TODO: BeerTypeContainer}
        }
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default TipoCervezas
