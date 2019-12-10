import React, {Component} from 'react';

class Seguridad extends Component{
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
                    <h3>Seguridad</h3>
                    <form>
                        <fieldset disabled>
                            <div class="form-group">
                                <label for="disabledTextInput">Nombre</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre del Usuario" ></input>
                            </div> 
                        <button type="submit" class="btn btn-primary"><a id="h5link" href="/nombreseguridad" class="button">Editar</a></button>
                        <hr></hr>
                        <div class="form-group">
                                <label for="disabledTextInput">Correo</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Correo del Usuario" ></input>
                            </div> 
                        <button type="submit" class="btn btn-primary"><a id="h5link" href="/correoseguridad" class="button">Editar</a></button>
                        <hr></hr>
                        <div class="form-group">
                                <label for="disabledTextInput">Numero de Teléfono</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Numero de telefono del Usuario" ></input>
                            </div> 
                        <button type="submit" class="btn btn-primary"><a id="h5link" href="/numeroseguridad" class="button">Editar</a></button>
                        <hr></hr>
                        <div class="form-group">
                                <label for="disabledTextInput">Contraseña</label>
                                <input type="text" id="disabledTextInput" class="form-control" placeholder="Contraseña del Usuario"></input>
                            </div> 
                        <button type="submit" class="btn btn-primary"><a id="h5link" href="/contraseñaseguridad" class="button">Editar</a></button>
                        </fieldset>
                    </form>
                </div>
                
        </section>
    )
  }
}

export default Seguridad
