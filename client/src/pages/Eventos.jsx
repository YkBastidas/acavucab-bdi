import React, {Component} from 'react';

import EventsContainer from '../containers/EventsContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Eventos extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="events"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <EventsContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Eventos
