import React, {Component} from 'react';

import ListaDeseoContainer from '../containers/ListaDeseoContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class ListaDeseo extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ListaDeseoContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default ListaDeseo
