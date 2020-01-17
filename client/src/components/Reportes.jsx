import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Reportes extends Component{
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
        <div className=" mr-auto align-self-center margin"> 
        <a id="h5link" href = 'localhost:8000/api/reporte/1' >Reporte 1</a>
        </div>
        <div className=" mr-auto align-self-center margin"> 
        <a  id="h5link"href = 'localhost:8000/api/reporte/2' >Reporte 2</a>
        </div>
        <div className=" mr-auto align-self-center margin"> 
        <a id="h5link" href = 'localhost:3000/api/reporte/3' >Reporte 3</a>
        </div>
        <div className=" mr-auto align-self-center margin"> 
        <a id="h5link" href = 'localhost:8000/api/reporte/4' >Reporte 4</a>
        </div>
        <div className=" mr-auto align-self-center margin"> 
        <a id="h5link" href = 'localhost:8000/api/reporte/5' >Reporte 5</a>
        </div>
        <div className=" mr-auto align-self-center margin"> 
        <a id="h5link" href = 'localhost:8000/api/reporte/13' >Reporte 13</a>
        </div>
        <div className=" mr-auto align-self-center margin"> 
        <a id="h5link" href = "localhost:8000/api/reporte/14" >Reporte 14</a>
        </div>
        </section>
            
     
    )
  }
}

export default Reportes
