import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class MiCarrito extends Component{
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
                <h1>Productos</h1>
                <p class="subheader">There is beauty in space, and it is orderly. There is no weather, and there is
                    regularity. It is predictable. Everything in space obeys the laws of physics. If you know these
                    laws, and obey them, space will treat you kindly.</p>
            </div>

            <div class="medium-7 large-4 cell">
                <form>
                    <div class="text-center">
                        <div class="grid-x">
                            <div class="small-16 cell">
                                <label>Busca el/los pedidos
                            <input type="text"></input> <button type="button" class="btn btn-primary"><a href="/carrito" >Buscar</a></button>
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

export default MiCarrito
