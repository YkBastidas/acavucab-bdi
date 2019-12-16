import React, {Component} from 'react';

class ProductLineShop extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        fav1: props.fav1,
        fav2: props.fav2,
        fav3: props.fav3,
        fav4: props.fav4,
        fav5: props.fav5
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
          </h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.fav1} alt="Favorito 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.fav2} alt="Favorito 2" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.fav3} alt="Favorito 3" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.fav4} alt="Favorito 4" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.fav5} alt="Favorito 5" style={{width: "inherit"}}/>
        </div>
      </section>
    )
  }
}

export default ProductLineShop
