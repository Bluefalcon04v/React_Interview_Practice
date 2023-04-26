import React, {useEffect, useState} from 'react'

const ComponentDidUpdate_useEffect = () => {
    
    const [count, setCount] = useState(0)
    function Counter(){
        setCount(count + 1)
    }
    
    useEffect(() => {
        console.log('Component Did Update')
    }, [count])

// implementating the component did unmount: it will be executed when the component is removed
    useEffect(() => {
        return () => {
            console.log('Component Did Unmount')
        }
    }, [])


  return (
    <div>
        Component did Update only get execute when the value gets changed
        <p> updating value:{count}</p>
        <button onClick={Counter}> + </button>
    </div>
  )
}

export default ComponentDidUpdate_useEffect
