import React, {Component} from 'react';
import './Carousel.css';

class Carousel extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      slider1: props.slide1,
      slider2: props.slide2,
      slider3: props.slide3
    }
  }
  render(){
    return(
      <section className="margin-bottom">
        <div className ="col-sm-12 col align-self-center" style = {{
            textAlign: "center"
          }}>
          <h4>{this.state.title}</h4>
        </div>

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-pause="hover">

           {/* Indicators*/}
           <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
           </ol>

           {/*Slide's Container*/}
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <img className="d-block w-75" src={this.state.slider1} alt="First slide"/>
              </div>
              <div className="carousel-item">
                 <img className="d-block w-75" src={this.state.slider2} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                 <img className="d-block w-75" src={this.state.slider3} alt="Third slide"/>
              </div>
           </div>

           {/*Carousel's arrow buttons*/}
           <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
           </a>
           <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
           </a>
        </div>
      </section>
    )
  }
}

export default Carousel
