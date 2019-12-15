import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import axios from 'axios';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [day, month, year].join('/');
}

function generateEvent(data, number){
  return(
    Object.values(data).map((evento) =>
      {
        if(evento.clave !== ""){
        return (
            <div className="justified col-6">
              <h5> <Link to="#" id="h5link"> {evento.nombre} </Link> </h5>
              <p>
                  <span><i className="fi-torsos-all"> {evento.aforo} &nbsp;&nbsp;</i></span>
                  <small className="text-muted helpBlock">
                      <b> Aforo </b>
                  </small>
                  <span><i className="fi-calendar"> {formatDate(evento.fecha_inicio)} &nbsp;&nbsp;- &nbsp;&nbsp;</i></span>
                  <small className="text-muted helpBlock" style={{marginLeft:"4.5em"}}>
                      <b> Día de Inicio </b>
                  </small>
                  <span><i className="fi-calendar"> {formatDate(evento.fecha_fin)} </i></span>
                    <small className="text-muted helpBlock" style={{marginLeft:"14em"}}>
                        <b> Día de Cierre </b>
                    </small>
              </p>
              <p>{evento.descripcion}</p>
            </div>
        )
        }
        else{
          return ("");
        }
      }
    )[number]
  )
}

class SideEvents extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        event1: props.image1,
        event2: props.image2,
        event3: props.image3,
        event4: props.image4,
        data: {
          nombre:"",
          fecha_inicio:"",
          fecha_fin:"",
          aforo:"",
          descripcion:""
        }
    }
  }
  componentDidMount() {
    axios.get('/read/eventos')
      .then((res)=> {
        // handle success
        console.log('Callback Axios con la data de los eventos');
        console.log(res.data);
        this.setState({data: res.data});
      })
      .catch(function (error) {
    // handle error
    console.log('AXIOS error: '+ error);
  });
  }
  render(){
    return(
      <section className="row margin-bottom">
          <div className="col-12 centered">
            <h4>
              {this.state.title}
            </h4>
          </div>
          <div className="col-6 margin-bottom">
            <img src={this.state.event1} alt="Evento 1" style={{width: "inherit"}}/>
          </div>
          {generateEvent(this.state.data, 0)}
          <div className="col-6 margin-bottom">
            <img src={this.state.event2} alt="Evento 2" style={{width: "inherit"}}/>
          </div>
          {generateEvent(this.state.data, 1)}
          <div className="col-6 margin-bottom">
            <img src={this.state.event3} alt="Evento 3" style={{width: "inherit"}}/>
          </div>
          {generateEvent(this.state.data, 2)}
          <div className="col-6 margin-bottom">
            <img src={this.state.event4} alt="Evento 4" style={{width: "inherit"}}/>
          </div>
          {generateEvent(this.state.data, 3)}
      </section>
    )
  }
}

export default SideEvents
