import React, {Component} from 'react';

class ProductLineEvents extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        image1: props.proveedor1,
        image2: props.proveedor2,
        image3: props.proveedor3
        
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-sm-12 col align-self-center centered">
          <h4 style={{
              margin: "0"
            }}>
            {this.state.title}
            <hr></hr>
          </h4>
        </div>
        <div className="col-sm-3 mr-auto align-self-center margin">
          <img src={this.state.image1} alt="Top Discount 1" style={{width: "inherit"}}/>
          <div className="justified col-20">
          <h4><a id="h5link" href="#">Producto</a></h4>
          <h4 class="pull-right">BS###</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
        </div>
        
        <div className="col-sm-3 mr-auto align-self-center margin">
          <img src={this.state.image2} alt="Top Discount 2" style={{width: "inherit"}}/>
          <div className="justified col-20">
          <h4><a id="h5link" href="#">Producto</a></h4>
          <h4 class="pull-right">BS###</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
        </div>
        <div className="col-sm-3 mr-auto align-self-center margin">
          <img src={this.state.image3} alt="Top Discount 3" style={{width: "inherit"}}/>
          <div className="justified col-20">
          <h4><a id="h5link" href="#">Producto</a></h4>
          <h4 class="pull-right">BS###</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae impedit beatae, ipsum delectus aperiam nesciunt magni facilis ullam.</p>
          </div>
        </div>
      </section>
    )
  }
}

export default ProductLineEvents
