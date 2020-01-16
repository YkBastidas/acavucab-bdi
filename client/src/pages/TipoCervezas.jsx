import React, {Component} from 'react';

import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';
import BeerTypeContainer from '../containers/BeerTypeContainer';

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
        <BeerTypeContainer/>
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
