import React, {Component} from 'react';

import DescripcionEventsContainer from '../containers/DescripcionEventsContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class DescripcionEvento extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <DescripcionEventsContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default DescripcionEvento
