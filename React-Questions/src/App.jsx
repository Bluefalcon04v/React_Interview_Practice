import React from 'react'
import './App.css'

// =========================== USESTATE =======================
import UseState_Functional_Comp from './Components/Hooks/useState/useState_FunctionalComponent'
import UseState_Class_Comp from './Components/Hooks/useState/State_In_ClassComponent'

// =========================== LIFECYCLE METHODS =======================
import ComponentDidMount from './Components/Hooks/useEffect or LifeCycle Methods/On Class Components/ComponentDidMount'
import ComponentDidUpdate from './Components/Hooks/useEffect or LifeCycle Methods/On Class Components/ComponentDidUpdate'
import ComponentWillUnmount from './Components/Hooks/useEffect or LifeCycle Methods/On Class Components/ComponentWillUnmount'

// =========================== USEEFFECTS =======================

function App() {

  return (
    <div className="container">

      {/*------------------------------ Hooks ---------------------------*/}

      {/*============================ useState ============================*/}
      {/* <UseState_Functional_Comp/>
      <br/>
      <UseState_Class_Comp/> */}

      {/*============================ useEffect ============================*/}
      {/* Class Based Components */}
      <ComponentDidMount />
      <br/>
      <ComponentDidUpdate />
      <br/>
      <ComponentWillUnmount /> 


    </div>
  )
}

export default App
