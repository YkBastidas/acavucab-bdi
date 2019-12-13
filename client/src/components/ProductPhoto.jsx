import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class ProductPhoto extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        product10: props.product10,
        product11: props.product11
    }
}
render(){
    return(
    <div class="col-md-4 order-md-2 mb-4">
      <h5>
        <span class="text-muted">Tu Carro</span>
        <span class="badge badge-secondary badge-pill">2</span>
      </h5>
      
        <div class="large-6 cell">
            <div class="large-2 cell">
              <p><img src={this.state.product10} alt="Top Discount 1" style={{width: "inherit"}}/></p>
            </div>
              <h5>Producto</h5>
              <h6>Eliminar Producto</h6>
              <div class="large-2 cell">
                <p><img src={this.state.product11} alt="Top Discount 1" style={{width: "inherit"}}/></p>
              </div>
                <h5>Producto</h5>
                <h6>Eliminar Producto</h6>
            
            <li>
              <span>Total: </span>
              <strong>Numero</strong>
            </li>
          </div>
        </div>
      
    
   
    )
}
}
export default ProductPhoto