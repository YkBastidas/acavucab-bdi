import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class Carnet extends Component{
    constructor(props) {
      super(props);
      this.state = {
        
    }
  }
  render(){
    return(
        <section className="row align-items-center margin-bottom">
            <div className="col-sm-12 col align-self-center">
                <h4>Nombre/Razón social</h4>
                <div class="input-group input-group-lg">
                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                    <input type="text" class="form-control" placeholder=""></input>
      </div>
                    <hr></hr>
                        <h4>Cedula o RIF</h4>
                        <div class="input-group input-group-lg">
                            <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            <input type="text" class="form-control" placeholder=""></input>
      </div>
                            <hr></hr>

                                <h4>Numero Identificador</h4>
                                <div class="input-group input-group-lg">
                                    <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                    <input type="text" class="form-control" placeholder=""></input>
      </div>
                                    <hr></hr>
                                        <h4>Codigo QR</h4>
                                        <div class="large-6 cell">
                                            <p><img src={require('../images/mario.png')} alt="image for article" alt="article preview image" style={{
                                                    width: "13em"
                                                  }}/></p>
    </div>
                                            <hr></hr>
                                                <form action="/">
                                                    <button type="button" class="btn btn-primary"><a href="/micuenta" class="button">Generar</a></button>
                                                </form> 
          </div>
      </section>
    )
  }
}

export default Carnet