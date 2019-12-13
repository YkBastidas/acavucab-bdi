import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class CorreoSeguridad extends Component{
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
            <h3>Cambiar correo</h3>
        <p>Aqui podrá cambiar el correo de su cuenta a uno nuevo.</p>
        <h5>Correo que será cambiado: </h5>
        <hr></hr>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Introduzca el nuevo correo</label>
                        <input type="nombre" class="form-control" id="nombre" aria-describedby="nombre" required></input>
                            
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Introduzca nuevamente el nuevo correo</label>
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
export default CorreoSeguridad