import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

class RightSideContact extends Component{
  render(){
    return(
      <section className="row margin-bottom">
        <div className="justified col-12 align-self-center">
          <form>
            <div class="form-group">
            <label>Nombre</label>
            <input type="name" class="form-control"></input>
            <br/>
            <label>Correo</label>
            <input type="name" class="form-control"></input>
            <br/>
            <label>Mensaje</label>
            <textarea class="form-control" rows="3"></textarea>
            <br/>
            <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default RightSideContact
