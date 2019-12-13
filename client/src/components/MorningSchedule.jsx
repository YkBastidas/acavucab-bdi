import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class MorningSchedule extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
          <div className="col-sm-12 col align-self-center">
            <h4>Mañana</h4>
            <h5>7:00 am - 12:30 pm</h5>
          </div>
      </section>
    )
  }
}

export default MorningSchedule
