import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import {withRouter} from 'react-router-dom';
import axios from 'axios'


import LoginForm from '../components/LoginForm'
import Contrasena from '../components/Contrasena'

axios.defaults.withCredentials = true

class SignInContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalVisible: true,
      LoginData: {
        userName: "", password: ""
      },
      RecoveryData: {
        userName: "", email:"", rif:""
      }
    };
    this.onClick = this.onClick.bind(this);
    this.handleClearLogin = this.handleClearLogin.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginPassword = this.handleLoginPassword.bind(this);
    this.handleLoginInput = this.handleLoginInput.bind(this);
    this.handleClearRecovery = this.handleClearRecovery.bind(this);
    this.handleRecoverySubmit = this.handleRecoverySubmit.bind(this);
    this.handleRecoveryInput = this.handleRecoveryInput.bind(this);
    this.handleRecoveryEmail = this.handleRecoveryEmail.bind(this);
  }
  onClick() {
    this.setState({
      LoginData: {
        username: "", password: ""
      }
    })
    this.setState(prevState => ({
      personalVisible: !prevState.personalVisible
    }))
  }

  handleClearLogin(e) {
    e.preventDefault();
    this.setState({
      LoginData: {
        userName: "", password: ""
      }
    }, () => console.log(this.state.LoginData));
  }
  handleLoginSubmit(e) {
    e.preventDefault();
    let LoginData = this.state.LoginData;
    console.log(LoginData);
    axios.post('/auth/signIn', {
      username: LoginData.userName,
      password: LoginData.password
    }).then( (response)=> {
      // handle success
      console.log(response);
      if (!response.data){
        console.log('no existe usuario');
        alert('No se pudo iniciar sesion, credenciales invalidas');
      } else {
        console.log(response.data);
        this.props.history.push('/micuenta');
        }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      alert('No se pudo iniciar sesion');
    })
    .then(function () {
      // always executed
    });
  }
  handleLoginPassword(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      LoginData: {
        ...prevState.LoginData,
        password: value

      }
    }), () => console.log(this.state.LoginData));
  }
  handleLoginInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      LoginData: {
        ...prevState.LoginData,
        [name]: value
      }
    }), () => console.log(this.state.LoginData));
  }

  handleClearRecovery(e) {
    e.preventDefault();
    this.setState({
      RecoveryData: {
        username: "", rif: "", email: ""
      }
    }, () => console.log(this.state.RecoveryData));
  }
  handleRecoverySubmit(e) {
    e.preventDefault();
  }
  handleRecoveryInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(prevState => ({
      RecoveryData: {
        ...prevState.RecoveryData,
        [name]: value
      }
    }), () => console.log(this.state.RecoveryData));
  }
  handleRecoveryEmail(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      RecoveryData: {
        ...prevState.RecoveryData,
        email: value
      }
    }), () => console.log(this.state.RecoveryData));
  }

  render() {
      return (
        <div className=" container">
          {
            this.state.personalVisible
            ? <LoginForm data= {this.state.LoginData} onClick={this.onClick} handleSubmit={this.handleLoginSubmit} handlePassword={this.handleLoginPassword} handleInput={this.handleLoginInput} handleClearForm={this.handleClearLogin}/>
          : <Contrasena data= {this.state.RecoveryData} onClick={this.onClick}
            handleSubmit={this.handleRecoverySubmit} handleEmail={this.handleRecoveryEmail} handleInput={this.handleRecoveryInput} handleClearForm={this.handleClearRecovery}/>
          }
        </div >)
    }
}
export default withRouter(SignInContainer);
