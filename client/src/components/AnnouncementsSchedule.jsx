import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class AnnouncementsSchedule extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
          <div className="col-sm-12 col align-self-center">
          <h3>Anuncios importantes</h3>
          <h5>• Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum
        delectus aperiam nesciunt magni facilis ullam.There is beauty in space, and it is orderly. There is no weather,
        and there is
        regularity. It is predictable. Everything in space obeys the laws of physics. If you know these
        laws, and obey them, space will treat you kindly</h5>
        <hr></hr>
    <h5>• Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum
        delectus aperiam nesciunt magni facilis ullam.</h5>
        <hr></hr>
          </div>
      </section>
    )
  }
}

export default AnnouncementsSchedule
