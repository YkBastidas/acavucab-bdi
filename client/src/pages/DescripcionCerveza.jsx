import React, {Component} from 'react';

import BeerDescriptionContainer from '../containers/BeerDescriptionContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class DescripcionCerveza extends Component {
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
        <BeerDescriptionContainer/>
        }
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default DescripcionCerveza
