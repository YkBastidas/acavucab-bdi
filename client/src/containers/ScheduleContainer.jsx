import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import axios from 'axios';


import MorningSchedule from "../components/MorningSchedule"
import AfternoonSchedule from '../components/AfternoonSchedule';
import Vacations from "../components/Vacations"
import Calendar from "../components/Calendar"
import AnnouncementsSchedule from '../components/AnnouncementsSchedule';


axios.defaults.withCredentials = true;

export default class ScheduleContainer extends Component {

    render() {

      return (
        <section className=" row align-items-center">
          <div class="w-100"></div>
          <div className="col-sm-12 col align-self-center">
                <hr></hr>
                <h3>Horarios</h3>
                <h5>Aqui iran las horas de los empleados de nuestra empresa.</h5>
                <hr></hr>
                <h3>Turnos</h3>
                <hr></hr>
            <MorningSchedule/>
                <hr></hr>
            <AfternoonSchedule/>
                <hr></hr>
            <Vacations/>
            <hr></hr>
            <Calendar/>
            <hr></hr>
            <AnnouncementsSchedule/>
          </div>
        </section >);
    }

  }