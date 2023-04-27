// It's a optional input that a component can accept it also allow the component to be dynamic. Props are just an object that contains the attributes and their values which have been passed from the parent component. Props are immutable their values can't be changed while accessing them.

import React from 'react'

const in_Functional_Component = (props) => {
        return(
        <>
            <h1> Hello {props.name} </h1>
            {props.children}
        </>
        )
    }

export default in_Functional_Component
