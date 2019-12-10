import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class OtherBeer extends Component{
    constructor(props) {
      super(props);
      this.state = {
    }
}
render(){
    return(
        <section className="row margin-bottom">
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/blonde-ale">Blonde Ale</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/bohemian-pilsener">Bohemian Pilsener</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/dry-stout">Dry Stout</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/dusseldorf-altbier">Düsseldorf Altbier</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/english-pale-ale">English Pale Ale</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/extra-strong-bitter">Extra-Strong Bitter</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/fruit-lambic">Fruit Lambic</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/imperial-ipa">Imperial IPA</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/imperial-stout">Imperial Stout</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/india-pale-ale">India Pale Ale</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/irish-red-ale">Irish Red Ale</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/munich-helles">Munich Helles</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/oktoberfest-marzen">Oktoberfest-Marzen</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/red-ale">Red Ale</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/schwarzbier">Schwarzbier (Black Beer)</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/spice">Spice</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/herb">Herb</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/vegetable">Vegetable</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/sweet-stout">Sweet Stout</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/weizen-weissbier">Weizen-Weissbier</a></li>
        </div>
        <div className="col-sm-2 mr-auto align-self-center margin">
        <li><a id="h5link" href="/descripcerveza/witbier">Witbier</a></li>
        </div>
        </section>
    )
}
}
export default OtherBeer