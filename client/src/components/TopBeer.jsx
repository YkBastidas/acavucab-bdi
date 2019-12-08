import React, {Component} from 'react';

class ProductLineBeer extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        image1: props.slide4,
        image2: props.slide5,
        image3: props.slide6,
        image4: props.slide7,
        image5: props.slide8,
        image6: props.slide9,
        image7: props.slide10,
        image8: props.slide11,
        image9: props.slide12,
        image10: props.slide13,
        image11: props.slide14
    }
  }
  render(){
    return(
      <section className="row align-items-center margin-bottom">
        <div className="col-sm-12 col align-self-center centered">
          <h4> Cervezas Importantes
          </h4>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image1} alt="Top Discount 1" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/dark-ale">Cerveza Dark Ale</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image2} alt="Top Discount 2" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/stout">Cervezas Stout</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image3} alt="Top Discount 3" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/porter">Cerveza Porter</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image4} alt="Top Discount 4" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/belgian">Cervezas Belgas</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image5} alt="Top Discount 5" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/pilsner">Cervezas Pilsner</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image6} alt="Top Discount 1" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/american-amber-ale">Cervezas American Amber Ale</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image7} alt="Top Discount 2" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/american-ipa">Cervezas American Ipa</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image8} alt="Top Discount 3" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/pale-ale">Cerveza American Pale Ale</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image9} alt="Top Discount 4" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/belgian">Cerveza Belgian</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image10} alt="Top Discount 5" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="descripcerveza/belgian-golden-ale">Cerveza Belgian Golden Strong Ale</a></h5>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
          <img src={this.state.image11} alt="Top Discount 5" style={{width: "inherit"}}/>
          <h5><a id= "h5link" href="/descripcerveza/belgian-dubbel">Cerveza Belgian Dubbel</a></h5>
        </div>
        
      </section>
    )
  }
}

export default ProductLineBeer
