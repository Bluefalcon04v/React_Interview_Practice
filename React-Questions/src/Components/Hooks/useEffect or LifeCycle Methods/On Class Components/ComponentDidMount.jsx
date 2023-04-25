import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
 
    componentDidMount(){
        console.log("component is Mounted");
    }

 
  render() {
    return (
      <div>
        Component Did Mount: it will execute when the component will be loaded at the first time.
      </div>
    )
  }
}
