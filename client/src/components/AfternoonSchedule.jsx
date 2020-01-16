import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class AfternoonSchedule extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
          <div className="col-sm-12 col align-self-center">
            <h4>Tarde</h4>
            <h5>2:00 pm - 5:30 pm</h5>
          </div>
      </section>
    )
  }
}

export default AfternoonSchedule
