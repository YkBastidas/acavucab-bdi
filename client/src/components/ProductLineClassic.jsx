import React, {Component} from 'react';

class ProductLineClassic extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        classic1: props.classic1,
        classic2: props.classic2,
        classic3: props.classic3,
        classic4: props.classic4,
        classic5: props.classic5
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
          <img src={this.state.classic1} alt="Clasico 1" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.classic2} alt="Clasico 2" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.classic3} alt="Clasico 3" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.classic4} alt="Clasico 4" style={{width: "inherit"}}/>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.classic5} alt="Clasico 5" style={{width: "inherit"}}/>
        </div>
      </section>
    )
  }
}

export default ProductLineClassic
