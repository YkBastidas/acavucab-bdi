import React, {Component} from 'react';

class ProductCart extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        image1: props.product2,
        image2: props.product3,
        image3: props.product4,
        image4: props.product5,
        image5: props.product6,
        image6: props.product7
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image1} alt="Top Discount 1" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/dark-ale">Producto</a></h5>
          <p class="subheader">Descripcion</p>
          <h4 class="pull-right">BS##</h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image2} alt="Top Discount 2" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/stout">Producto</a></h5>
          <p class="subheader">Descripcion</p>
          <h4 class="pull-right">BS##</h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image3} alt="Top Discount 3" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/porter">Producto</a></h5>
          <p class="subheader">Descripcion</p>
          <h4 class="pull-right">BS##</h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image4} alt="Top Discount 4" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/belgian">Producto</a></h5>
          <p class="subheader">Descripcion</p>
          <h4 class="pull-right">BS##</h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image5} alt="Top Discount 5" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/pilsner">Producto</a></h5>
          <p class="subheader">Descripcion</p>
          <h4 class="pull-right">BS##</h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image6} alt="Top Discount 1" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/american-amber-ale">Producto</a></h5>
          <p class="subheader">Descripcion</p>
          <h4 class="pull-right">BS##</h4>
        </div>
        <div className="col-sm-12 col align-self-center">
            <hr></hr>
         <button type="button" class="btn btn-primary"><a href="/metodopago" class="button">Ir a metodos de pago</a></button>
        </div>
      </section>
    )
  }
}

export default ProductCart