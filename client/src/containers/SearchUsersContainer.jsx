import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';
import ReactDOM from 'react-dom'

var initPage = 0

function paginateUsers(data, page){
  let times = page + 10, actualArray =[]
  for(var i=page; i < times; i++){
    actualArray.push(data[i])
  }
  console.log(actualArray)
  return Object.values(actualArray).map((usuario, key) =>{
    return(
      <div className="row">
        <div className="col-2">
          <span key={usuario.clave} value={usuario.nombre}> {usuario.nombre} </span>
        </div>
      </div>

    )
  })
}

export default class SearchUsersContainer extends Component {
  constructor(props){
    super(props);
    this.state ={
      usuarios: {id: '', nombre: '', contrasena: '', fk_rol:''},
      Natural:{rif: "", name: "", lastName:"", userName:"",rolId:""},
      Juridico:{rif:"", comercialDesignation:"", businessName:"",
        username:"", rolId:""},
      Personal:{ci:"",name:"",lastName:"",userName:"",rolId:""}
    }
  }
  componentDidMount(){
    axios.get('/read/usuarios')
    .then((res)=> {
      this.setState({usuarios: res.data})
      console.log(this.state.usuarios)
    })
    .catch(function (error) {// handle error
      console.log('axios');
      console.log(error);
    });
  }
  render(){
    return(
      <div className="col-12">
        { this.state.usuarios.length >0
          ?paginateUsers(this.state.usuarios, initPage)
          : ""
        }
      </div>
    )
  }
}
