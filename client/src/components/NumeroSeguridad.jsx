import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class NumeroSeguridad extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        
    }
}
render(){
    return(
        <section className="row margin-bottom">
            <div className="justified col-12 align-self-center">
                <h3>Cambiar numero de teléfono</h3>
                <p>Aqui podrá cambiar el numero de telefono de su cuenta a uno nuevo.</p>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Numero de telefono</label>
                        <input type="nombre" class="form-control" id="nombre" aria-describedby="nombre" required></input>
                            
                    </div>
                            <div class="col-12 col-sm-7 col-lg-5">
                                <button type="submit" class="btn btn-primary"><a href="/micuenta" class="button">Guardar Cambios</a></button>
                            </div>
                        </form>
                    </div>
      </section>
    )
}
}
export default NumeroSeguridad