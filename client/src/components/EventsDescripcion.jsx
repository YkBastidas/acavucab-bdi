import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class DescripcionEvents extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        event1: props.event1,
        event2: props.event2,
        event3: props.event3,
        event4: props.event4,
        event5: props.event5
    }
}
render(){
    return(
    <section className="row margin-bottom">
        

        <div className="col-11 margin-bottom">
            <img src={this.state.event1} alt="Evento 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.event2} alt="Evento 2" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.event3} alt="Evento 3" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.event4} alt="Evento 4" style={{width: "inherit"}}/>
        </div>
        <div className="col-2 margin-bottom">
            <img src={this.state.event5} alt="Evento 5" style={{width: "inherit"}}/>
        </div>
        
    </section>
    )
}
}
export default DescripcionEvents
