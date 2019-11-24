import React, {Component} from 'react';

import './Home.css'

import HomeContainer from '../containers/HomeContainer';
import Banner from '../components/Banner.jsx';
import Footer from '../components/Footer.jsx';

class Home extends Component {
  render() {
    return (<div>
      <header>
        <div className="container">
          <Banner active="home"/>
        </div>
      </header>
      <br/>
      <div className="container">
        <HomeContainer/>
      </div>
      <br/>
      <div className="container-fluid">
        <Footer/>
      </div>
    </div>);
  }
}

export default Home
