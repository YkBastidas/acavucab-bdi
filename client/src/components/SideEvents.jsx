import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class SideEvents extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        event1: props.image1,
        event2: props.image2,
        event3: props.image3,
        event4: props.image4
    }
  }
  render(){
    return(
      <section className="row margin-bottom">
          <div className="col-12 centered">
            <h4>
              {this.state.title}
            </h4>
          </div>
          <div className="col-6 margin-bottom">
            <img src={this.state.event1} alt="Event 1" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-6">
            <h5> <Link to="#" id="h5link"> 'Death Star' Vaporizes Its Own Planet </Link> </h5>
            <p>
                <span><i className="fi-torso"> By Mario &nbsp;&nbsp;</i></span>
                <span><i className="fi-calendar"> 11/09/19 &nbsp;&nbsp;</i></span>
                <span><i className="fi-comments"> 0 comments</i></span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
          <div className="col-6 margin-bottom">
            <img src={this.state.event2} alt="Event 2" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-6">
            <h5> <Link to="#" id="h5link">NASA's SLS Rocket Sheds Saturn V Color Scheme in Design Review </Link> </h5>
            <p>
                <span><i className="fi-torso"> By David &nbsp;&nbsp;</i></span>
                <span><i className="fi-calendar"> 11/09/19 &nbsp;&nbsp;</i></span>
                <span><i className="fi-comments"> 0 comments</i></span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
          <div className=" col-6 margin-bottom">
            <img src={this.state.event3} alt="Event 3" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-6">
            <h5> <Link to="#" id="h5link">Ingredients for Life Were Always Present on Earth, Comet Suggests </Link> </h5>
            <p>
                <span><i className="fi-torso"> By Yorfrank &nbsp;&nbsp;</i></span>
                <span><i className="fi-calendar"> 11/09/19 &nbsp;&nbsp;</i></span>
                <span><i className="fi-comments"> 0 comments</i></span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
          <div className=" col-6 margin-bottom">
            <img src={this.state.event3} alt="Event 3" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-6">
            <h5> <Link to="#" id="h5link"> A new Event is making this page a lot better, Bootstrap4 is Amazing! </Link> </h5>
            <p>
                <span><i className="fi-torso"> By Yorfrank &nbsp;&nbsp;</i></span>
                <span><i className="fi-calendar"> 23/11/19 &nbsp;&nbsp;</i></span>
                <span><i className="fi-comments"> 0 comments</i></span>
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
      </section>
    )
  }
}

export default SideEvents
