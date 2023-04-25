import React, {useEffect} from 'react'

const ComponentDidMount_useEffect = () => {
    useEffect(()=>{
            console.log('component Did Mounted')
    },[])

  return (
    <div>
      Component did Mounted only when the page is loaded first time
    </div>
  )
}

export default ComponentDidMount_useEffect
