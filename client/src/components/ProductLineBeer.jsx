import React, {Component} from 'react';

class ProductLineBeer extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        product6: props.product6,
        product7: props.product7,
        product8: props.product8
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-2 margin-bottom">
            <img src={this.state.product6} alt="Event 1" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-9">
          <h5>Producto similar</h5>
                            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                                    pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                                    aliquet egestas purus in.</p>
          </div>
          <div className="col-2 margin-bottom">
            <img src={this.state.product7} alt="Event 2" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-9">
          <h5>Producto similar</h5>
                            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                                    pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                                    aliquet egestas purus in.</p>
          </div>
          <div className=" col-2 margin-bottom">
            <img src={this.state.product8} alt="Event 3" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-9">
          <h5>Producto similar</h5>
                            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                                    pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                                    aliquet egestas purus in.</p>
          </div>
      </section>
    )
  }
}

export default ProductLineBeer
