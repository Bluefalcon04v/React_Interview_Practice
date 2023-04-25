import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {

    componentWillUnmount(){
        console.log('component is Unmounted')
    }

  render() {
    return (
      <div>
        Component will Unmount: it get executed when the component is removed from the DOM    
      </div>
    )
  }
}
