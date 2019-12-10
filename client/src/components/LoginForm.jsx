import React, {Component} from 'react';

class LoginForm extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,

    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="justified col-12 align-self-center">
            <h2>Inicio Sesion</h2>
          <form>
            <div class="form-group">
            <input type="name" class="form-control" placeholder="Cedula Identidad"></input>
            <br/>
            <input type="name" class="form-control" placeholder="Contraseña"></input>
            <br/>
            ¿Olvidó la contraseña?<a id="h5link" href="/contrasena">Click aqui</a>
            <br></br>
            <br></br>
            <button type="submit" class="btn btn-primary">Entrar</button>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default LoginForm
