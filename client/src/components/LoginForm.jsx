import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import Input from './Input';
import Button from './Button';

class LoginForm extends Component{
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-6 text-center bg-success text-white rounded-pill margin-bottom">
          <h2>
              Inicio Sesión
          </h2>
        </div>
        <div className="col-6 text-center bg-secondary text-dark rounded-pill margin-bottom">
          <h4>
            <button className="btn btn-link" onClick={this.props.onClick}>
              Recuperación de Contraseña
            </button>
          </h4>
        </div>
        <div className="offset-1 col-4 margin-top">
          <form onSubmit={this.props.handleSubmit} className="needs-validation formulary">
            <div className="form-row">
              <div className="col-12 mb-3">
                <Input title={"Nombre de Usuario:"} name={"userName"} inputtype={"text"} value={this.props.data.userName} handlerChange={this.props.handleInput} required={"required"}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-12 mb-3">
                <Input title={"Contraseña"} name={"password"} inputtype={"password"} value={this.props.data.password} handlerChange={this.props.handlePassword} required={"required"}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <Button action={this.props.handleSubmit} type={"primary"} title={"Crear Cuenta"}
                  buttonStyle={{ width: "100%" }}/>
              </div>
              <div className="col-md-6 mb-3">
                <Button action={this.props.handleClearForm} type={"warning"} title={"Restaurar"}
                  buttonStyle={{ width: "100%" }}/>
              </div>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

export default LoginForm
