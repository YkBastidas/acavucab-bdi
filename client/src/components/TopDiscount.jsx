import React, {Component} from 'react';

class TopDiscount extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        discount1: props.image1,
        discount2: props.image2,
        discount3: props.image3,
        discount4: props.image4,
        discount5: props.image5
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
          <img src={this.state.discount1} alt="Top Discount 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.discount2} alt="Top Discount 2" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.discount3} alt="Top Discount 3" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.discount4} alt="Top Discount 4" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.discount5} alt="Top Discount 5" style={{width: "inherit"}}/>
        </div>
      </section>
    )
  }
}

export default TopDiscount
