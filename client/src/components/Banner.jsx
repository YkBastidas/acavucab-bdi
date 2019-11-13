import React, {Component} from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'

class Banner extends Component{
  constructor(props) {
    super(props);
    this.state = {
      active: props.active
    }
  }
  render(){
    return(
      <div className="row align-items-center">
        <div className = "menu col-xs-12 col-sm-6" >
          <LeftMenu active = {this.state.active}/>
        </div>
         <div className = "menu col-xs-12 col-sm-6" >
          <RightMenu active = {this.state.active}/>
        </div>
      </div>
    )
  }
}

export default Banner
