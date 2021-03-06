import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class HomeBeerDescription extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.titleShop,
        image: props.imageShop
    }
  }
  render(){
    return(
      <section className="row margin-bottom">
        <div class="medium-12 large-5 cell large-offset-3">
                    <h3>Producto</h3>
                    <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                        pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                        aliquet egestas purus in.</p>
                        <select class="form-control"><label>Tamaños</label>
                            <option value="husker">Pequeño</option>
                            <option value="starbuck">Mediano</option>
                            <option value="hotdog">Grande</option>
                        </select>
                    <div class="grid-x">
                        <div class="small-3 cell">
                            <label for="middle-label" class="middle">Cantidad</label>
                        </div>
                        <div class="small-9 cell">
                        <input type="text" class="form-control"></input>
                        </div>
                    </div>
                    <div class="grid-x">
                            <div class="small-3 cell">
                                <label for="middle-label" class="middle">Caracteristicas</label>
                            </div>
                            <div class="small-9 cell">
                            <input type="text" class="form-control"></input>
                            </div>
                        </div>
                        <div class="grid-x">
                                <div class="small-3 cell">
                                    <label for="middle-label" class="middle">Color</label>
                                </div>
                                <div class="small-9 cell">
                                <input type="text" class="form-control"></input>
                                </div>
                            </div>
                            <div class="grid-x">
                                    <div class="small-3 cell">
                                        <label for="middle-label" class="middle">Ingredientes</label>
                                    </div>
                                    <div class="small-9 cell">
                                    <input type="text" class="form-control"></input>
                                    </div>
                                </div>
                                <br></br>
                                <button type="button" class="btn btn-primary"><a href="/metodopago" >Añadir al Carrito</a></button>
            </div>
        
      </section>
    )
  }
}

export default HomeBeerDescription
