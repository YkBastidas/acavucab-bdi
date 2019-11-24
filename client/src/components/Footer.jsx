import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class Footer extends Component{
  render(){
    return(
      <footer className="row">
        <div className="col-xs 12 col-sm 3">
           <h3> Contacto</h3>
             <a href={`tel:${"05002378222"}`} target="new">
               > 0500-CERUCAB
             </a>
             <br/>
           <a href={`tel:${"05002378222"}`} target="new">
             > 0500-2378222
           </a>
           <br/>
           <a href={`mailto:${"acavucab_support@acavucab.com"}`} target="new">
             acavucab_support@acavucab.com
           </a>
        </div>
        <div className="col-xs 12 col-sm 3">
           <h3> Información </h3>
            ACAVUCAB @ 2019 <br/>
          <Link to= "/tienda/"> > Sobre nosotros </Link> <br/>
            <Link to= "/contacto/" > > Servicio al cliente</Link>
        </div>
        <div className="col-xs 12 col-sm 3">
           <h3> Comunidad </h3>
           <Link to= "/" >
              <img src={require('../images/facebook-logo.png')} alt="Facebook"/>
           </Link>
           &nbsp; &nbsp;
           <Link to= "/" >
             <img src={require('../images/instagram-symbol.png')} alt="Instagram"/>
           </Link>
           &nbsp; &nbsp;
           <Link to= "/" >
             <img src={require('../images/youtube.png')} alt="Youtube"/>
           </Link>
        </div>
      </footer>
    )
  }
}

export default Footer
