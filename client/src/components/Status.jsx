import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Status extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        
    }
}
render(){
    return(
        <section className="row margin-bottom">
        <div className="col-sm-12 col align-self-center">
        <form>
                
                    <div class="small-16 cell">
                        <label>Busca la factura para saber su status
                            <input type="text"></input> <button type="button" class="btn btn-primary"><a href="#" >Buscar</a></button>
                        </label>
                    </div>
                    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Status
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Entregado</a>
    <a class="dropdown-item" href="#">Listo para entregar</a>
    <a class="dropdown-item" href="#">En proceso</a>
    <a class="dropdown-item" href="#">Recien Pedido</a>
  </div>
</div>
                   
            </form>
           
        </div>
       
      </section>
    )
}
}
export default Status