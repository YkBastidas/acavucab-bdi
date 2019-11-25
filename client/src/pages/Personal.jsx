import React, {Component} from 'react';

import PersonalContainer from '../containers/PersonalContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Personal extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner/>
        </div>
      </header>
      <br/>
      <div className="container">
        <PersonalContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Personal
