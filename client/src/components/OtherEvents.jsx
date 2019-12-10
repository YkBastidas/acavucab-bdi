import React, {Component} from 'react';

class OtherEvents extends Component{
    constructor(props) {
      super(props);
      this.state = {
        title: props.title,
        event6: props.event6,
        event7: props.event7,
        event8: props.event8
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
        <div className="col-2 margin-bottom">
            <img src={this.state.event6} alt="Event 1" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-9">
          <h4><a id="h5link" href="#">Evento</a></h4>
                            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                                    pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                                    aliquet egestas purus in.</p>
          </div>
          <div className="col-2 margin-bottom">
            <img src={this.state.event7} alt="Event 2" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-9">
          <h4><a id="h5link" href="#">Evento</a></h4>
                            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                                    pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                                    aliquet egestas purus in.</p>
          </div>
          <div className=" col-2 margin-bottom">
            <img src={this.state.event8} alt="Event 3" style={{width: "inherit"}}/>
          </div>
          <div className="justified col-9">
          <h4><a id="h5link" href="#">Evento</a></h4>
                            <p>Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In
                                    pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis
                                    aliquet egestas purus in.</p>
          </div>
      </section>
    )
  }
}

export default OtherEvents
