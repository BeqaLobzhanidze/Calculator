import React , {Component} from "react";
import '../CSS/parent.css'
import '..//CSS/button.css'


export default class Button extends Component {
  
  render(){
    
    return(
      <div id={this.props.info.display} className={this.props.info.id}>
        {this.props.info.display}
      </div>
    )
  }
}