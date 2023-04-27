import React, { Component } from 'react'

export default class in_Class_Component extends Component {
  render() {
    return (
        <>
      <h1>
        Hello {this.props.name} 
      </h1>
        {this.props.children}
        </>
    )
  }
}
