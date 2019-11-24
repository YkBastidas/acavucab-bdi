import React, {Component} from 'react';

class ProductLine extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        image1: props.product1,
        image2: props.product2,
        image3: props.product3,
        image4: props.product4,
        image5: props.product5
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
          <img src={this.state.image1} alt="Top Discount 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image2} alt="Top Discount 2" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image3} alt="Top Discount 3" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image4} alt="Top Discount 4" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image5} alt="Top Discount 5" style={{width: "inherit"}}/>
        </div>
      </section>
    )
  }
}

export default ProductLine
