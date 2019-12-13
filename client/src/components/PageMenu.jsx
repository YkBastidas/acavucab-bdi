import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class PageMenu extends Component{
  render(){
    return(
      <section className= "row margin-bottom">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <Link class="page-link" to="#" tabindex="-1" aria-disabled="true">
                Previous
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="#"> 1 </Link>
            </li>
            <li class="page-item active" aria-current="page">
              <Link class="page-link" to="#"> 2
                <span class="sr-only"> (current) </span>
              </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="#">3 </Link>
            </li>
            <li class="page-item">
              <Link class="page-link" to="#"> Next </Link>
            </li>
          </ul>
        </nav>
      </section>
    )
  }
}

export default PageMenu
