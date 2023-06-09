import React, { Component } from 'react'

export default class State_In_ClassComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            count: 0
        };

    }
    
    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
    return (
      <div>
         <p>useState Hook in Class Component</p>
        <p> Count: {this.state.count} </p>  
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
      </div>
    )
  }
}
