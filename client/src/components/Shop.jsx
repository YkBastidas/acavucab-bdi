import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Shop extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        tienda1: props.image1,
        
    }
  }
  render(){
    return(
        <section className="row margin-bottom">
        <div className="justified col-7">
        <h4>{this.state.title}</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
        </div>
        <div className="col-4 margin-bottom">
          <img src={this.state.tienda1} alt="Tienda 1" style={{width: "inherit"}}/>
        </div>
        <hr></hr>
        <div className="col-sm-3 mr-auto align-self-center margin">
        <hr></hr>
        <h3>Locacion</h3>
                <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed
                    nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
        </div>
        <div className="col-sm-3 mr-auto align-self-center margin">
        <hr></hr>
        <h3>Numeros</h3>
                <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed
                    nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
        </div>
        <div className="col-sm-3 mr-auto align-self-center margin">
        <hr></hr>
        <h3>Correos</h3>
                <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed
                    nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
        </div>
        <div className="callout col-sm-12 alert alert-primary" role="alert">
            <Link to="/presupuesto" className="alert-link">
              > PEDIR PRESUPUESTO
            </Link>
          </div>
        </section>
            
     
    )
  }
}

export default Shop
