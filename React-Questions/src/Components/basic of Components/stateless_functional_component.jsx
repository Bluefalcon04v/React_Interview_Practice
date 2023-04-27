// Components represents a part in UI, although the components can be reuse with different Properties and different values. Components can be in nested form. 

// types of components 1st StatelessComponent and 2nd StatefullComponent

import React from 'react'


const stateless_functional_component = () => {

    const Print = () => {
        return <h1> Hello </h1>
    }

  return (
    <div>
        {Print()}
    </div>
  )
}

export default stateless_functional_component
