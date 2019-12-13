import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class PedidosTiempo extends Component{
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
        <div class="medium-7 large-4 cell">
            <div class="medium-6 cell" data-sticky-container>
                <div class="sticky" data-sticky data-anchor="content">
                    
                    <h4>Pedidos realizados en los ultimos meses</h4>
                    <ul>
                        <li><a id="h5link" href="../pedidos">Pedidos</a></li>
                        <li><a id="h5link" href="/listadeseo">Lista de deseos</a></li>
                        <li><a id="h5link" href="/pedidoscurso">Pedidos en curso</a></li>
                        <li><a id="h5link" href="/pedidoscancelados">Pedidos cancelados</a></li>
                        <li><a id="h5link" href="/pedidostiempo">Pedidos en los últimos meses</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <form>
                <div class="text-center">
                <div class="grid-x">
                    <div class="small-16 cell">
                        <label>Busca el/los pedidos
                            <input type="text"></input> <button type="button" class="btn btn-primary"><a href="/tipocerveza" >Buscar</a></button>
                        </label>
                    </div>
                    </div>
                    </div>
            </form>
           
        </div>
       
      </section>
    )
}
}
export default PedidosTiempo