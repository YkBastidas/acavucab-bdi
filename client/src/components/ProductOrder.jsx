import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class ProductOrder extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        product5: props.product5,
        product6: props.product6,
        product7: props.product7
    }
}
render(){
    return(
        <section className="row margin-bottom">
            <div className="col-sm-2 mr-auto align-self-center margin">
                    <img src={this.state.product5} alt="Top Discount 1" style={{width: "inherit"}}/>
                        
                            <h4 class="pull-right">BS##</h4>
                            <h4>Producto</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        
                    </div>

                    <div className="col-sm-2 mr-auto align-self-center margin">
                    <img src={this.state.product6} alt="Top Discount 1" style={{width: "inherit"}}/>
                            <h4 class="pull-right">BS##</h4>
                            <h4>Producto</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="col-sm-2 mr-auto align-self-center margin">
                    <img src={this.state.product7} alt="Top Discount 1" style={{width: "inherit"}}/>
                            
                                <h4 class="pull-right">BS##</h4>
                                <h4>Producto</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            
                        </div>
        
       
      </section>
    )
}
}
export default ProductOrder