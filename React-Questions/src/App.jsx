import React from 'react'
import './App.css'

// ======================== stateless_functional_component=========================
import Stateless_functional_component from './Components/basic of Components/stateless_functional_component'

// ======================== statefull_functional_component=========================
import Statefull_class_component from './Components/basic of Components/statefull_class_component'


// =========================== USESTATE =======================
import UseState_Functional_Comp from './Components/Hooks/useState/useState_FunctionalComponent'
import UseState_Class_Comp from './Components/Hooks/useState/State_In_ClassComponent'

// =========================== LIFECYCLE METHODS =======================
import ComponentDidMount from './Components/Hooks/useEffect or LifeCycle Methods/On Class Components/ComponentDidMount'
import ComponentDidUpdate from './Components/Hooks/useEffect or LifeCycle Methods/On Class Components/ComponentDidUpdate'
import ComponentWillUnmount from './Components/Hooks/useEffect or LifeCycle Methods/On Class Components/ComponentWillUnmount'

// =========================== USEEFFECTS =======================
import ComponentDidMount_useEffect from './Components/Hooks/useEffect or LifeCycle Methods/On Functional Components/ComponentDidMount_useEffect'
import ComponentDidUpdate_useEffect from './Components/Hooks/useEffect or LifeCycle Methods/On Functional Components/ComponentDidUpdate_useEffect'




function App() {

  return (
    <div className="container">

      {/* -------------------------- Components ---------------------------- */}

      {/* ================= Stateless Components ========================= */}
      <Stateless_functional_component/>
      {/* ================= Statefull Components ========================= */}
      <Statefull_class_component/>



      {/*------------------------------ Hooks ---------------------------*/}

      {/*============================ useState ============================*/}
      {/* <UseState_Functional_Comp/>
      <br/>
      <UseState_Class_Comp/> */}

      {/*============================ useEffect ============================*/}
      {/* Class Based Components */}

      {/* <ComponentDidMount />
      <br/>
      <ComponentDidUpdate />
      <br/>
      <ComponentWillUnmount />  */}

      {/* Functional Based Components */}
      
      {/* <ComponentDidMount_useEffect/>
      <br/>
      <ComponentDidUpdate_useEffect/> */}

      
    </div>
  )
}

export default App
