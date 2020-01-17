import React, {Component} from 'react';

import ReporteContainer from '../containers/ReportesContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Reportes extends Component {
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
        <ReporteContainer/>
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

export default Reportes
