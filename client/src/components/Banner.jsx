import React, {Component} from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import axios from 'axios'
var logged = false
class Banner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      userData: {id: '', nombre: '', contrasena: ''},
      isLoggedIn: false
    }
  }
  componentDidMount(){
    axios.get('/read/userInfo',{withCredentials: true})
    .then((res)=> { // handle success
      console.log(res)
      if(res.data==='errorNoUser'){
        throw new Error('NoUser');
      }
      logged = true
      console.log('Callback Axios con Data del Usuario')
      console.log(res.data)
      this.setState({userData: res.data, isLoggedIn:true})
      return this.state.userData.id
    })
    .catch(function (error) { // handle error
      if(error.message === 'NoUser'){
        console.log('No User Logged In'); console.log(error);
        return error.message
      }
      else{
        console.log('axios'); console.log(error);
      }
    })
    .finally(()=>{
      if(logged === false) {this.isLoggedIn(); console.log('No ha iniciado sesión')}
      else (console.log('Inicio de sesión exitoso'))
    })
  }
  isLoggedIn() { this.setState({isLoggedIn:false}) }
  render(){
    return(
      <div className="row align-items-center">
        <div className = "menu col-xs-12 col-sm-6" >
          <LeftMenu active = {this.state.active}/>
        </div>
         <div className = "menu col-xs-12 col-sm-6" >
          <RightMenu active = {this.state.active} logged ={this.state.isLoggedIn}/>
        </div>
      </div>
    )
  }
}

export default Banner
