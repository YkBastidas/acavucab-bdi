import React, {Component} from 'react';

import ScheduleContainer from '../containers/ScheduleContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Horarios extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="signin"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <ScheduleContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Horarios
