import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';




class RightProvider extends Component{
    constructor(props) {
      super(props);
      this.state = {
       
        
    }
  }
  render(){
    return(
        <section className="row margin-bottom">
          <div class="medium-12 large-5 cell large-offset-3">
          <aside>
            <h3>Contacto con ellos</h3>
                        <h5>Ubicacion:</h5>
                        <h5>Telefonos:</h5>
                        <h5>Correos:</h5>
                        <h5><a id="h5link" href="/fichaproveedor">Aqui puede ver la ficha de afiliacion</a></h5>
                        <h5><a id="h5link" href="/eliminarproveedor">Aqui puede eliminar un proveedor</a></h5>
                        <h5><a id="h5link" href="/modificarproveedor">Aqui puede modificar un proveedor</a></h5>
                       
        </aside>
            </div>
       
        </section>
            
     
    )
  }
}

export default RightProvider



