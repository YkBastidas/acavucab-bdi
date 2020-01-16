import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import personImg from "../images/personal.png"
import Person from "../components/Person"

export default class PeopleContainer extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title
    }
}
/* SCRIPT PARA ELIMINAR USUARIOS
<script type="text/javascript">
  function ConfirmDemo() {
  //Ingresamos un mensaje a mostrar
    var mensaje = confirm("¿Seguro quiere eliminar al empleado?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
      alert("¡Eliminado!");
    }
    //Detectamos si el usuario denegó el mensaje
    else {
      alert("¡Haz cancelado la operacion!");
    }
  }
</script>
<input type="button" onclick="ConfirmDemo()" value="Click para eliminar un empleado"/> */
render(){
    return(
      <section className="row align-items-center">
        <div className="col-sm-12 col align-self-center centered">
          <hr/>
          <h3>{this.state.title}</h3>
          <hr/>
        </div>
          <div className="col-sm-3 align-self-center">
            <Person title="Nombre Apellido" image={personImg} data1="DB data" data2="DB data" data3="DB data"/>
          </div>
          <div className="col-sm-3 align-self-center">
            <Person title="Nombre Apellido" image={personImg} data1="DB data" data2="DB data" data3="DB data"/>
          </div>
          <div className="col-sm-3 align-self-center">
            <Person title="Nombre Apellido" image={personImg} data1="DB data" data2="DB data" data3="DB data"/>
          </div>
          <div className="col-sm-3 align-self-center">
            <Person title="Nombre Apellido" image={personImg} data1="DB data" data2="DB data" data3="DB data"/>
          </div>
      </section>
    )
  }
}
