import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class EliminarDireccion extends Component{
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
                <h2>Introduzca la direccion a eliminar</h2>
                <hr></hr>
                    <div class="mb-3">
                        <label for="address">Direccion</label>
                        <input type="text" class="form-control" id="address" placeholder="" required></input>
      </div>
                        <hr></hr>
                            <button type="submit" class="btn btn-primary"><a id="h5link" href="/direccion" class="button">Eliminar Dirección</a></button>
    </div>
                    
        </section>
    )
}
}
export default EliminarDireccion