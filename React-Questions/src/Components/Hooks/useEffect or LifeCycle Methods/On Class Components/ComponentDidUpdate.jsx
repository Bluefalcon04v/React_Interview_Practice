import React, { Component } from 'react'

export default class ComponentDidMount extends Component {
    constructor(){
        super()
            this.state = {
                count : 0,
        }
    }
    componentDidUpdate(){
        console.log("component is Updated");
    }

    increment() {
        this.setState({count: this.state.count + 1})
    }

  render() {
    return (
      <div>
        Component Did Update: it will execute when the component will be updated.
        <h1>{this.state.count}</h1>
        <button onClick={() => {this.increment()}}>Increment</button>
      </div>
    )
  }
}
