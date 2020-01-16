import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class Calendar extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
          <div className="col-sm-12 col align-self-center">
          <h3>Calendario</h3>
          <form>
          <div class="grid-x">
          <div class="small-12 cell">
                <input type="date" name="fecha"></input>
            </div>
          </div>
          </form>
          </div>
      </section>
    )
  }
}

export default Calendar
