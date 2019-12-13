import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

import PeopleContainer from '../containers/PeopleContainer'

axios.defaults.withCredentials = true;

export default class PersonalContainer extends Component {

    render() {
      return (
        <section className=" row align-items-center">
          <div className="col-sm-12 col align-self-center centered">
            <h3>Empleados por Departamento</h3>
          </div>
          <div className="col-sm-12 col align-self-center">
            <PeopleContainer title="Nombre Departamento 1"/>
          </div>
          <div className="col-sm-12 col align-self-center">
            <PeopleContainer title="Nombre Departamento 2"/>
          </div>
          <div className="col-sm-12 col align-self-center">
            <PeopleContainer title="Nombre Departamento 3"/>
          </div>
          <div className="col-sm-12 col align-self-center centered">
            <hr/>
            <h3>Gestion de horarios</h3>
            <p>Aqui se vera los turnos asignados y los dias de trabajo de cada empleado de la empresa. Se llevara el seguimiento de la misma</p>
            <h5><Link id="h5link" to="/horarios">Ver y manejar los horarios</Link></h5>
            <hr/>
            <h3>Gestion del Personal</h3>
            <p>Se llevará a cabo la modificacion de datos de los empleados de nuestra empresa</p>
            <h5><Link id="h5link" to="descrip-empleado/modificarempleado">
                Click Aqui para modificar algún empleado</Link>
            </h5>
            <hr/>
            <h3>Nuevo Personal</h3>
            <p>Se registrará a los nuevos miembros de nuestra empresa</p>
              <h5><Link id="h5link" to="descrip-empleado/agregarempleado"> Click Aqui para registrarlo</Link></h5>
            <hr/>
          </div>
          <hr/>
          <div className="col-sm-3 mr-auto align-self-center margin">
            <h3>Mision</h3>
              <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
          </div>
          <div className="col-sm-3 mr-auto align-self-center margin">
            <h3>Vision</h3>
              <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
          </div>
          <div className="col-sm-3 mr-auto align-self-center margin">
            <h3>Objetivos</h3>
              <p>Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam mattis viverra. Nulla fringilla, orci ac euismod semper, magna.</p>
          </div>
        </section>);
    }
  }
