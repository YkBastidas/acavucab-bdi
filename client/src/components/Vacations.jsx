import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class Vacations extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
          <div className="col-sm-12 col align-self-center">
            <h3>Manejo de vacaciones</h3>
            <h5>Aqui iran las vacaciones de los empleados de nuestra empresa.</h5>
          </div>
      </section>
    )
  }
}

export default Vacations
