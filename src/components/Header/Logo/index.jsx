import React from "react";
/*import this.props.src from "./logotype.png";*/

export default class logo extends React.Component {
  constructor(props){
    super()
  }

  render() {
    return (
      <div style={this.props.style}>
         <img src={this.props.src} alt="" />
      </div>  
    )
  }
}