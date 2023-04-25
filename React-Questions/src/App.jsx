import React from 'react'
import './App.css'
import UseState_Functional_Comp from './Components/Hooks/useState/useState_FunctionalComponent'
import UseState_Class_Comp from './Components/Hooks/useState/State_In_ClassComponent'


function App() {

  return (
    <div className="container">

      {/*------------------------------ Hooks ---------------------------*/}

      {/*============================ useState ============================*/}
      <UseState_Functional_Comp/>
      <br/>
      <UseState_Class_Comp/>


    </div>
  )
}

export default App
