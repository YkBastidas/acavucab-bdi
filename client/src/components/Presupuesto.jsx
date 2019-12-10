import React, { Component } from 'react';


class Presupuesto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,

        }
    }
    render() {
        return (
            <section className="row align-items-center margin-bottom">
            <div className="col-sm-12 col align-self-center">
            <h3>Presupuesto</h3>
            <h6><strong>(Debe tener un usuario para esta opcion). Si no tiene, afíliese <a id="h5link" href="/afiliarse">aqui</a> </strong></h6>
            <form name="sentMessage" id="contactForm" novalidate>
            <div class="control-group form-group">
            <div class="controls">
                        <label>Nombre Completo:</label>
                        <input type="text" class="form-control" id="name" required data-validation-required-message="Introduzca datos."></input>
                        <p class="help-block"></p>
            </div>
            <div class="controls">
                        <label>Número Registro:</label>
                        <input type="text" class="form-control" id="name" required data-validation-required-message="Introduzca datos"></input>
                        <p class="help-block"></p>
            </div>
            <div class="control-group form-group">
                    <div class="controls">
                        <label>Productos a reservar:</label>
                        <textarea rows="10" cols="100" class="form-control" id="message" required data-validation-required-message="Por favor coloque los productos" maxlength="999"></textarea>
                        <hr></hr>
                    </div>
                    <button type="submit" class="btn btn-primary"><a id="h5link" href="/micuenta">Conseguir Presupuesto</a></button>    
                </div>
            </div>
            </form>
            </div>
            </section>
                    )
                  }
                }
                
export default Presupuesto