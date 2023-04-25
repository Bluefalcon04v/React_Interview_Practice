import React, { useState} from 'react'

const useState_FunctionalComponent = () => {
    const [count, setCount] = useState(0)       // here 0 is the default value in useState & count and setCount are the parameters to be passed.

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <p>useState Hook in Functional Component</p>
        <p> Count: {count} </p>  
        <button onClick={increment}> + </button>
        <button onClick={decrement}> - </button>
    </div>
  )
}

export default useState_FunctionalComponent
