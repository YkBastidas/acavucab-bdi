import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Provider extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        proveedor1: props.image1,
        proveedor2: props.image2,
        proveedor3: props.image3,
        proveedor4: props.image4,
        proveedor5: props.image5,
        proveedor6: props.image6
       
        
    }
  }
  render(){
    return(
        <section className="row margin-bottom">
        <div className="col-12 centered">
          <h4>
              <hr></hr>
            {this.state.title}
            <hr></hr>
          </h4>
        </div>
        <div className="justified col-7">
        <h4>Descripcion</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
        </div>
        <div className="col-4 margin-bottom">
          <img src={this.state.proveedor1} alt="Proveedor 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-12 centered">
          <h4>
              <hr></hr>
            Productos en Venta
            <hr></hr>
          </h4>
          </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.proveedor2} alt="Producto 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.proveedor3} alt="Producto 2" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.proveedor4} alt="Producto 3" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.proveedor5} alt="Producto 4" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.proveedor6} alt="Producto 5" style={{width: "inherit"}}/>
        </div>
        <div className="col-12 centered">
              <hr></hr>
          </div>
        <div className="callout col-sm-12 alert alert-primary" role="alert">
            <Link to="/fichaproveedor" className="alert-link">
              > SER PROVEEDOR
            </Link>
        </div>
        
        </section>
            
     
    )
  }
}

export default Provider
